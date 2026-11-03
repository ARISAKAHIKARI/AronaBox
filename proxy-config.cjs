'use strict';
const {randomUUID}=require('node:crypto');
function field(v,label,max=1024){if(typeof v!=='string'||!v.trim()||v.length>max||/[\x00-\x1f\x7f]/.test(v))throw Error(label+'无效');return v.trim();}
function decode64(s){if(!/^[\w+/=-]*$/.test(s))throw Error('SSR 链接编码无效');return new TextDecoder('utf-8',{fatal:true}).decode(Buffer.from(s,'base64url'));}
function validateNode(n){
 if(!n||!['ssr','trojan'].includes(n.type))throw Error('仅支持 SSR 或 Trojan');
 const out={name:field(n.name||n.server,'节点名称',100),type:n.type,server:field(n.server,'服务器',253),port:Number(n.port),password:field(n.password,'密码',4096)};
 if(!/^[\w.:[\]-]+$/.test(out.server)||!Number.isInteger(out.port)||out.port<1||out.port>65535)throw Error('服务器或端口无效');
 out.password=n.password;out.server=out.server.replace(/^\[|\]$/g,'');
 if(n.type==='ssr'){for(const k of ['cipher','protocol','obfs']){out[k]=field(n[k],k,80);if(!/^[\w.-]+$/.test(out[k]))throw Error(k+'无效');}for(const k of ['obfs-param','protocol-param'])if(n[k])out[k]=field(n[k],k);}
 else {out['skip-cert-verify']=false;if(n.sni)out.sni=field(n.sni,'SNI',253);const network=n.network||'tcp';if(!['tcp','ws','grpc'].includes(network))throw Error('Trojan 仅支持 TCP、WS、gRPC');if(network!=='tcp')out.network=network;if(network==='ws'){out['ws-opts']={path:field(n['ws-opts']?.path||'/','WS 路径')};if(n['ws-opts']?.headers?.Host)out['ws-opts'].headers={Host:field(n['ws-opts'].headers.Host,'WS Host',253)};}if(network==='grpc')out['grpc-opts']={'grpc-service-name':field(n['grpc-opts']?.['grpc-service-name']||'GunService','gRPC 服务名',253)};if(n.alpn){if(!Array.isArray(n.alpn)||n.alpn.length>8)throw Error('ALPN 无效');out.alpn=n.alpn.map(x=>field(x,'ALPN',80));}}
 return out;
}
function parseLink(input){
 try{
 const s=field(input,'分享链接',16000);
 if(s.startsWith('ssr://')){const raw=decode64(s.slice(6)),at=raw.indexOf('/?'),head=at<0?raw:raw.slice(0,at),parts=head.replace(/\/$/,'').split(':');if(parts.length<6)throw Error();const [port,protocol,cipher,obfs,password]=parts.splice(-5),q=new URLSearchParams(at<0?'':raw.slice(at+2));return validateNode({type:'ssr',server:parts.join(':'),port,protocol,cipher,obfs,password:decode64(password),name:q.get('remarks')?decode64(q.get('remarks')):parts.join(':'),'obfs-param':q.get('obfsparam')?decode64(q.get('obfsparam')):'','protocol-param':q.get('protoparam')?decode64(q.get('protoparam')):''});}
 if(s.startsWith('trojan://')){const u=new URL(s),q=u.searchParams;for(const k of q.keys())if(!['sni','peer','type','security','path','host','serviceName','alpn','allowInsecure','skip-cert-verify'].includes(k))throw Error('不支持 Trojan 参数：'+k);if(u.password||!u.username||!u.hostname)throw Error();if(q.get('security')&&!['tls'].includes(q.get('security')))throw Error('仅支持 TLS Trojan');if(['1','true'].includes(q.get('allowInsecure'))||['1','true'].includes(q.get('skip-cert-verify')))throw Error('此节点要求跳过证书验证，请修正服务器证书后添加');return validateNode({type:'trojan',name:decodeURIComponent(u.hash.slice(1))||u.hostname,server:u.hostname,port:u.port||443,password:decodeURIComponent(u.username),sni:q.get('sni')||q.get('peer')||'',network:q.get('type')||'tcp','ws-opts':{path:q.get('path')||'/',headers:{Host:q.get('host')||''}},'grpc-opts':{'grpc-service-name':q.get('serviceName')||'GunService'},alpn:q.get('alpn')?.split(',')});}
 throw Error('请粘贴 ssr:// 或 trojan:// 分享链接');
 }catch(e){if(e.message.startsWith('不支持 Trojan')||e.message.startsWith('此节点')||e.message.startsWith('仅支持')||e.message.startsWith('请粘贴'))throw e;throw Error('分享链接无效，请核对格式（未记录链接或密码）');}
}
function addNode(settings={},data,storage){const node=typeof data==='string'?parseLink(data):validateNode(data);if(!storage.isEncryptionAvailable())throw Error('系统加密不可用，未保存节点');const nodes=[...(settings.nodes||[])];if(nodes.length>=50)throw Error('最多保存 50 个节点，请先删除不用的节点');const item={id:randomUUID(),name:node.name,type:node.type,server:node.server,port:node.port,sealed:storage.encryptString(JSON.stringify(node)).toString('base64')};nodes.push(item);return {...settings,nodes,selected:settings.selected||item.id};}
function decryptNode(settings,storage){const item=settings.nodes?.find(n=>n.id===settings.selected);if(!item)throw Error('请先添加并选择节点');try{return validateNode(JSON.parse(storage.decryptString(Buffer.from(item.sealed,'base64'))));}catch{throw Error('无法解密节点，请在本机重新添加');}}
function publicSettings(s={}){return {enabled:!!s.enabled,selected:s.selected||'',bypass:s.bypass||'',nodes:(s.nodes||[]).map(({id,name,type,server,port})=>({id,name,type,server,port}))};}
function bypassHosts(value=''){if(typeof value!=='string'||value.length>2000)throw Error('直连域名过长');const hosts=value.split(/[\s,;]+/).filter(Boolean);if(hosts.some(h=>!/^\.?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(h)))throw Error('直连列表只填写域名或 IPv4，用逗号分隔；域名前加点匹配子域名');return [...new Set(hosts)];}
function coreConfig(node,port,bypass=[]){return {'mixed-port':port,'allow-lan':false,'bind-address':'127.0.0.1',mode:'rule','log-level':'silent',ipv6:false,'external-controller':'',tun:{enable:false},dns:{enable:false},profile:{'store-selected':false},proxies:[{...node,name:'AronaProxy'}],rules:[...bypass.map(h=>h.startsWith('.')?'DOMAIN-SUFFIX,'+h.slice(1)+',DIRECT':/^\d+\.\d+\.\d+\.\d+$/.test(h)?'IP-CIDR,'+h+'/32,DIRECT,no-resolve':'DOMAIN,'+h+',DIRECT'),'MATCH,AronaProxy']};}
module.exports={validateNode,parseLink,addNode,decryptNode,publicSettings,bypassHosts,coreConfig};

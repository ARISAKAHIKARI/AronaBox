'use strict';
function storage(){return require('electron').safeStorage;}
function publicApi(c={}){return {enabled:!!c.enabled,baseUrl:c.baseUrl||'',auth:c.auth||'api-key',model:c.model||'',hasKey:!!c.encryptedKey};}
function saveApi(data,old={}){
 if(!data||typeof data.enabled!=='boolean')throw Error('API 设置无效');
 const baseUrl=String(data.baseUrl||'').trim(),model=String(data.model||'').trim(),key=String(data.key||'').trim();
 if(baseUrl){let u;try{u=new URL(baseUrl);}catch{throw Error('API 地址无效');}if(u.username||u.password||u.search||u.hash||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('请填写 HTTPS API 地址；本地网关可用 HTTP');}
 if(baseUrl.length>2048||model.length>200||/[\r\n\x00]/.test(model)||key.length>8192||/[\r\n\x00]/.test(key))throw Error('API 参数无效');
 if(!['api-key','bearer'].includes(data.auth))throw Error('认证方式无效');
 let encryptedKey=data.clearKey?'':old.encryptedKey||'';
 if(baseUrl!==old.baseUrl&&!key&&!data.clearKey&&old.encryptedKey)throw Error('更换 API 地址时请重新填写对应密钥，或勾选清除密钥');
 if(key){const s=storage();if(!s.isEncryptionAvailable())throw Error('系统密钥加密不可用，未保存密钥');encryptedKey=s.encryptString(key).toString('base64');}
 if(data.enabled&&(!baseUrl||!encryptedKey))throw Error('启用自定义 API 需要地址和密钥');
 return {enabled:data.enabled,baseUrl,auth:data.auth,model,encryptedKey};
}
function runtimeSettings(s){if(s.cliBackend==='codeagent')return {...s,claudeApi:{enabled:false}};const c=s.claudeApi;if(!c?.enabled)return s;let key;try{key=storage().decryptString(Buffer.from(c.encryptedKey,'base64'));}catch{throw Error('无法解密 API 密钥，请在本机重新保存');}return {...s,claudeApi:{...c,key}};}
function agentEnv(s,parent=process.env){const env=require('./proxy-env.cjs').apply(parent);delete env.ELECTRON_RUN_AS_NODE;const c=s.claudeApi;if(s.cliBackend!=='codeagent'&&c?.enabled){for(const k of Object.keys(env))if(/^ANTHROPIC_|^CLAUDE_CODE_USE_(BEDROCK|VERTEX|FOUNDRY)/.test(k))delete env[k];env.ANTHROPIC_BASE_URL=c.baseUrl;env[c.auth==='bearer'?'ANTHROPIC_AUTH_TOKEN':'ANTHROPIC_API_KEY']=c.key;if(c.model){env.ANTHROPIC_MODEL=c.model;for(const tier of ['HAIKU','SONNET','OPUS'])env['ANTHROPIC_DEFAULT_'+tier+'_MODEL']=c.model;}}return env;}
module.exports={saveApi,publicApi,runtimeSettings,agentEnv};

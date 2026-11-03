(()=>{
'use strict';
const root=document.querySelector('#settings .settings-scroll');if(!root)return;
const panel=document.createElement('article');panel.id='proxy-settings';panel.innerHTML=`<h3>桌宠专用代理 · SSR / Trojan</h3>
<p>仅作用于桌宠会话、配置的 API、内置模型网页、下载和桌宠启动的终端。不会修改 Windows 系统代理，不启用 TUN。</p>
<label><input type="checkbox" id="proxy-enabled"> 启用桌宠代理</label>
<label>当前节点<select id="proxy-node"><option value="">请先添加节点</option></select></label>
<label>直连域名（可选，逗号分隔）<input id="proxy-bypass" placeholder="例如 .huawei.com,intranet.example" maxlength="2000"></label>
<p class="footnote">本机 localhost / 127.0.0.1 始终直连。域名前加点包含子域名，内网 API 可按需加入。</p>
<div class="row"><button type="button" class="primary" id="proxy-save">保存并应用 / 重试</button><button type="button" class="subtle" id="proxy-test">测试 HTTPS 连接</button><button type="button" class="subtle" id="proxy-delete">删除所选节点</button></div>
<p id="proxy-status" role="status">正在读取代理状态…</p>
<details><summary>添加节点：粘贴分享链接</summary><label>SSR / Trojan 分享链接<input type="password" id="proxy-link" autocomplete="off" spellcheck="false" maxlength="16000" placeholder="ssr://… 或 trojan://…"></label><button type="button" class="subtle" id="proxy-import">添加分享节点</button><p class="footnote">一次添加一个节点。保存后清空链接，密码使用本机系统加密；订阅链接暂不支持。Trojan 支持 TCP、WS、gRPC，验证服务器证书。</p></details>
<details><summary>手动添加服务器</summary>
<label>协议<select id="proxy-type"><option value="trojan">Trojan</option><option value="ssr">SSR</option></select></label>
<label>节点名称<input id="proxy-name" maxlength="100"></label><div class="row"><label>服务器<input id="proxy-server" maxlength="253" placeholder="服务器域名或 IP"></label><label>端口<input id="proxy-port" type="number" min="1" max="65535" value="443"></label></div>
<label>密码<input id="proxy-password" type="password" autocomplete="new-password" maxlength="4096"></label>
<div id="proxy-trojan-fields"><label>TLS SNI（可选）<input id="proxy-sni" maxlength="253" placeholder="证书对应的域名"></label><label>传输<select id="proxy-network"><option value="tcp">TCP</option><option value="ws">WebSocket</option><option value="grpc">gRPC</option></select></label><label>WS 路径<input id="proxy-ws-path" value="/" maxlength="1024"></label><label>WS Host（可选）<input id="proxy-ws-host" maxlength="253"></label><label>gRPC 服务名<input id="proxy-grpc" value="GunService" maxlength="253"></label></div>
<div id="proxy-ssr-fields" hidden><label>加密方式<input id="proxy-cipher" value="aes-256-cfb" maxlength="80"></label><label>协议<input id="proxy-protocol" value="auth_sha1_v4" maxlength="80"></label><label>协议参数（可选）<input type="password" id="proxy-protocol-param" maxlength="1024" autocomplete="off"></label><label>混淆<input id="proxy-obfs" value="tls1.2_ticket_auth" maxlength="80"></label><label>混淆参数（可选）<input id="proxy-obfs-param" maxlength="1024"></label></div>
<button type="button" class="subtle" id="proxy-manual">添加服务器</button></details>
<p class="footnote">内置 Windows x64 Mihomo 核心，首次启用无需下载。终端与 CodeAgent / ClaudeCode 通过代理环境变量接入；自行清除或忽略这些变量的程序可能直连。切换前请结束正在运行的终端会话。外部 Edge 扩展模式、你单独打开的浏览器和系统终端不受此设置影响；网页会话请使用“内置网页”。</p>`;
root.prepend(panel);const $=id=>document.getElementById(id);let pending=false;
function feedback(text){$('proxy-status').textContent=text;}
function status(info){feedback(info.message||'');$('proxy-test').disabled=!info.ready||!!info.busy;}
function render(s){$('proxy-enabled').checked=!!s.enabled;$('proxy-bypass').value=s.bypass||'';const select=$('proxy-node');select.replaceChildren();if(!s.nodes?.length)select.add(new Option('请先添加节点',''));for(const n of s.nodes||[])select.add(new Option(n.name+' · '+n.type.toUpperCase()+' · '+n.server+':'+n.port,n.id));select.value=s.selected||'';}
async function refresh(){const s=await window.desk.invoke('proxy:status');render(s.settings);status(s);}
function task(fn){return async()=>{if(pending)return;pending=true;for(const b of panel.querySelectorAll('button'))b.disabled=true;try{await fn();}catch(e){feedback(e.message);}finally{pending=false;for(const b of panel.querySelectorAll('button'))b.disabled=false;}};}
$('proxy-save').onclick=task(async()=>status(await window.desk.invoke('proxy:save',{enabled:$('proxy-enabled').checked,selected:$('proxy-node').value,bypass:$('proxy-bypass').value})));
$('proxy-test').onclick=task(async()=>{feedback('正在测试 HTTPS 连接，最多等待 15 秒…');status(await window.desk.invoke('proxy:test'));});
$('proxy-delete').onclick=task(async()=>{if(!$('proxy-node').value)return;render(await window.desk.invoke('proxy:delete',$('proxy-node').value));feedback('已删除节点');});
$('proxy-import').onclick=task(async()=>{const s=await window.desk.invoke('proxy:add',$('proxy-link').value);$('proxy-link').value='';render(s);feedback('节点已加密保存，请选择节点并保存应用');});
$('proxy-type').onchange=()=>{$('proxy-trojan-fields').hidden=$('proxy-type').value!=='trojan';$('proxy-ssr-fields').hidden=$('proxy-type').value!=='ssr';};
$('proxy-manual').onclick=task(async()=>{const val=id=>$(id).value;const node={name:val('proxy-name')||val('proxy-server'),type:val('proxy-type'),server:val('proxy-server'),port:Number(val('proxy-port')),password:val('proxy-password'),sni:val('proxy-sni'),network:val('proxy-network'),'ws-opts':{path:val('proxy-ws-path'),headers:{Host:val('proxy-ws-host')}},'grpc-opts':{'grpc-service-name':val('proxy-grpc')},cipher:val('proxy-cipher'),protocol:val('proxy-protocol'),obfs:val('proxy-obfs'),'protocol-param':val('proxy-protocol-param'),'obfs-param':val('proxy-obfs-param')};render(await window.desk.invoke('proxy:add',node));$('proxy-password').value='';$('proxy-protocol-param').value='';feedback('服务器已加密保存，请选择节点并保存应用');});
window.desk.on('proxy:status',status);refresh().catch(e=>feedback(e.message));
})();

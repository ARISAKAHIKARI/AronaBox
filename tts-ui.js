(()=>{
'use strict';
let snapshot=null,info=null,audio=null,audioURL=null,playEpoch=0;
const $=id=>document.getElementById(id);
const status=document.createElement('p');status.className='footnote';status.id='tts-feedback';status.setAttribute('role','status');
function message(text){status.textContent=text;const panel=$('tts-panel-status');if(panel)panel.textContent=text;}
async function call(name,...args){try{return await window.desk.invoke(name,...args);}catch(e){message(e.message);throw e;}}
function task(fn){return ()=>Promise.resolve().then(fn).catch(()=>{});}
function stopAudio(){playEpoch++;if(audio){audio.pause();audio.src='';audio=null;}if(audioURL){URL.revokeObjectURL(audioURL);audioURL=null;}}
window.desk.on('tts:stop',stopAudio);
window.desk.on('tts:audio',async data=>{stopAudio();const token=playEpoch;if(!snapshot?.settings?.tts?.enabled)return;const bytes=Uint8Array.from(atob(data.audio),c=>c.charCodeAt(0));audioURL=URL.createObjectURL(new Blob([bytes],{type:'audio/wav'}));audio=new Audio(audioURL);audio.volume=data.volume;audio.onended=()=>{if(token===playEpoch)stopAudio();};try{await audio.play();}catch(e){message('播放失败：'+e.message);}});
window.desk.on('tts:status',data=>message(data.message));
const controls=document.createElement('div');controls.className='row tts-controls';
const toggle=document.createElement('button');toggle.type='button';toggle.className='subtle';toggle.textContent='TTS：关闭';toggle.onclick=task(async()=>{const result=await call('tts:save',{enabled:!snapshot?.settings?.tts?.enabled});render(result);});
const read=document.createElement('button');read.type='button';read.className='subtle';read.textContent='朗读回复';read.onclick=task(async()=>{const latest=[...(snapshot?.messages||[])].reverse().find(m=>m.role==='assistant'&&m.text);if(!latest){message('暂无可朗读的回复');return;}await call('tts:speak',latest.text);});
const stop=document.createElement('button');stop.type='button';stop.className='subtle';stop.textContent='停止语音';stop.onclick=task(()=>call('tts:stop'));controls.append(toggle,read,stop);
const chat=document.querySelector('#chat-form,#pet-form');if(chat){chat.after(controls);controls.after(status);}else{document.body.append(controls,status);}
const settings=document.querySelector('#settings .settings-scroll');
if(settings){
 const panel=document.createElement('article');panel.id='tts-settings';panel.innerHTML=`<h3>角色语音 · 本地 CUDA</h3>
 <p>使用 GPT-SoVITS 的 NVIDIA 环境。首次下载角色权重，之后复用本地缓存。</p>
 <label><input type="checkbox" id="tts-enabled"> 开启 TTS</label>
 <label><input type="checkbox" id="tts-auto"> 回复完成后自动朗读</label>
 <label><input type="checkbox" id="tts-follow"> 音色随皮肤变化</label>
 <label>管理／手动使用的角色<select id="tts-model"></select></label><p id="tts-model-note" class="footnote"></p>
 <div class="row"><button type="button" class="subtle" id="tts-source">模型来源</button><button type="button" class="subtle" id="tts-download">下载此角色</button><button type="button" class="subtle" id="tts-cancel">取消下载</button></div>
 <div class="tts-install"><h4>一键配置 CUDA 环境</h4><p>自动复用已有环境；缺失时下载官方 NVIDIA 整合包（普通版约 8.2 GB，RTX 50 系列约 8.8 GB）。安装位置需至少 35 GiB 空间。</p>
 <label>下载源<select id="tts-setup-source"><option value="hf">Hugging Face 官方</option><option value="mirror">HF-Mirror 国内镜像</option></select></label>
 <label>显卡环境<select id="tts-setup-flavor"><option value="auto">自动检测 NVIDIA 显卡</option><option value="standard">普通 NVIDIA 版</option><option value="rtx50">RTX 50 / Blackwell 版</option></select></label>
 <p id="tts-setup-location" class="footnote"></p><div class="row"><button type="button" id="tts-setup" class="primary">一键配置 CUDA</button><button type="button" id="tts-setup-folder" class="subtle">更改安装位置</button><button type="button" id="tts-setup-import" class="subtle">导入离线整合包</button><button type="button" id="tts-setup-cancel" class="subtle" disabled>取消配置</button></div>
 <progress id="tts-setup-progress" max="100" hidden></progress><p id="tts-setup-status" role="status">配置完成后自动填写环境路径并检测 CUDA。角色模型仍在上方按需下载。</p><p class="footnote">内网可导入已下载的官方 v2pro-20250604 .7z。缺少 NVIDIA 驱动时会提示先安装驱动；不需要单独安装 CUDA Toolkit。解压工具已随客户端提供。</p></div>
 <details><summary>手动选择／检测已有 CUDA 环境</summary><p id="tts-environment"></p><div class="row"><button type="button" class="subtle" id="tts-root">选择 GPT-SoVITS 目录</button><button type="button" class="subtle" id="tts-python">选择 Python</button><button type="button" class="subtle" id="tts-probe">检测 CUDA</button><button type="button" class="subtle" id="tts-guide">获取官方整合包</button></div><p>也可手动选择已解压的 NVIDIA 整合包。编译桌宠不会重新部署此环境。</p></details>
 <label>参考音频（3–10 秒）</label><div class="row"><button type="button" class="subtle" id="tts-import">导入 WAV</button><button type="button" class="subtle" id="tts-refs">加载仓库参考音频</button></div><select id="tts-ref-list" aria-label="参考音频"><option value="">先加载列表，试听确认后选择</option></select><p id="tts-reference" class="footnote"></p><button type="button" class="subtle" id="tts-preview-reference">试听参考音频</button>
 <label>参考音频的准确台词<textarea id="tts-prompt" rows="2" maxlength="2000"></textarea></label><label>参考语言<select id="tts-prompt-language"><option value="zh">中文</option><option value="ja">日语</option><option value="en">英语</option><option value="auto">自动</option></select></label>
 <label>朗读语言<select id="tts-language"><option value="zh">中文（中英混合）</option><option value="ja">日语（日英混合）</option><option value="en">英语</option><option value="auto">多语言自动</option></select></label>
 <div class="row"><label>语速<input id="tts-speed" type="number" min="0.6" max="1.5" step="0.05"></label><label>音量<input id="tts-volume" type="range" min="0" max="1" step="0.05"></label></div>
 <div class="row"><button type="button" class="primary" id="tts-save">保存语音配置</button><button type="button" class="subtle" id="tts-test">保存并试听</button></div><p id="tts-panel-status" role="status"></p>
 <p class="footnote">凯伊暂无已核实模型，随皮肤模式下不朗读。参考包由社区整理，台词可能不准确，请核对。阿罗娜、普拉娜需自行导入参考音频。每条最多朗读 800 字，跳过代码块。</p>`;
 settings.prepend(panel);
 window.desk.on('tts:status',d=>{$('tts-panel-status').textContent=d.message;});
 const save=async()=>{const result=await call('tts:save',{enabled:$('tts-enabled').checked,autoRead:$('tts-auto').checked,followSkin:$('tts-follow').checked,model:$('tts-model').value,language:$('tts-language').value,speed:Number($('tts-speed').value),volume:Number($('tts-volume').value),voice:{id:$('tts-model').value,prompt:$('tts-prompt').value,promptLanguage:$('tts-prompt-language').value}});render(result);return result;};
 const setupOptions=()=>({source:$('tts-setup-source').value,flavor:$('tts-setup-flavor').value});
 const setupState=data=>{for(const id of ['tts-setup','tts-setup-folder','tts-setup-import','tts-setup-source','tts-setup-flavor'])$(id).disabled=!!data.busy;$('tts-setup-cancel').disabled=!data.busy;$('tts-setup-status').textContent=data.message||'尚未配置';const bar=$('tts-setup-progress');bar.hidden=!data.busy;if(Number.isFinite(data.percent))bar.value=data.percent;else bar.removeAttribute('value');};
 window.desk.on('tts:setup-status',setupState);call('tts:setup-status').then(data=>{if(data)setupState(data);}).catch(()=>{});
 for(const [id,method]of [['tts-setup','tts:setup'],['tts-setup-import','tts:setup-import']])$(id).onclick=task(async()=>{await call(method,setupOptions());render(await call('tts:status'));});
 $('tts-setup-cancel').onclick=task(()=>call('tts:setup-cancel'));
 $('tts-setup-folder').onclick=task(async()=>{await call('tts:setup-folder');render(await call('tts:status'));});
 $('tts-save').onclick=task(save);$('tts-test').onclick=task(async()=>{await save();await call('tts:test',$('tts-language').value==='ja'?'先生、今日も一緒に頑張りましょう。':$('tts-language').value==='en'?"Hello, Sensei. Let's do our best today.":'老师，今天也一起加油吧。');});
 for(const [id,key]of [['tts-enabled','enabled'],['tts-auto','autoRead'],['tts-follow','followSkin']])$(id).onchange=task(async()=>render(await call('tts:save',{[key]:$(id).checked})));
 $('tts-model').onchange=task(async()=>{render(await call('tts:save',{model:$('tts-model').value}));$('tts-ref-list').replaceChildren(new Option('先加载参考音频列表',''));});
 for(const [id,kind]of [['tts-root','root'],['tts-python','python'],['tts-import','reference']])$(id).onclick=task(async()=>render(await call('tts:pick',kind)));
 $('tts-probe').onclick=task(async()=>{message('正在检测 CUDA…');const r=await call('tts:probe');$('tts-environment').textContent=`CUDA 可用：${r.gpu} · PyTorch ${r.torch} · CUDA ${r.cuda}`;});
 $('tts-download').onclick=task(async()=>{message('正在校验缓存或下载…');render(await call('tts:download',$('tts-model').value));});$('tts-cancel').onclick=task(()=>call('tts:cancel-download'));
 $('tts-source').onclick=task(()=>call('link:open','https://huggingface.co/'+info.catalog.find(m=>m.id===$('tts-model').value).repo));
 $('tts-guide').onclick=task(()=>call('link:open','https://github.com/RVC-Boss/GPT-SoVITS/blob/main/docs/cn/README.md'));
 $('tts-preview-reference').onclick=task(()=>call('tts:reference-preview'));
 $('tts-refs').onclick=task(async()=>{const refs=await call('tts:references',$('tts-model').value);$('tts-ref-list').replaceChildren(new Option(refs.length?'选择一条参考音频':'未找到 3–10 秒 WAV，请自行导入',''));refs.forEach((r,i)=>$('tts-ref-list').add(new Option(r.label+' · '+r.seconds+' 秒',String(i))));});
 $('tts-ref-list').onchange=task(async()=>{if($('tts-ref-list').value!=='')render(await call('tts:reference',{id:$('tts-model').value,index:Number($('tts-ref-list').value)}));});
}
function render(result){if(!result)return;info=result;const s=result.settings;toggle.textContent='TTS：'+(s.enabled?'开启':'关闭');toggle.setAttribute('aria-pressed',String(s.enabled));if(!$('tts-model'))return;
 const choices=$('tts-model');if(!choices.options.length)for(const m of result.catalog)choices.add(new Option(m.label,m.id));choices.value=s.model;
 for(const [id,k]of [['tts-enabled','enabled'],['tts-auto','autoRead'],['tts-follow','followSkin']])$(id).checked=s[k];
 $('tts-language').value=s.language;$('tts-speed').value=s.speed;$('tts-volume').value=s.volume;
 if($('tts-setup-location'))$('tts-setup-location').textContent='安装位置：'+(s.setupDir||'应用用户目录（可更改）');
 const model=result.catalog.find(m=>m.id===s.model),v=s.voices[s.model]||{};$('tts-model-note').textContent=(model.downloaded?'已下载':'尚未下载')+' · '+model.license;$('tts-environment').textContent=s.root||'尚未选择 GPT-SoVITS 环境';$('tts-reference').textContent=v.reference||'尚未选择参考音频';$('tts-prompt').value=v.prompt||'';$('tts-prompt-language').value=v.promptLanguage||model.language;
}
window.desk.on('state',s=>{snapshot=s;toggle.textContent='TTS：'+(s.settings.tts?.enabled?'开启':'关闭');if(!s.settings.tts?.enabled)stopAudio();});
window.desk.invoke('state:get').then(s=>{snapshot=s;}).catch(()=>{});call('tts:status').then(render).catch(()=>{});
window.addEventListener('beforeunload',stopAudio);
})();

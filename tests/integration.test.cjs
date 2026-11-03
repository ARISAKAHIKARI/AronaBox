const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const os=require('node:os');const path=require('node:path');const {runAgent}=require('../agent.cjs');
function fixture(body){const dir=fs.mkdtempSync(path.join(os.tmpdir(),'arona-test-'));const file=path.join(dir,'mock-agent');fs.writeFileSync(file,'#!/usr/bin/env node\n'+body,{mode:0o755});return {dir,file};}
test('CLI lifecycle: stdin literal text, stream, explicit resume, final result', {skip:process.platform==='win32'},async()=>{
 const f=fixture(`let s='';process.stdin.setEncoding('utf8');process.stdin.on('data',c=>s+=c);process.stdin.on('end',()=>{ const id=process.argv.includes('--resume')?process.argv[process.argv.indexOf('--resume')+1]:'new-session'; console.log(JSON.stringify({type:'stream_event',event:{delta:{type:'text_delta',text:s.trim()}}}));console.log(JSON.stringify({type:'result',result:s.trim(),session_id:id}));});`);
 try{const events=[];const text='你好 & echo NEVER | whoami $(id)';const r=await runAgent({command:f.file,cwd:f.dir},text,'session-123',e=>events.push(e)).done;assert.equal(r.text,text);assert.equal(r.session,'session-123');assert.equal(events[0].text,text);}finally{fs.rmSync(f.dir,{recursive:true,force:true});}
});
test('CLI error is surfaced even with exit status zero', {skip:process.platform==='win32'},async()=>{
 const f=fixture(`console.log(JSON.stringify({type:'result',is_error:true,result:'认证失败'}));`);try{await assert.rejects(runAgent({command:f.file,cwd:f.dir},'hello',null,()=>{}).done,/认证失败/);}finally{fs.rmSync(f.dir,{recursive:true,force:true});}
});
test('stop terminates the active child and rejects the pending reply', {skip:process.platform==='win32'},async()=>{
 const f=fixture(`setInterval(()=>{},1000);`);try{const r=runAgent({command:f.file,cwd:f.dir},'hello',null,()=>{});setTimeout(()=>r.cancel(),150);await assert.rejects(r.done,/已停止/);}finally{fs.rmSync(f.dir,{recursive:true,force:true});}
});
test('permission bypass is emitted only when the explicit setting is enabled', {skip:process.platform==='win32'},async()=>{
 const f=fixture(`process.stdin.resume();process.stdin.on('end',()=>console.log(JSON.stringify({type:'result',result:process.argv[process.argv.indexOf('--permission-mode')+1],session_id:'s'})));`);
 try{for(const enabled of [false,true]){const r=await runAgent({command:f.file,cwd:f.dir,skipPermissions:enabled},'test',null,()=>{}).done;assert.equal(r.text,enabled?'bypassPermissions':'default');}}finally{fs.rmSync(f.dir,{recursive:true,force:true});}
});

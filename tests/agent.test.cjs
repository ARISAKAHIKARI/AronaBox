const {test}=require('node:test');const assert=require('node:assert/strict');const {StreamParser,validateCommand}=require('../agent.cjs');
test('messages never become executable command fragments',()=>{for(const s of ['codeagent & whoami','a|b','a\nb','a%PATH%','a"b'])assert.throws(()=>validateCommand(s));assert.equal(validateCommand('C:\\Program Files\\Agent\\codeagent.cmd'),'C:\\Program Files\\Agent\\codeagent.cmd');});
test('split UTF-8, chunked JSON and session result parse correctly',()=>{const events=[];const p=new StreamParser(e=>events.push(e));const data=Buffer.from(JSON.stringify({type:'stream_event',event:{delta:{type:'text_delta',text:'老师好'}}})+'\n'+JSON.stringify({type:'result',result:'老师好',session_id:'abc-123'})+'\n');for(let i=0;i<data.length;i++)p.push(data.subarray(i,i+1));p.end();assert.equal(events[0].text,'老师好');assert.equal(p.session,'abc-123');assert.equal(p.result.result,'老师好');});
test('assistant snapshots do not duplicate streamed text',()=>{const out=[];const p=new StreamParser(e=>out.push(e));p.line(JSON.stringify({type:'stream_event',event:{delta:{type:'text_delta',text:'hello'}}}));p.line(JSON.stringify({type:'assistant',message:{content:[{type:'text',text:'hello'}]}}));assert.equal(out.filter(e=>e.type==='delta').length,1);});
test('nonstreamed assistant fallback and error result are retained',()=>{const p=new StreamParser(()=>{});p.push('banner\n'+JSON.stringify({type:'assistant',message:{content:[{type:'text',text:'fallback'}]}})+'\n'+JSON.stringify({type:'result',is_error:true,errors:['failed']}));p.end();assert.equal(p.fallback,'fallback');assert.equal(p.result.is_error,true);});
test('leading empty streaming chunks are removed without changing body newlines or code indentation',()=>{
 const out=[];const p=new StreamParser(e=>{if(e.type==='delta')out.push(e.text);});
 for(const text of ['\r','\n','  \n','    code','\n\nnext'])p.line(JSON.stringify({type:'stream_event',event:{delta:{type:'text_delta',text}}}));
 assert.equal(out.join(''),'    code\n\nnext');
 const {stripLeadingBlankLines}=require('../agent.cjs');assert.equal(stripLeadingBlankLines('\n\nHello\n\nworld'),'Hello\n\nworld');
});

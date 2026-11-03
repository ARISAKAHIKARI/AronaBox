'use strict';
(function(root){
 function leading(text){return String(text||'').replace(/^\uFEFF/,'').replace(/^(?:[\t \u00a0\u200b\u3000]*\r?\n)+/,'');}
 function clean(text,provider){let value=leading(text);if(provider==='codeagent')return value;
  // Remove standalone webpage speaker labels only; never delete a sentence mentioning a model.
  const label=/^(?:#{1,6}[ \t]+)?(?:\*\*)?(?:Gemini|ChatGPT|DeepSeek|豆包)[ \t\u00a0]*(?:说|說|said|says)[ \t]*[：:]?(?:\*\*)?[ \t]*(?:\r?\n|$)/i;
  while(label.test(value))value=leading(value.replace(label,''));return value;
 }
 const api={leading,clean};if(typeof module==='object'&&module.exports)module.exports=api;if(typeof window==='object')root.AronaResponseText=api;
})(globalThis);

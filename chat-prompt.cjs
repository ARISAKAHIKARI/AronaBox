'use strict';
const DEFAULT_TEMPLATE='请以桌面助手{petName}的身份自然地用中文回复，可称用户为{userName}。不要声称你已修改桌面待办。';
function buildPrompt(settings,text,provider){if(settings.promptEnabled===false||(provider==='codeagent'&&settings.professionalMode))return text;const template=typeof settings.promptTemplate==='string'?settings.promptTemplate:DEFAULT_TEMPLATE;const prefix=template.replace(/\{(petName|userName)\}/g,(_,key)=>settings[key]||(key==='petName'?'阿罗娜':'老师')).trim();return prefix?prefix+'\n\n用户消息：\n'+text:text;}
function validatePrompt(data){if(typeof data?.enabled!=='boolean'||typeof data?.template!=='string'||data.template.length>8000)throw Error('提示词须为不超过 8000 字的文本');return {promptEnabled:data.enabled,promptTemplate:data.template};}
module.exports={DEFAULT_TEMPLATE,buildPrompt,validatePrompt};

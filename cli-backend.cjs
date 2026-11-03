"use strict";
function backend(s){return s.cliBackend==='codeagent'?'codeagent':'claude';}
function label(s){return backend(s)==='codeagent'?'CodeAgent':'Claude Code';}
function skillDir(s){return backend(s)==='codeagent'?'.cac':'.claude';}
function switchBackend(s,t,id){if(!['claude','codeagent'].includes(id))throw Error('未知 CLI 类型');const from=backend(s);s.cliCommands={...s.cliCommands,[from]:s.command};t.cliSessions={...t.cliSessions,[from]:t.session||null};s.cliBackend=id;s.command=s.cliCommands[id]|| (id==='codeagent'?'codeagent':'claude');t.session=t.cliSessions[id]||null;}
module.exports={backend,label,skillDir,switchBackend};

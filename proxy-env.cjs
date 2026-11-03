'use strict';
let current={enabled:false};
function configure(value){current={...value};}
function apply(parent){const env={...parent};if(!current.enabled)return env;if(!current.ready)throw Error('桌宠代理尚未就绪，请在连接设置中重试或关闭代理');for(const key of Object.keys(env))if(/^(https?_proxy|all_proxy|no_proxy|npm_config_(https?_proxy|proxy|noproxy))$/i.test(key))delete env[key];const url=current.url;for(const key of ['HTTP_PROXY','HTTPS_PROXY','ALL_PROXY','http_proxy','https_proxy','all_proxy','npm_config_proxy','npm_config_https_proxy'])env[key]=url;env.NO_PROXY=env.no_proxy=['localhost','127.0.0.1','::1',...(current.bypass||[])].join(',');env.npm_config_noproxy=env.NO_PROXY;env.NODE_USE_ENV_PROXY='1';env.CLAUDE_CODE_PROXY_RESOLVES_HOSTS='1';return env;}
module.exports={configure,apply};

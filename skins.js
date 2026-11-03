(function(root){
'use strict';
const common={idle:'待机',thinking:'思考',happy:'开心',sad:'低落',sleep:'休息',wave:'打招呼'};
const catalog={};
function add(id,name,character,extra){const actions={...common};for(const [key,label] of extra)actions[key]=label;catalog[id]={id,name,character,file:'assets/skin-'+id+'.png',actions,frames:Object.fromEntries(Object.keys(actions).map((k,i)=>[k,i]))};}
const arona=[['cake','吃蛋糕'],['draw','涂鸦'],['milk','喝草莓牛奶'],['envelope','递信封'],['surprise','惊讶'],['bow','感谢']];
const plana=[['tablet','查看平板'],['organize','整理文件'],['tea','安静喝茶'],['support','轻声鼓励'],['surprise','微微惊讶'],['bow','礼貌致意']];
add('illustration2','阿罗娜 日常','arona',arona);
add('swimsuit','阿罗娜 夏日','arona',[['juice','喝果汁'],['ball','玩沙滩球'],['shell','展示贝壳'],['envelope','递信封'],['surprise','惊讶'],['bow','感谢']]);
add('arona-winter','阿罗娜 冬日','arona',[['cocoa','喝热可可'],['gift','送礼物'],['snowman','捧小雪人'],['warm','搓手取暖'],['surprise','惊讶'],['bow','感谢']]);
add('plana-daily','普拉娜 日常','plana',plana);
add('plana-swimsuit','普拉娜 夏日','plana',[['book','查看留言'],['shell','观察贝壳'],['drink','喝凉饮'],['towel','递毛巾'],['surprise','微微惊讶'],['bow','礼貌致意']]);
add('plana-winter','普拉娜 冬日','plana',[['tea','暖手喝茶'],['gift','整理礼物'],['scarf','整理围巾'],['snow','观察雪花'],['surprise','微微惊讶'],['bow','礼貌致意']]);
add('azusa','梓','azusa',[['study','认真温习'],['plush','抱玩偶'],['flower','观察小花'],['deadpan','无语凝视'],['surprise','惊讶'],['salute','认真敬礼']]);
add('azusa-swimsuit','水梓','azusa',[['shell','欣赏贝壳'],['stop','别在那里发电'],['juice','喝果汁'],['plush','抱玩偶'],['surprise','惊讶'],['bow','轻轻致意']]);
add('koharu','小春','koharu',[['study','苦恼复习'],['notes','认真记笔记'],['fluster','害羞挡脸'],['scold','不可以色色'],['surprise','惊讶'],['firstaid','递急救箱']]);
add('momoi','小桃','momoi',[['game','兴奋打游戏'],['victory','胜利欢呼'],['retry','不服输'],['story','构思游戏剧情'],['surprise','惊讶'],['bow','开心致谢']]);
add('midori','小绿','midori',[['sketch','画速写'],['game','专心打游戏'],['showart','展示画作'],['shy','抱画本害羞'],['surprise','惊讶'],['bow','轻轻致谢']]);
add('aris','爱丽丝','aris',[['game','挑战游戏'],['hero','勇者胜利'],['sword','练习勇者姿势'],['quest','阅读任务笔记'],['surprise','惊讶'],['salute','加入队伍']]);
add('kei','凯伊','kei',[['data','查看数据'],['game','检查游戏机'],['warning','冷静提醒'],['help','伸手帮助'],['surprise','微微惊讶'],['bow','礼貌致意']]);
for(const entry of Object.values(catalog)){
 const name=entry.name;
 entry.style='chibi';entry.name=name+' · 游戏Q版';
 add(entry.id+'-portrait',name+' · 立绘',entry.character,Object.entries(entry.actions).slice(6));
 catalog[entry.id+'-portrait'].style='portrait';
}
const characterNames={arona:'阿罗娜',plana:'普拉娜',azusa:'梓',koharu:'小春',momoi:'小桃',midori:'小绿',aris:'爱丽丝',kei:'凯伊'};
for(const [id,source] of Object.entries({'arona-redraw':'illustration2','plana-redraw':'plana-daily','azusa-redraw':'azusa','azusa-swimsuit-redraw':'azusa-swimsuit','koharu-redraw':'koharu','momoi-redraw':'momoi','midori-redraw':'midori','aris-redraw':'aris','kei-redraw':'kei'})){
 const base=catalog[source];add(id,(source==='azusa-swimsuit'?'水梓':characterNames[base.character])+' · 重绘版',base.character,Object.entries(base.actions).slice(6));
 Object.assign(catalog[id],{style:'redraw',sourceSkin:source});
}
catalog['kei-redraw'].actions.game='分析游戏数据';
function select(settings,id){
 if(!catalog[id]&&id!=='mmd')throw Error('未知皮肤');
 if(id==='mmd'&&!settings.mmdModelPath)throw Error('请先选择本地 PMX / PMD 模型');
 Object.assign(settings,{builtinSkin:id,skin:null,skinComponent:null,skinLayout:null});
 if(catalog[id])settings.petName=characterNames[catalog[id].character];
 return settings;
}
function resolve(s={}){return s.skin||s.builtinSkin==='mmd'?null:catalog[s.builtinSkin]||catalog.illustration2;}
function actions(s={}){const skin=resolve(s);if(skin)return skin.actions;return s.skin&&!['atlas6','atlas12'].includes(s.skinLayout)?{idle:'待机'}:common;}
function pose(s,mood){const skin=resolve(s);if(!skin)return mood;return Object.hasOwn(skin.frames,mood)?mood:'idle';}
const api={catalog,characterNames,select,resolve,actions,pose};if(typeof module==='object')module.exports=api;else root.PetSkins=api;
})(typeof window==='object'?window:globalThis);

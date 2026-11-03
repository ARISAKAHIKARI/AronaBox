'use strict';
const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const {createHash,randomUUID}=require('node:crypto');
function restoreProxyRuntime(root=__dirname,expected=require('./proxy-core.cjs').sha256){
 const file=path.join(root,'proxy-runtime','mihomo.exe'),archive=file+'.gz';
 if(fs.existsSync(file))return file;
 const archives=fs.existsSync(archive)?[archive]:[];
 if(!archives.length)for(let i=0;i<64;i++){const part=archive+'.part'+String(i).padStart(2,'0');if(!fs.existsSync(part))break;archives.push(part);}
 if(!archives.length)return file;
 const data=zlib.gunzipSync(Buffer.concat(archives.map(p=>fs.readFileSync(p))),{maxOutputLength:128*1024*1024});
 if(createHash('sha256').update(data).digest('hex')!==expected)throw Error('代理核心校验失败，请重新获取源码包。');
 const temporary=file+'.'+randomUUID()+'.tmp';
 try{fs.writeFileSync(temporary,data,{flag:'wx',mode:0o755});if(!fs.existsSync(file))fs.renameSync(temporary,file);}
 finally{fs.rmSync(temporary,{force:true});}
 return file;
}
module.exports={restoreProxyRuntime};

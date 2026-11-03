'use strict';
// All supported install/start/build entry points inherit this project-local network configuration.
const fs=require('node:fs');const path=require('node:path');const {spawnSync}=require('node:child_process');
const root=__dirname;
function networkEnv(parent=process.env){
  const env={...parent};
  const internal=parent.ARONA_ELECTRON_SOURCE==='intranet';
  const mirror=internal?'https://mirrors.tools.huawei.com/electron/':'https://npmmirror.com/mirrors/electron/';
  if(!internal){env.npm_config_registry=parent.ARONA_NPM_REGISTRY||'https://registry.npmmirror.com';env.ELECTRON_BUILDER_BINARIES_MIRROR='https://npmmirror.com/mirrors/electron-builder-binaries/';}
  env.ELECTRON_MIRROR=mirror;
  // Electron reads ELECTRON_MIRROR directly; do not pass unsupported npm keys.
  delete env.npm_config_electron_mirror;delete env.NPM_CONFIG_ELECTRON_MIRROR;
  if(internal&&parent.ARONA_NPM_REGISTRY)env.npm_config_registry=parent.ARONA_NPM_REGISTRY;
  env.NODE_USE_SYSTEM_CA='1';
  // Keep corporate proxies and NODE_EXTRA_CA_CERTS unchanged. Never disable TLS validation.
  return env;
}
function validateRegistry(value,internal){
  let url;try{url=new URL(value.trim());}catch{throw Error('Invalid npm registry. Configure your company npm registry first.');}
  if(!['http:','https:'].includes(url.protocol)||url.username||url.password)throw Error('Use an HTTP(S) npm registry without embedded credentials.');
  if(internal&&['registry.npmjs.org','registry.npmmirror.com','registry.npm.taobao.org'].includes(url.hostname))throw Error('Intranet mode found a PUBLIC npm registry. Restore your company registry with npm.cmd config set registry YOUR_COMPANY_REGISTRY, or set ARONA_NPM_REGISTRY. No dependencies were changed.');
  return url.href;
}
function resolveRegistry(env,runner=spawnSync){
  const result=process.platform==='win32'?runner(process.env.ComSpec||'cmd.exe',['/d','/s','/c','npm.cmd config get registry'],{cwd:root,env,encoding:'utf8',windowsHide:true}):runner('npm',['config','get','registry'],{cwd:root,env,encoding:'utf8'});
  if(result.error||result.status!==0)throw Error('Cannot read npm registry configuration. Check npm installation.');
  return validateRegistry(result.stdout.trim(),env.ARONA_ELECTRON_SOURCE==='intranet');
}
function inspectEnvironment(directory=root,platform=process.platform){
  const problems=[];
  const lock=JSON.parse(fs.readFileSync(path.join(directory,'package-lock.json'),'utf8'));
  const pkg=JSON.parse(fs.readFileSync(path.join(directory,'package.json'),'utf8'));
  for(const [name,range] of Object.entries({...pkg.dependencies,...pkg.devDependencies})){
    if((lock.packages[''].dependencies?.[name]||lock.packages[''].devDependencies?.[name])!==range)problems.push('Lock file does not match '+name);
  }
  for(const [location,expected] of Object.entries(lock.packages)){
    if(!location||expected.optional)continue;
    try{const installed=JSON.parse(fs.readFileSync(path.join(directory,location,'package.json'),'utf8'));if(installed.version!==expected.version)problems.push(location+' version mismatch');}
    catch{problems.push(location+' missing');}
  }
  for(const entry of ['electron/install.js','electron-builder/out/cli/cli.js'])if(!fs.existsSync(path.join(directory,'node_modules',entry)))problems.push(entry+' missing');
  const relative=platform==='win32'?'electron.exe':platform==='darwin'?'Electron.app/Contents/MacOS/Electron':'electron';
  const electron=path.join(directory,'node_modules','electron'),binary=path.join(electron,'dist',relative);
  let runtime=false;
  try{runtime=fs.statSync(binary).size>0&&fs.readFileSync(path.join(electron,'path.txt'),'utf8').trim()===relative&&fs.readFileSync(path.join(electron,'dist','version'),'utf8').trim().replace(/^v/,'')===lock.packages['node_modules/electron'].version;}catch{}
  return {problems,runtime,binary};
}
function buildOptions(action,source){return action==='pack'||source==='intranet'?['--dir']:['portable'];}
function main(action='start'){
  if(!['start','install','pack','dist','check'].includes(action))throw new Error('Unknown action');
  if(Number(process.versions.node.split('.')[0])<24)throw Error('Node.js 24+ is required. Run the CMD entry point.');
  require('./restore-runtime.cjs').restoreProxyRuntime(root);
  const env=networkEnv();
  const run=(exe,args)=>{const r=spawnSync(exe,args,{cwd:root,env,stdio:'inherit',windowsHide:false});if(r.error)throw r.error;if(r.status!==0)throw new Error(`Command failed (${r.status ?? r.signal}). See details above.`);};
  const node=(...args)=>run(process.execPath,args);
  let check=inspectEnvironment();
  console.log('Environment check: Node '+process.versions.node+', dependencies '+(check.problems.length?'need repair':'reused')+', Electron '+(check.runtime?'reused':'needs download'));
  if(action==='check'){if(check.problems.length||!check.runtime)throw Error(check.problems.slice(0,8).join('\n')||'Electron runtime missing or mismatched');return;}
  if(check.problems.length){
    env.npm_config_registry=resolveRegistry(env);
    console.log('npm registry: '+env.npm_config_registry);
    console.log(check.problems.slice(0,8).join('\n'));
    console.log('Installing missing/mismatched dependencies. Mirror: '+env.ELECTRON_MIRROR);
    if(process.platform==='win32')run(process.env.ComSpec||'cmd.exe',['/d','/s','/c','npm ci']);else run('npm',['ci']);
    check=inspectEnvironment();
    if(check.problems.length)throw Error('Dependencies remain incomplete: '+check.problems.slice(0,8).join(', '));
  }
  if(!check.runtime){
    console.log('Repairing Electron runtime from '+env.ELECTRON_MIRROR);
    node(path.join(root,'node_modules','electron','install.js'));
    check=inspectEnvironment();if(!check.runtime)throw Error('Electron runtime verification failed.');
  }
  if(action==='install'){console.log('Environment ready. Existing installations were reused.');return;}
  if(action==='start'){run(check.binary,[root]);return;}
  if(process.platform!=='win32')throw Error('Build Windows EXE on Windows.');
  node(path.join(root,'node_modules','electron-builder','out','cli','cli.js'),'--win',...buildOptions(action,env.ARONA_ELECTRON_SOURCE),'-c.electronDist=node_modules/electron/dist');
  if(action==='dist'&&env.ARONA_ELECTRON_SOURCE==='intranet'){
    const version=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version;
    run('powershell.exe',['-NoProfile','-ExecutionPolicy','Bypass','-File',path.join(root,'package-intranet.ps1'),'-Version',version]);
    console.log('Build complete. Extract the ZIP and run AronaDesk.exe. Keep all extracted files together.');
  }
}

if(require.main===module){try{main(process.argv[2]);}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={networkEnv,inspectEnvironment,validateRegistry,resolveRegistry,buildOptions};

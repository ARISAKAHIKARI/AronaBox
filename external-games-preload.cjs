const {contextBridge,ipcRenderer}=require('electron');contextBridge.exposeInMainWorld('games',{call:(op,id)=>ipcRenderer.invoke('games:call',op,id)});

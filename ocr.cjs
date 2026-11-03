'use strict';
const {execFile}=require('node:child_process'),path=require('node:path');
// Script passed as UTF-16LE, file path passed through environment (never shell text).
const script=String.raw`
$ErrorActionPreference='Stop'
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null=[Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]
$null=[Windows.Graphics.Imaging.BitmapDecoder,Windows.Graphics.Imaging,ContentType=WindowsRuntime]
$null=[Windows.Media.Ocr.OcrEngine,Windows.Foundation,ContentType=WindowsRuntime]
$asTask=([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation\x601' } | Select-Object -First 1)
function Await($operation,$type) {
 $task=$asTask.MakeGenericMethod($type).Invoke($null,@($operation))
 $task.GetAwaiter().GetResult()
}
$file=Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($env:ARONA_OCR_FILE)) ([Windows.Storage.StorageFile])
$stream=Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
try {
 $decoder=Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
 $bitmap=Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
 try {
  $engine=[Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
  if ($null -eq $engine) { throw 'No Windows OCR language installed. Install Chinese/English OCR in Windows language options.' }
  if ($bitmap.PixelWidth -gt [Windows.Media.Ocr.OcrEngine]::MaxImageDimension -or $bitmap.PixelHeight -gt [Windows.Media.Ocr.OcrEngine]::MaxImageDimension) { throw 'Image too large for Windows OCR. Crop a smaller region.' }
  $result=Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
  [Console]::Write($result.Text)
 } finally { if($bitmap){$bitmap.Dispose()} }
} finally { $stream.Dispose() }
`.replace('IAsyncOperation\\x601','IAsyncOperation`1').replace('IAsyncOperation\x601','IAsyncOperation`1');
function recognize(file){if(process.platform!=='win32')return Promise.reject(Error('本地 OCR 需要 Windows 10/11；截图贴图仍可使用'));const exe=path.join(process.env.SystemRoot||'C:\\Windows','System32','WindowsPowerShell','v1.0','powershell.exe');return new Promise((resolve,reject)=>execFile(exe,['-NoLogo','-NoProfile','-NonInteractive','-EncodedCommand',Buffer.from(script,'utf16le').toString('base64')],{windowsHide:true,timeout:45000,maxBuffer:1024*1024,encoding:'utf8',env:{...process.env,ARONA_OCR_FILE:file}},(err,stdout,stderr)=>err?reject(Error('OCR 失败：'+(stderr.trim()||err.message))):resolve(stdout.trim())));}
module.exports={recognize};

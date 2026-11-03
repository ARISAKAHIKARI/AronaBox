param([Parameter(Mandatory=$true)][string]$Version)
$ErrorActionPreference = 'Stop'
if ($Version -notmatch '^\d+\.\d+\.\d+([.-][a-zA-Z0-9.-]+)?$') { throw 'Invalid version.' }
$sourceDir = Join-Path $PSScriptRoot 'dist\win-unpacked'
if (!(Test-Path (Join-Path $sourceDir 'AronaDesk.exe')) -or !(Test-Path (Join-Path $sourceDir 'resources\app.asar'))) { throw 'Build output incomplete; ZIP was not created.' }
$outputFile = Join-Path $PSScriptRoot ('dist\AronaDesk-' + $Version + '-Windows-x64.zip')
$tempFile = $outputFile + '.partial-' + [Guid]::NewGuid().ToString('N')
Add-Type -AssemblyName System.IO.Compression.FileSystem
try {
  [System.IO.Compression.ZipFile]::CreateFromDirectory($sourceDir, $tempFile, [System.IO.Compression.CompressionLevel]::Optimal, $false)
  Move-Item -LiteralPath $tempFile -Destination $outputFile -Force
  Write-Host ('ZIP created: ' + $outputFile)
} finally {
  if (Test-Path -LiteralPath $tempFile) { Remove-Item -LiteralPath $tempFile -Force }
}

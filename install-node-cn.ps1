$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$runtimeDir = Join-Path $PSScriptRoot '.runtime'
New-Item -ItemType Directory -Force $runtimeDir | Out-Null
$mirrorRoot = 'https://npmmirror.com/mirrors/node/latest-v24.x/'
$checksumText = (Invoke-WebRequest -UseBasicParsing ($mirrorRoot + 'SHASUMS256.txt')).Content
$match = [regex]::Match($checksumText, '(?m)^([a-f0-9]{64})\s+(node-v24\.[0-9]+\.[0-9]+-win-x64\.zip)\s*$')
if (!$match.Success) { throw 'Node.js 24 x64 package not found in mirror checksum list.' }
$archiveName = $match.Groups[2].Value
$archivePath = Join-Path $runtimeDir $archiveName
Invoke-WebRequest -UseBasicParsing ($mirrorRoot + $archiveName) -OutFile $archivePath
if ((Get-FileHash $archivePath -Algorithm SHA256).Hash.ToLower() -ne $match.Groups[1].Value) { Remove-Item $archivePath; throw 'Node.js checksum mismatch.' }
Expand-Archive -LiteralPath $archivePath -DestinationPath $runtimeDir -Force
$target = Join-Path $runtimeDir 'node'
if (Test-Path $target) { Remove-Item -Recurse -Force $target }
Move-Item (Join-Path $runtimeDir ([IO.Path]::GetFileNameWithoutExtension($archiveName))) $target
Remove-Item $archivePath
Write-Host 'Node.js 24 installed locally. No global PATH change.'

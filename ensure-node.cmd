@echo off
if not exist "%~dp0.runtime\node\node.exe" goto system
"%~dp0.runtime\node\node.exe" -e "process.exit(Number(process.versions.node.split('.')[0])>=24?0:1)" >nul 2>nul
if errorlevel 1 goto system
if not exist "%~dp0.runtime\node\npm.cmd" goto system
goto ready
:system
node -e "process.exit(Number(process.versions.node.split('.')[0])>=24?0:1)" >nul 2>nul
if errorlevel 1 goto install
call npm --version >nul 2>nul
if not errorlevel 1 exit /b 0
:install
if "%ARONA_ELECTRON_SOURCE%"=="intranet" (
  echo Node.js 24+ and npm are required. Install your corporate Node.js package first.
  exit /b 1
)
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install-node-cn.ps1"
if errorlevel 1 exit /b 1
:ready
set "PATH=%~dp0.runtime\node;%PATH%"
echo Reusing local Node.js and npm.
exit /b 0

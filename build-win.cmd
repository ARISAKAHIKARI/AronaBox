@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
call select-network.cmd
call ensure-node.cmd
if errorlevel 1 (
  pause
  exit /b 1
)
node bootstrap.cjs dist
if errorlevel 1 (
  pause
  exit /b 1
)
pause

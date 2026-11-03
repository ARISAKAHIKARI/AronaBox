@echo off
setlocal
cd /d "%~dp0"
call select-network.cmd
call ensure-node.cmd
if errorlevel 1 (
  pause
  exit /b 1
)
node bootstrap.cjs install
if errorlevel 1 (
  pause
  exit /b 1
)
pause

@echo off
setlocal
cd /d "%~dp0"
call ensure-node.cmd
if errorlevel 1 exit /b 1
call npm.cmd install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
if errorlevel 1 (
  pause
  exit /b 1
)
call claude --version
pause

@echo off
echo Select download source:
echo [1] Intranet - company npm + Huawei Electron; build folder and ZIP
echo [2] Public Internet - npmmirror; build single portable EXE
choice /c 12 /n /m "Choose 1 or 2: "
if errorlevel 2 (set "ARONA_ELECTRON_SOURCE=public") else (set "ARONA_ELECTRON_SOURCE=intranet")
exit /b 0

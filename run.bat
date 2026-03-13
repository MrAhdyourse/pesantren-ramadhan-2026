@echo off
chcp 65001 >nul
title Timeline Pesantren - Development Server

echo ============================================
echo    TIMELINE PESANTREN - Development Server
echo ============================================
echo.

:: Get local IP address
echo Mendapatkan IP Address lokal...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set LOCAL_IP=%%a
    goto :got_ip
)
:got_ip
set LOCAL_IP=%LOCAL_IP: =%

echo.
echo Server akan berjalan di:
echo   - Local:   http://localhost:3000
echo   - Network: http://%LOCAL_IP%:3000
echo.
echo Tekan Ctrl+C untuk menghentikan server.
echo ============================================
echo.

:: Run Next.js dev server with network access
cd /d "%~dp0"
call npm run dev -- -H 0.0.0.0

pause

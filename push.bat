@echo off
chcp 65001 >nul
title Timeline Pesantren - Push to GitHub

echo ============================================
echo    TIMELINE PESANTREN - Push to GitHub
echo ============================================
echo.

cd /d "%~dp0"

:: Check if git is initialized
if not exist ".git" (
    echo Inisialisasi Git repository...
    git init
    git branch -M main
)

:: Check if remote exists
git remote | findstr "origin" >nul
if errorlevel 1 (
    echo Menambahkan remote origin...
    git remote add origin https://github.com/MrAhdyourse/pesantren-ramadhan-2026.git
)

echo.
echo [1/4] Membersihkan build lama...
if exist "out" rmdir /s /q "out"

echo.
echo [2/4] Building project untuk GitHub Pages...
echo (Static Export - siap deploy)
echo.
call npm run build

if errorlevel 1 (
    echo.
    echo ERROR: Build gagal! Periksa error di atas.
    pause
    exit /b 1
)

echo.
echo [3/4] Menambahkan file ke Git...
echo (node_modules sudah di .gitignore - tidak akan di-push)
git add .

echo.
echo [4/4] Commit dan Push ke GitHub...
set /p commit_msg="Masukkan pesan commit (Enter untuk default): "
if "%commit_msg%"=="" set commit_msg=Update: build untuk GitHub Pages

git commit -m "%commit_msg%"
git branch -M main
git push -u origin main --force

echo.
echo ============================================
echo    PUSH BERHASIL!
echo ============================================
echo.
echo Repository: https://github.com/MrAhdyourse/pesantren-ramadhan-2026
echo.
echo Langkah selanjutnya untuk GitHub Pages:
echo   1. Buka repo di GitHub
echo   2. Settings ^> Pages
echo   3. Source: Deploy from a branch
echo   4. Branch: main, Folder: / (root)
echo   5. Save
echo.
echo Atau akses langsung setelah aktif:
echo   https://mrahdyourse.github.io/pesantren-ramadhan-2026/
echo ============================================

pause

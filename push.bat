@echo off
setlocal

:: Berpindah ke folder di mana file .bat ini berada
cd /d "%~dp0"

:: Nama repository Anda (untuk keterangan commit)
set REPO_NAME=timeline-pesantren

echo.
echo [1/5] Menghapus build dan cache lama...
if exist out rmdir /s /q out
if exist .next rmdir /s /q .next

echo.
echo [2/5] Menjalankan build (Next.js Static Export)...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [Gagal] Proses build gagal! Silakan periksa error di atas.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/5] Menambahkan file .nojekyll untuk GitHub Pages...
echo. > out\.nojekyll

echo.
echo [4/5] Menyiapkan perubahan untuk Git...
git add .

echo.
echo [5/5] Melakukan Commit dan Push...
set /p commit_msg="Masukkan pesan commit (tekan Enter untuk default: Update project): "
if "%commit_msg%"=="" set commit_msg="Update project: %date% %time%"

git commit -m "%commit_msg%"
git push origin main

echo.
echo ======================================================
echo  PROSES SELESAI!
echo  Aplikasi Anda sedang di-deploy ke GitHub Pages.
echo ======================================================
pause

@echo off
setlocal

set "HOST=127.0.0.1"
set "PORT=5173"
set "URL=http://%HOST%:%PORT%"
set "PROJECT_DIR=%~dp0"

title GPT-Image2 Game Prompt Lab
cd /d "%PROJECT_DIR%" || (
  echo Failed to enter project directory:
  echo %PROJECT_DIR%
  pause
  exit /b 1
)

where npm.cmd >nul 2>nul || (
  echo npm was not found. Please install Node.js first.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Get-NetTCPConnection -LocalAddress '%HOST%' -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue) { exit 0 } exit 1" >nul 2>nul
if not errorlevel 1 (
  echo GPT-Image2 Game Prompt Lab is already running:
  echo %URL%
  start "" "%URL%"
  exit /b 0
)

if not exist "node_modules\.bin\vite.cmd" (
  echo Installing dependencies...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting GPT-Image2 Game Prompt Lab...
echo %URL%
start "" "%URL%"
echo.
echo Keep this window open while using the site.
echo Press Ctrl+C in this window to stop the dev server.
echo.

call npm.cmd run dev -- --host %HOST% --port %PORT%

echo.
echo Dev server stopped.
pause

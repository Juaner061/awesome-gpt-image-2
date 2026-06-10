@echo off
setlocal

set "APP_NAME=GPT-Image2 Game Production Lab"
set "HOST=127.0.0.1"
set "PORT=5173"
set "PROJECT_DIR=%~dp0"

title %APP_NAME%
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

set "ALREADY_RUNNING="
call :PickPort
if errorlevel 1 (
  pause
  exit /b 1
)
if defined ALREADY_RUNNING exit /b 0

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

set "URL=http://%HOST%:%PORT%"

echo Starting %APP_NAME%...
echo %URL%
start "" "%URL%/?fresh=game-production"
echo.
echo Keep this window open while using the site.
echo Press Ctrl+C in this window to stop the dev server.
echo.

call npm.cmd run dev -- --host %HOST% --port %PORT% --strictPort

echo.
echo Dev server stopped.
pause
exit /b 0

:PickPort
set "START_PORT=%PORT%"
:CheckPort
set "PORT_STATUS="
for /f "delims=" %%S in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$port=%PORT%; $url='http://%HOST%:'+$port+'/style-library.json'; try { $body=(Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2).Content; if ($body -match 'Character Production Sheet' -and $body -match 'UI Panel Slicing Sheet') { 'CURRENT' } else { 'BUSY' } } catch { if (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue) { 'BUSY' } else { 'FREE' } }"') do set "PORT_STATUS=%%S"

if /i "%PORT_STATUS%"=="CURRENT" (
  echo %APP_NAME% is already running:
  echo http://%HOST%:%PORT%
  start "" "http://%HOST%:%PORT%/?fresh=game-production"
  set "ALREADY_RUNNING=1"
  exit /b 0
)

if /i "%PORT_STATUS%"=="FREE" exit /b 0

if "%PORT%"=="%START_PORT%" (
  echo Port %START_PORT% is busy with a different or stale site.
  echo Searching for the next free port...
)

set /a PORT+=1
if %PORT% GTR 5199 (
  echo No free port found between %START_PORT% and 5199.
  exit /b 1
)
goto CheckPort

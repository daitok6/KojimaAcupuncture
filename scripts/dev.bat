@echo off
REM Launch development server
REM Usage: scripts\dev.bat

cd /d "%~dp0\.."

echo Starting development server...
call npm run dev
pause

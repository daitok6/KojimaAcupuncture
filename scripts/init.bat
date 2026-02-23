@echo off
REM Initialize project - install dependencies
REM Usage: scripts\init.bat

cd /d "%~dp0\.."

echo Installing dependencies...
call npm install

echo.
echo Project initialized successfully!
echo Run 'scripts\dev.bat' to start the development server.
pause

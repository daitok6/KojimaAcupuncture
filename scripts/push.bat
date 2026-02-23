@echo off
setlocal enabledelayedexpansion
REM Push code to GitHub (git add, commit, push)
REM Usage: scripts\push.bat "Your commit message"
REM    or: scripts\push.bat   (will prompt for commit message)

cd /d "%~dp0\.."

if "%~1"=="" (
  set /p COMMIT_MSG="Enter commit message: "
  if "!COMMIT_MSG!"=="" (
    echo Commit message cannot be empty.
    exit /b 1
  )
) else (
  set COMMIT_MSG=%~1
)

echo Staging all changes...
git add .

echo Committing...
git commit -m "%COMMIT_MSG%"

echo Pushing to GitHub...
git push

echo.
echo Successfully pushed to GitHub!
pause

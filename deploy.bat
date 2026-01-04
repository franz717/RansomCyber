@echo off
echo 🔥 RANSOMCYBER DEPLOYMENT
echo =========================

:: Install Node.js if not exists
where node >nul 2>nul
if errorlevel 1 (
    echo Installing Node.js...
    curl -o node.msi https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi
    msiexec /i node.msi /quiet
)

:: Install dependencies
npm install

:: Start server
echo Starting RANSOMCYBER server...
node server.js

echo ✅ RANSOMCYBER DEPLOYED!
echo 🔗 Access: http://localhost:3000
echo 📱 Control via Telegram
pause
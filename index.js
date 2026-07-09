const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Railway ke liye: system wala chromium use karo, puppeteer wala download mat karo
process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = "true";

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        executablePath: '/usr/bin/chromium'
    },
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR CODE:');
    qrcode.generate(qr, {small:

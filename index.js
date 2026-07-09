const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Client with chromium path for Railway/Docker
const client = new Client({
    authStrategy: new LocalAuth(), // session save karega
    puppeteer: {
        executablePath: '/usr/bin/chromium', // Dockerfile me yehi install kiya
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    }
});

// QR Code link ban kar dega
client.on('qr', (qr) => {
    console.log('QR CODE:');
    console.log(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qr)}`);
});

// Jab login ho jaye
client.on('ready', () => {
    console.log('✅ WhatsApp Bot is Ready!');
});

// Message ka reply
client.on('message', async (msg) => {
    if (msg.body === '!ping') {
        msg.reply('pong');
    }
});

client.initialize();

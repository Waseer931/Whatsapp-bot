const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Client with chromium path for Railway/Docker
const client = new Client({
    authStrategy: new LocalAuth(), // session save karega
    puppeteer: {
        executablePath: '/

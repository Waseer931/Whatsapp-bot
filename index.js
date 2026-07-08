const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR CODE:');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('✅ Bot is ready and connected!');
});

client.on('message', async message => {
    if(message.body.toLowerCase() === 'hi') {
        message.reply('Hello! Main Railway pe chal raha hun 😎');
    }
    if(message.body.toLowerCase() === 'help') {
        message.reply('Commands: hi, help');
    }
});

client.initialize();

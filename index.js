const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    },
    authStrategy: new LocalAuth()
});

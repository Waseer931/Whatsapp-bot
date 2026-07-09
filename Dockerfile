FROM node:20-slim

# Install chromium and deps
RUN apt-get update && apt-get install -y \
    chromium \
    nss \
    nspr \
    libatomic1 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    libgtk-3-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]

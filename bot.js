const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Token API dari BotFather
const bot = new TelegramBot('8075288492:AAHwmZgiS2hUIfcFE5Zivq83NDCI_zwrlmU', { polling: true });
const app = express();
const port = 3000;

// Endpoint untuk menerima perintah dari Telegram Bot
app.post('/lock-device', (req, res) => {
  // Kirim perintah ke aplikasi Android untuk mengunci perangkat
  fetch('https://your-server.com/send-lock-command', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: 'lock_device' })
  })
  .then(response => response.json())
  .then(data => {
    res.send('Perintah diterima!');
  })
  .catch(err => {
    res.status(500).send('Error');
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

// Fungsi untuk mengirim perintah ke perangkat Android
function sendLockCommand() {
  // Misalnya menggunakan FCM untuk mengirim pesan ke perangkat Android
  fetch('https://your-server.com/send-lock-command', {
    method: 'POST',
    body: JSON.stringify({ action: 'lock_device' })
  });
}

// Menangani perintah dari Telegram Bot
bot.onText(/\/lock/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Mengirim perintah untuk mengunci perangkat...');
  sendLockCommand();
});

bot.onText(/\/unlock/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Mengirim perintah untuk membuka kunci perangkat...');
  sendUnlockCommand();
});

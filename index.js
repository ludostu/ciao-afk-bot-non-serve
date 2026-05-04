const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.HOST,        // IP del server Minecraft
    port: parseInt(process.env.PORT), // Porta del server
    username: process.env.USERNAME,   // Nome del bot
    version: process.env.VERSION      // Versione (es: "1.20.4")
  });

  bot.on('spawn', () => {
    console.log("✅ Bot connesso al server!");
    
    // Movimento automatico
    bot.setControlState('forward', true);
  });

  bot.on('error', (err) => {
    console.log("❌ Errore:", err.message);
    console.log("🔄 Riprovo tra 5 secondi...");
    setTimeout(startBot, 5000);
  });

  bot.on('end', () => {
    console.log("⚠️ Disconnesso dal server.");
    console.log("🔄 Riprovo tra 5 secondi...");
    setTimeout(startBot, 5000);
  });
}

startBot();

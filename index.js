const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'IP_DEL_SERVER',   // esempio: "mc-qualcosa.aternos.me"
  port: 25565,
  username: 'NomeBot'      // il nome che avrà il bot
})

bot.once('spawn', () => {
  console.log('Bot online!')

  setInterval(() => {
    bot.chat('Mi muovo di un blocco!')
    bot.setControlState('forward', true)

    setTimeout(() => {
      bot.setControlState('forward', false)
    }, 1000) // cammina per 1 secondo ≈ 1 blocco
  }, 60 * 1000) // ogni minuto
})

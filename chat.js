const Telegraf = require('telegraf');
const bot= new Telegraf(1412665720:AAFUH7zZDok7XJFazBxatoJQaSZLK-NUqwU)
bot.start((context) => {
  console.log('Ciao fra!')
  context.reply('Ciaooo')
})
bot.on('text', context=>{
  text=context.update.message.text
  if (text==='Hi') {
    context.reply('Hello')
  }

context.reply('Scusa, non ho capito')
})
bot.hears('cicci', message=> {
  message.reply('picci')
})

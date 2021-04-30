const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    setInterval (function () {
      const embed = new Discord.RichEmbed()
      .setTitle(`Я работаю!`)
      .setColor(0xffffff)
      .setTimestamp()
      message.channel.send({embed});
      }, 3 * 1000); 
}

module.exports.help = {
    name: 'проверка'
}
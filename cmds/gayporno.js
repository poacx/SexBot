const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`Ссылки на гей порно:`)
    .setColor(0xff0000)
    .addField("Гей порно номер 1", "тут ссылка")
    .addField("Гей порно номер 1", "тут ссылка", false)
    message.channel.send({embed});
}

module.exports.help = {
    name: 'гей_порно'
}
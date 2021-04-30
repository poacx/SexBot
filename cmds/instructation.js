const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle(`Ознакомтесь с командами для нашего "10Бот":`)
      .setDescription("Все команды вы можете применять в <#612942881870708736>")
      .setColor(0x8b00ff)
      .addField("Бот, дз день <дата>", "Вписывая нужную дату, вы получаете домашние задания на каждый предмет, которой был \
в этот день." )
      .addField("Бот, дз <предмет> <дата>", "Вписывая нужную дату и предмет, вы получаете домашнее задание по этому предмету \
на ту дату, которую вы указали.", false)
      message.channel.send({embed});
}

module.exports.help = {
    name: 'инструкция'
}
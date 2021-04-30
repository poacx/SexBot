const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const name = require('../objects/name.json');
    if(args[0] === 'день') { //Бот, дз день ДАТА
      const day = Object.keys(name[args[1]]);
      const embed = new Discord.RichEmbed()
      .setTitle(`Домашняя работа на ${args[1]}:`)
      .setColor(0x00a550)
      .setDescription(`День недели: ${name[args[1]].день}. Количество уроков в этот день: ${day.length - 1}`)
      .addField("1. " + day[1] + ":", name[args[1]][day[1]])
      .addField("2. " + day[2] + ":", name[args[1]][day[2]], false)
      .addField("3. " + day[3] + ":", name[args[1]][day[3]], false)
      .addField("4. " + day[4] + ":", name[args[1]][day[4]], false)
      .addField("5. " + day[5] + ":", name[args[1]][day[5]], false)
      .addField("6. " + day[6] + ":", name[args[1]][day[6]], false)
      .addField("7. " + day[7] + ":", name[args[1]][day[7]], false)
      .setFooter('Узнать дз на другой день "Бот, дз день <дата>"')
      message.channel.send({embed});
    } else { //Бот, дз ПРЕДМЕТ ДАТА
      const embed = new Discord.RichEmbed()
      .setTitle(`Домашняя работа на ${args[1]} по предмету ${args[0]}`)
      .setColor(0x00a550)
      .setDescription(`День недели: ${name[args[1]].день}`)
      .addField("Описание:", name[args[1]][args[0]])
      .setFooter('Узнать дз по другому предмету и\или на другой день "Бот, дз <предмет> <дата>"')
      message.channel.send({embed});
    }
  }

module.exports.help = {
    name: 'дз'
}
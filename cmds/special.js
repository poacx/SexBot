const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    const spec = require('../objects/special.json');
    const embed = new Discord.RichEmbed()
      .setTitle(`**Специальное расписание на ${args[0]}**:\n\
\n\
День недели: ${spec[args[0]].день}`)
      .setDescription(`1. ${spec[args[0]][1]}\n\
      2. ${spec[args[0]][2]}\n\
      3. ${spec[args[0]][3]}\n\
      4. ${spec[args[0]][4]}\n\
      5. ${spec[args[0]][5]}\n\
      6. ${spec[args[0]][6]}\n\
      7. ${spec[args[0]][7]}`)
      .setColor(0xffc233)
      .setFooter("Администратор")
      .setTimestamp()
      message.channel.send({embed});
}

module.exports.help = {
    name: 'расписание_специальное'
}
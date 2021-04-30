const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    const rasp = require('../objects/raspisanie.json');
    const day = Object.keys(rasp);
    const embed = new Discord.RichEmbed()
    .setTitle(`__**Расписание на 2018/2019 учебный год**__:`)
    .addBlankField()
    .setColor(0xffe5b4)
    .setFooter("Администратор")
    .setTimestamp()
    .addField("**Понедельник**", `1. ${rasp[day[0]][1]} \n\
2. ${rasp[day[0]][2]}\n\
3. ${rasp[day[0]][3]}\n\
4. ${rasp[day[0]][4]}\n\
5. ${rasp[day[0]][5]}\n\
6. ${rasp[day[0]][6]}\n\
7. ${rasp[day[0]][7]}`, true)
    .addField("**Вторник**", `1. ${rasp[day[1]][1]} \n\
2. ${rasp[day[1]][2]}\n\
3. ${rasp[day[1]][3]}\n\
4. ${rasp[day[1]][4]}\n\
5. ${rasp[day[1]][5]}\n\
6. ${rasp[day[1]][6]}\n\
7. ${rasp[day[1]][7]}`, true)
    .addBlankField()
    .addField("**Среда**", `1. ${rasp[day[2]][1]} \n\
2. ${rasp[day[2]][2]}\n\
3. ${rasp[day[2]][3]}\n\
4. ${rasp[day[2]][4]}\n\
5. ${rasp[day[2]][5]}\n\
6. ${rasp[day[2]][6]}\n\
7. ${rasp[day[2]][7]}`, true)
    .addField("**Четверг**", `1. ${rasp[day[3]][1]} \n\
2. ${rasp[day[3]][2]}\n\
3. ${rasp[day[3]][3]}\n\
4. ${rasp[day[3]][4]}\n\
5. ${rasp[day[3]][5]}\n\
6. ${rasp[day[3]][6]}\n\
7. ${rasp[day[3]][7]}`, true)
    .addBlankField()
    .addField("**Пятница**", `1. ${rasp[day[4]][1]} \n\
2. ${rasp[day[4]][2]}\n\
3. ${rasp[day[4]][3]}\n\
4. ${rasp[day[4]][4]}\n\
5. ${rasp[day[4]][5]}\n\
6. ${rasp[day[4]][6]}\n\
7. ${rasp[day[4]][7]}`, true)
    .addBlankField()
    message.channel.send({embed});
}

module.exports.help = {
    name: 'расписание'
}
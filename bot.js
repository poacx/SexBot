const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const botSettings = require("./botsettings.json");
const token = botSettings.token;
      prefix = botSettings.prefix;
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("Нет комманд для загрузки!");
        return;
    }

    console.log(`Загружено ${jsfiles.length} комманд!`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}: ${f} загружено!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    console.log(`Бот ${bot.user.username} готов! `);
    bot.user.setActivity('Домашку');
});

bot.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', 'Гость');
    member.addRole(role);
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!message.content.toLowerCase().startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[1].toLowerCase();
    let args = messageArray.slice(2)
        args = args.map(item => item.toLowerCase());

    let cmd = bot.commands.get(command);
    if(cmd) cmd.run(bot, message, args);
});

bot.login(token);
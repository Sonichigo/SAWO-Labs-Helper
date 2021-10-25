import dotenv from "dotenv";
const Discord = require('discord.js');
const client = new Discord.Client();
dotenv.config();

const ScamDetector = require('./commands/scamLinkDetector');
const Programs = require('./commands/activity');
const Help = require('./commands/help');
const prefix = "sawo@"

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity(" ☕❤️ by SAWO CHAMPS");
});

client.on("message", (message: any) => {
    ScamDetector.run(message);

    if ((!message.content.startsWith(prefix)) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log(command);
    
    switch (command) {
        case "activity":
            Programs.run(message, Discord);
            break;

        case "help":
            Help.run(message, Discord);
            break;

        default:
            message.channel.send("Command not found :/");
    }
});


client.login(process.env.DISCORD_TOKEN);
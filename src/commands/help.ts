const Programs = require('./activity');

module.exports = { 
    name: "help",
    description: "Displays all commands",
    run(message :any, Discord :any) {

        const msg = new Discord.MessageEmbed()
        .setColor('#ded033')
        .setTitle('Commands')
        .setAuthor(
            'SAWO Helper'
        )
        .addFields(
            {
                name: "sawo@ " + Programs.name,
                value: Programs.description,
            },
        )
        .setTimestamp()
        .setFooter(
            'type "sawo@help" for more info!'
        );
        message.channel.send(msg)
    }
}
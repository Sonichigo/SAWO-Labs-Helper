module.exports = {
    name: "activity",
	description: "List all activity",
    run(message: any, Discord: any) {
        const msg = new Discord.MessageEmbed()
			.setColor('#ded033')
			.setTitle('SAWO Labs Community')
			.setURL('https://www.sawolabs.com/')
			.setAuthor(
				'SAWO Helper'
			)
			.setDescription('SAWO is the only user-authentication tool that your developers would crave for')
			.setTimestamp()
			.setFooter(
				'type "sawo@help" for more info!'
			);
			message.channel.send(msg)
    },
};
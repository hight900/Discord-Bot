// Dependecies
const { get } = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, settings) => {
	try {
		get('https://nekobot.xyz/api/image?type=thigh')
			.then(res => {
				const embed = new MessageEmbed()
					.setImage(res.data.message);
				message.channel.send(embed);
			});
	} catch (err) {
		console.log(err);
		if (bot.config.debug) bot.logger.error(`${err.message} - command: thigh.`);
		message.error(settings.Language, 'ERROR_MESSAGE').then(m => m.delete({ timeout: 5000 }));
		if (message.deletable) message.delete();
	}
};
module.exports.config = {
	command: 'thigh',
	aliases: ['thighs'],
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
};

module.exports.help = {
	name: 'thigh',
	category: 'Nsfw',
	description: 'Look at NSFW images.',
	usage: '${PREFIX}thigh',
};

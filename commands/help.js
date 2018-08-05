const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var embed = new Discord.RichEmbed()
		.setTitle("Fire Ticket's Command's")
		.setColor("#ce2029")
		.addField("+New", "Open a ticket.")
		.addField("+Close", "Close your ticket.")
		.addField("+Add", "Add someone to your ticket.")
		.addField("+Remove", "Remove someone from your ticket.")
		.setFooter("©Fire Tickets")
	message.channel.sendEmbed(embed);
}
module.exports.help = {
  name:"help"
}

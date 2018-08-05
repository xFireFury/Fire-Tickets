const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let channelName = message.channel.name
    if (channelName.startsWith(`ticket-`)) return message.channel.send(`You can't create a ticket in a ticket.`);

    const reason = message.content.split(" ").slice(1).join(" ");

	
    message.guild.createChannel("ticket-"+Math.floor(Math.random() * 250)).then(c => {
        let role = message.guild.roles.find("name", "Support");
        if(!role) return message.channel.send("Support Role Needed.")
        let role2 = message.guild.roles.find("name", "@everyone");


        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });

        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        let tcreateembed = new Discord.RichEmbed()
        .setTitle("Ticket Created")
        .setColor("#ce2029")
        .setDescription(`Your new ticket has been created in ${c}`)
        .setFooter("©Fire Tickets");
      
        message.channel.send(tcreateembed);

        role.setMentionable(true, 'Support')
        .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
        .catch(console.error);
        const embed = new Discord.RichEmbed()
        .setColor("#ce2029")
        .addField(`Ticket Created | Hello  ${message.author.username}!`, `Welcome to your Ticket.`)
        .setTimestamp();
        c.send({ embed: embed });
        c.send(`${role.toString()} - New Ticket Created`);

    })



    
}

module.exports.help = {
	name: "new"
}

const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');

module.exports = (client, oldMessage, newMessage) => {
    let logs = client.channels.get('790446502253428746');
    
    if (newMessage.content === oldMessage.content) return;

    const updateEmbed = new RichEmbed()
        .setTitle('Edit Event')
        .addField('User', oldMessage.author, false)
        .addField('Original Message', oldMessage.content, false)
        .addField('New Message', newMessage.content, false)
        .addField('Server', oldMessage.guild.name + `(${oldMessage.guild.id})`, false)
        .setColor(embedColor)
        .setFooter('Sneaky edit')
        .setTimestamp();

    logs.send(updateEmbed);
};
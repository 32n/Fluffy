const { MessageEmbed } = require("discord.js");
const { embedColor, editEventChannel } = require("../config.json");

module.exports = (client, oldMessage, newMessage) => {
    let logs = client.channels.cache.get(editEventChannel);
    
    if (oldMessage.author.bot) return;
    if (newMessage.content === oldMessage.content) return;

    const updateEmbed = new MessageEmbed()
        .setTitle("Edit Event")
        .addField("User", oldMessage.author, false)
        .addField("Original Message", oldMessage.content, false)
        .addField("New Message", newMessage.content, false)
        .addField("Server", oldMessage.guild.name + `(${oldMessage.guild.id})`, false)
        .setColor(embedColor)
        .setFooter("Sneaky edit")
        .setTimestamp();

    logs.send(updateEmbed);
};
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "avatar",

    execute(message) {

        const user = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setColor("#00BFFF")
            .setTitle(`🖼 Avatar de ${user.username}`)
            .setImage(user.displayAvatarURL({ size: 1024 }))
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
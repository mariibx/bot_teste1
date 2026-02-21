const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",

    execute(message) {

        const latency = Date.now() - message.createdTimestamp;

        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle("🏓 Pong!")
            .setDescription(`Latência: **${latency}ms**`)
            .setFooter({ text: `Solicitado por ${message.author.username}` })
            .setTimestamp();

        message.reply({ embeds: [embed] });
    }
};
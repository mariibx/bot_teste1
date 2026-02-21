const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "serverinfo",

    execute(message) {

        const { guild } = message;

        const embed = new EmbedBuilder()
            .setColor("#F1C40F")
            .setTitle("🏠 Informações do Servidor")
            .setThumbnail(guild.iconURL())
            .addFields(
                { name: "Nome", value: guild.name, inline: true },
                { name: "ID", value: guild.id, inline: true },
                { name: "Membros", value: `${guild.memberCount}`, inline: true },
                { name: "Criado em", value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>` }
            )
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
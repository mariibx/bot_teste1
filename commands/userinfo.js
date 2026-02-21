const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "userinfo",

    execute(message) {

        const user = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setColor("#2ECC71")
            .setTitle("👤 Informações do Usuário")
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: "Nome", value: user.username, inline: true },
                { name: "ID", value: user.id, inline: true },
                { name: "Conta criada", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>` }
            )
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
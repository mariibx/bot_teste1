const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ajuda",

    execute(message) {

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("📖 Lista de Comandos")
            .setDescription("Aqui estão os comandos disponíveis:")
            .addFields(
                { name: "-ping", value: "Ver latência do bot", inline: true },
                { name: "-avatar", value: "Ver avatar de um usuário", inline: true },
                { name: "-userinfo", value: "Informações do usuário", inline: true },
                { name: "-serverinfo", value: "Informações do servidor", inline: true },
                { name: "-clear", value: "Apagar mensagens", inline: true }
            )
            .setFooter({ text: `Solicitado por ${message.author.username}` })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "clear",

    async execute(message, args) {

        if (!message.member.permissions.has("ManageMessages")) {
            return message.reply("❌ Você não tem permissão.");
        }

        const quantidade = parseInt(args[0]);

        if (!quantidade || quantidade < 1 || quantidade > 100) {
            return message.reply("❌ Escolha um número entre 1 e 100.");
        }

        await message.channel.bulkDelete(quantidade, true);

        const embed = new EmbedBuilder()
            .setColor("#E74C3C")
            .setDescription(`🧹 **${quantidade} mensagens apagadas com sucesso!**`)
            .setTimestamp();

        const msg = await message.channel.send({ embeds: [embed] });
        setTimeout(() => msg.delete(), 3000);
    }
};
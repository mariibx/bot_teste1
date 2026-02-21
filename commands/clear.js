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

        message.channel.send(`🧹 ${quantidade} mensagens apagadas.`)
            .then(msg => setTimeout(() => msg.delete(), 3000));
    }
};
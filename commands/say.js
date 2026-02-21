module.exports = {
    name: "say",

    execute(message, args) {

        if (!args.length) {
            return message.reply("❌ Você precisa escrever uma mensagem.");
        }

        const texto = args.join(" ");
        message.delete();
        message.channel.send(texto);
    }
};
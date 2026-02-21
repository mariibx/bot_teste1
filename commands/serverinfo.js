module.exports = {
    name: "serverinfo",

    execute(message) {

        const { guild } = message;

        message.channel.send(`
🏠 **Informações do Servidor**

Nome: ${guild.name}
ID: ${guild.id}
Membros: ${guild.memberCount}
Criado em: <t:${Math.floor(guild.createdTimestamp / 1000)}:F>
        `);
    }
};
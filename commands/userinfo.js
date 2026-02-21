module.exports = {
    name: "userinfo",

    execute(message) {

        const user = message.mentions.users.first() || message.author;

        message.channel.send(`
👤 **Informações do Usuário**

Nome: ${user.username}
ID: ${user.id}
Conta criada em: <t:${Math.floor(user.createdTimestamp / 1000)}:F>
        `);
    }
};
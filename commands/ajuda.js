module.exports = {
    name: "ajuda",

    execute(message) {

        message.channel.send(`
📖 **Comandos disponíveis**

-ping → Ver latência
-say → Fazer o bot repetir
-avatar → Ver avatar
-userinfo → Informações do usuário
-serverinfo → Informações do servidor
-clear → Apagar mensagens
-ajuda → Lista de comandos
        `);
    }
};
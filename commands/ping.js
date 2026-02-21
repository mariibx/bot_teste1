module.exports = {
    name: "ping",

    execute(message) {
        const latency = Date.now() - message.createdTimestamp;
        message.reply(`🏓 Pong! Latência: ${latency}ms`);
    }
};
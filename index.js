require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Map();

//
// 🔹 Carregar comandos automaticamente
//
const commandsPath = path.join(__dirname, "commands");

if (fs.existsSync(commandsPath)) {
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
}

//
// 🔹 Evento Ready
//
client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

//
// 🔹 Evento de mensagens
//
client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith("-")) return;

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error("Erro ao executar comando:", error);
        message.reply("❌ Ocorreu um erro ao executar o comando.");
    }
});

//
// 🛡️ Anti-crash global
//
process.on("unhandledRejection", (error) => {
    console.error("Erro não tratado:", error);
});

process.on("uncaughtException", (error) => {
    console.error("Exceção não capturada:", error);
});

//
// 🔄 Monitoramento de conexão
//
client.on("shardDisconnect", () => {
    console.log("⚠️ Bot desconectado. Tentando reconectar...");
});

client.on("shardReconnecting", () => {
    console.log("🔄 Reconectando...");
});

//
// 📊 Monitoramento de memória (a cada 5 minutos)
//
setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024;
    console.log(`📊 Memória usada: ${used.toFixed(2)} MB`);
}, 300000);

//
// ♻️ Reinício preventivo a cada 12 horas
//
setInterval(() => {
    console.log("♻️ Reiniciando para manter estabilidade...");
    process.exit(0);
}, 1000 * 60 * 60 * 12);

client.login(process.env.TOKEN);
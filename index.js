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

// 🔹 Carregar comandos automaticamente
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// 🔹 Evento Ready
client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

// 🔹 Evento de mensagens
client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith("-")) return;

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    command.execute(message, args);
});

client.login(process.env.TOKEN);
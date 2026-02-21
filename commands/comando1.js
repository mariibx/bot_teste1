module.exports = {
    name: "hairo9",

    execute(message) {
        const texto = `
**【 🌙 】━━━━━≼◦Night Vision◦≽━━━━━【 🌙 】

➥ — ${message.author} - Usou... "Kurayami o Aruku" — Umbracinese.

➤ 📖 - O usuário se desfaz quando acertado por um golpe do adversário, reaparecendo em outro local.

➤ 🛡 - Usuário desviou do ataque adversário.
➤ 🌪 - Usuário gastou 40.000 de energia no uso da técnica.
➤ 📌 - Usável apenas 3 vezes em batalha.**
        `;

        message.channel.send(texto);
    }
};
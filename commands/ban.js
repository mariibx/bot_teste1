const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "ban",
  description: "Bane um usuário do servidor.",
  options: [
    {
      name: "usuario",
      description: "Mencione o usuário que deseja banir",
      type: 6,
      required: true
    },
    {
      name: "motivo",
      description: "Motivo do banimento",
      type: 3,
      required: false
    }
  ],
  run: async (client, interaction) => {
    const user = interaction.options.getUser("usuario");
    const reason = interaction.options.getString("motivo") || "Não informado";

    if (!interaction.member.permissions.has("BanMembers"))
      return interaction.reply({ content: "Você não tem permissão para banir!", ephemeral: true });

    const member = interaction.guild.members.cache.get(user.id);
    if (!member) return interaction.reply({ content: "Usuário não encontrado.", ephemeral: true });

    await member.ban({ reason });
    
    const embed = new EmbedBuilder()
      .setTitle("🔨 Usuário Banido")
      .setDescription(`O usuário ${user} foi banido do servidor.\n**Motivo:** ${reason}`)
      .setColor("Red")
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  }
};
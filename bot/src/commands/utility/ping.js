const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),

  async execute(interaction) {
    interaction.reply(`🏓 Pong! ${interaction.client.ws.ping}ms`);
  }
};

const { SlashCommandBuilder } = require('discord.js');


module.exports = {
data: new SlashCommandBuilder()
.setName('dev-ping')
.setDescription('Ping test'),


async execute(interaction) {
interaction.reply(`🏓 Pong! ${interaction.client.ws.ping}ms`);
}
};

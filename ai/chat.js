const { SlashCommandBuilder } = require('discord.js');


module.exports = {
data: new SlashCommandBuilder()
.setName('ai-chat')
.setDescription('Chat with Avion AI')
.addStringOption(o => o.setName('prompt').setDescription('Your message').setRequired(true)),


async execute(interaction) {
const prompt = interaction.options.getString('prompt');
interaction.reply(`🤖 AI Response to: ${prompt}`);
}
};

const { SlashCommandBuilder, ChannelType } = require('discord.js');


module.exports = {
data: new SlashCommandBuilder()
.setName('config-logs')
.setDescription('Set logs channel')
.addChannelOption(o => o.setName('channel').setRequired(true).addChannelTypes(ChannelType.GuildText)),


async execute(interaction) {
const channel = interaction.options.getChannel('channel');
interaction.reply(`📄 Logs channel set to ${channel}`);
}
};

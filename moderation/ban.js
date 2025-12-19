const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');


module.exports = {
data: new SlashCommandBuilder()
.setName('ban')
.setDescription('Ban a member')
.addUserOption(o => o.setName('user').setDescription('User').setRequired(true))
.addStringOption(o => o.setName('reason').setDescription('Reason'))
.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),


async execute(interaction) {
const user = interaction.options.getUser('user');
const reason = interaction.options.getString('reason') || 'No reason';
await interaction.guild.members.ban(user, { reason });
interaction.reply(`✅ Banned ${user.tag}`);
}
};

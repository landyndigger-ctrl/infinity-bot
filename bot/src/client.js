const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();


const folders = fs.readdirSync(path.join(__dirname, 'commands'));
for (const folder of folders) {
const files = fs.readdirSync(`./src/commands/${folder}`).filter(f => f.endsWith('.js'));
for (const file of files) {
const cmd = require(`./commands/${folder}/${file}`);
client.commands.set(cmd.data.name, cmd);
}
}


module.exports = client;

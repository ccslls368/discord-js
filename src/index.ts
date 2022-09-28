require('dotenv').config();
const { DISCORD_TOKEN, CLIENT_ID } = process.env;

import { Client, GatewayIntentBits, messageLink } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on('messageCreate', async (message) => {
  console.log(message);
  if (!message?.author.bot) {
    message.author.send(`Echo ${message.content}`);
  }
})

client.login(DISCORD_TOKEN);

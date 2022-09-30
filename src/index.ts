require('dotenv').config();
const { DISCORD_TOKEN, CLIENT_ID, prefix } = process.env;

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

import './commands'

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	} 
  else if (interaction.commandName === 'beep') {
		await interaction.reply('Boop!');
	}
  else if (interaction.commandName === 'test') {
		await interaction.reply('TEST!');
	}
});

// Проверка на вывод в консоль - работает
// client.on('messageCreate', async (message) => {
//   if (!message?.author.bot) {
//     if (message.content === prefix + 'pping') {
//       console.log("абоба?")
//     }
//     else {
//       console.log("не абоба?")
//     }
//   }
// })

// client.on('interactionCreate', async interaction => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === 'ping') {
//     await interaction.reply('Pong!');
//   }
// });

// client.on('messageCreate', async (message) => {
//   if (!message?.author.bot) {
//     if (message.content === prefix + 'ping') {
//       message.channel.send('Pong!');
//     }
    // else {
    //   message.channel.send(`${message.content}`);
    // }
//   }
// })


client.login(DISCORD_TOKEN);

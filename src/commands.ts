import { REST, Routes } from 'discord.js';

require('dotenv').config();
const { DISCORD_TOKEN, CLIENT_ID, prefix } = process.env;

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'beep',
    description: 'Replies with Boop!',
  },
  {
    name: 'test',
    description: 'Проверка',
  },
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();





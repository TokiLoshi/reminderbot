import dotenv from 'dotenv';
dotenv.config()

import { Client, GatewayIntentBits, Message } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ],
});

const YOUR_USER_ID = '372517534282416130'

client.once('ready', () => {
  console.log('Bot is online!');
  setInterval(() => {
    let today = new Date();
    let minutes = today.getMinutes();

    if (minutes % 10 === 0){
      const reminderMessage = "This is your reminder that you are awesome"
      const targetChannel = client.channels.cache.get('1149090314649342002');
      if (targetChannel.isTextBased()){
        targetChannel.send(`<@{YOUR_USER_ID}>, ${reminderMessage}`);
      }
    }
  }, 60000);
});

client.login(process.env.DISCORD_TOKEN);
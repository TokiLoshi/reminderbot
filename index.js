import dotenv from 'dotenv';
import cron from 'node-cron'
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

const YOUR_USER_ID = process.env.YOUR_USER_ID;

client.once('ready', () => {
  console.log('Bot is online!');
    const gifURLS = ['https://media.giphy.com/media/vnAC0jrDm0z0aOhp3f/giphy.gif', 
    'https://media.giphy.com/media/35FdSNJrsdxquwq8dh/giphy.gif',
    'https://media.giphy.com/media/IPcT896JyrTFfH3xgo/giphy.gif',
    'https://media.giphy.com/media/k3ysanIoI6Yx2/giphy.gif',
    'https://media.giphy.com/media/jnn10FpMrQ2UAKuma4/giphy.gif',
    'https://media.giphy.com/media/OnHRNHL01wzUKYqCi6/giphy.gif',
    'https://media.giphy.com/media/fxgZd3OYNKGDpMTaiP/giphy.gif',
    'https://media.giphy.com/media/d7EdcFSh3Ww5rHqq8W/giphy.gif',
    'https://media.giphy.com/media/N6QcZCx9mfVOGkrIET/giphy.gif',
    'https://media.giphy.com/media/KbJpnqc85flmRdy8Yx/giphy.gif',
    'https://media.giphy.com/media/KbJpnqc85flmRdy8Yx/giphy.gif',
    'https://media.giphy.com/media/uPAjJR0X75VDAdu2uT/giphy.gif',
    'https://media.giphy.com/media/mv8uWOvLusaoYVmOtw/giphy.gif',
    'https://media.giphy.com/media/OMtHJ3w1rk7tvyCsvZ/giphy.gif',
    'https://media.giphy.com/media/g7UdzhT552oqWjTDpr/giphy.gif',
    'https://media.giphy.com/media/xTiN0A7XWBdAGhG0gw/giphy.gif',
    'https://media.giphy.com/media/l2SpKjDrgdEowsN2w/giphy.gif',
    'https://media.giphy.com/media/l378pTSug2Gb2vl1C/giphy.gif',
    'https://media.giphy.com/media/UqvqcFYDaqkXCBQrjh/giphy.gif',
    'https://media.giphy.com/media/Hli61sHE0G34EAp9Lm/giphy.gif',
    'https://media.giphy.com/media/RcMJfTUshib4Bw7t2H/giphy.gif',
    'https://media.giphy.com/media/aufn4sMIx1It8IZhzn/giphy.gif'
  ];
  const motivationalQuotes = [
    'Just do it!',
    '"It always seems impossible until it\'s done." - Nelson Mandela',
    '"Amateurs sit and wait for inspiration, the rest of us just get up and go to work." - Stephen King',
    '"If you spend too much time thinking about a thing, you\'ll never get it done." - Bruce Lee',
    '"Good things happen to those who hustle." – Anais Nin',
    '"All progress takes place outside the comfort zone." - Michael John Bobak',
    '"It is not the mountain we conquer, but ourselves." - Sir Edmund Hillary',
    'Do the hard jobs first. The easy jobs will take care of themselves." - Dale Carnegie',
    'Don\'t wait for the perfect moment; take the moment and make it perfect!',
    'The road to success is dotted with many tempting parking spaces. Keep driving!',
    'Your future self is watching you right now through memories. Make it a good show!',
    'Why be moody when you can shake your booty? Get to it!',
    'Today is a soup and you\'re the chef. Add the ingredients for a productive day!',
    'Think you can, think you can\'t; either way, you\'ll be right!',
    'You don\'t have to be great to start, but you have to start to be great.',
    'The key to success is to start before you\'re ready. Ready, set, go!',
    'Life\'s too short for what-ifs. Chase that dream like it stole your wallet!',
    'Don\'t watch the clock; do what it does. Keep going!',
    'Be a pineapple: stand tall, wear a crown, and be sweet on the inside.',
    'It\'s never too late to be what you might have been. Time\'s ticking!',
    'If you\'re waiting for a sign, this is it. Go make waves!',
  ]
  cron.schedule('15 3 * * *', () => {
  console.log("Cron is scheduled to run at 3 15")
  let randomNumber = Math.floor(Math.random() * gifURLS.length)
  let randomQuote = Math.floor(Math.random() * motivationalQuotes.length)
  console.log(`Random Number: ${randomNumber}`);
  const reminderMessage = "here is your daily reminder to send Bianca your CV. I also have a cheesy motivational quote for you and a gif. Enjoy!"
  const targetChannel = client.channels.cache.get(process.env.DISCORD_CHANNEL);
  if (targetChannel.isTextBased()) {
    targetChannel.send(`<@${YOUR_USER_ID}>, ${reminderMessage}\n Daily Motivation Cheese (might have come from a chatbot...might not...) \n ${motivationalQuotes[randomQuote]} \n ${gifURLS[randomNumber]}`);
    const currentTime = new Date();
    console.log("Message sent at: ", currentTime.toISOString());
    }
  });
});

client.login(process.env.DISCORD_TOKEN);
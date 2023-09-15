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
  const magicGifs = [
    'https://media.giphy.com/media/Ri7d8I18cto2jufOKc/giphy.gif',
    'https://media.giphy.com/media/7Xov9qZ44Mq0qkCN9Q/giphy.gif',
    'https://media.giphy.com/media/lLUh1IHIwn7ljZV6dM/giphy.gif',
    'https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif',
    'https://media.giphy.com/media/48FhEMYGWji8/giphy.gif'
  ];
  const linkedInGifs = [
    'https://media.giphy.com/media/khr2lS27v92PQPD3oa/giphy.gif',
    'https://media.giphy.com/media/1zR9oeiZVWnSthyW6O/giphy.gif',
    'https://media.giphy.com/media/wdynSXU7gRDtQ21mrR/giphy.gif',
    'https://media.giphy.com/media/DJuZTbGExqC9CB1OWN/giphy.gif',
    'https://media.giphy.com/media/3o7aD50FUyzcIsLBBK/giphy.gif'
  ]
  const sendCVGifs = [
    'https://media.giphy.com/media/Hw8vYF4DNRCKY/giphy.gif',
    'https://media.giphy.com/media/FFYuwUiNlnU599cWwT/giphy.gif',
    'https://media.giphy.com/media/zczuaAkE8TDri/giphy.gif',
    'https://media.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif',
    'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif',
    'https://media.giphy.com/media/RpqSdirqOryI8/giphy.gif',
    'https://media.giphy.com/media/KMQSo3DKYBxgsei7lI/giphy.gif',
    'https://media.giphy.com/media/9JyQbpKdPa1DeDAFyo/giphy.gif',
    'https://media.giphy.com/media/NytMLKyiaIh6VH9SPm/giphy.gif',
    'https://media.giphy.com/media/H3cBaC5OnaJ79UjL9h/giphy.gif',
    'https://media.giphy.com/media/qOhzfrkMzQO8U/giphy.gif',
    'https://media.giphy.com/media/xULW8hNotUdPTMaQBG/giphy.gif',
    'https://media.giphy.com/media/xULW8A0zSwU1Yz0xmU/giphy.gif',
    'https://media.giphy.com/media/BNR91YsnOC9I59011H/giphy.gif',
    'https://media.giphy.com/media/snADT4YhRzsqqqLAZl/giphy.gif',
    'https://media.giphy.com/media/reiUKnEoJhCyUhjvyT/giphy.gif',
    'https://media.giphy.com/media/PZ4rqBqRk2LCTWA7oi/giphy.gif',
    'https://media.giphy.com/media/lP19q4Rm6q0P4oozuD/giphy.gif',
    'https://media.giphy.com/media/ElvtNc5cuVEOH2dAM0/giphy.gif',
    'https://media.giphy.com/media/b8dEF2gIPHR2bGfg34/giphy.gif',
    'https://media.giphy.com/media/zWQ1R1dG6Yn0SPqQb7/giphy.gif'    
  ]
  // const motivationalQuotes = [
  //   'Just do it!',
  //   '"It always seems impossible until it\'s done." - Nelson Mandela',
  //   '"Amateurs sit and wait for inspiration, the rest of us just get up and go to work." - Stephen King',
  //   '"If you spend too much time thinking about a thing, you\'ll never get it done." - Bruce Lee',
  //   '"Good things happen to those who hustle." – Anais Nin',
  //   '"All progress takes place outside the comfort zone." - Michael John Bobak',
  //   '"It is not the mountain we conquer, but ourselves." - Sir Edmund Hillary',
  //   'Do the hard jobs first. The easy jobs will take care of themselves." - Dale Carnegie',
  //   'Don\'t wait for the perfect moment; take the moment and make it perfect!',
  //   'The road to success is dotted with many tempting parking spaces. Keep driving!',
  //   'Your future self is watching you right now through memories. Make it a good show!',
  //   'Why be moody when you can shake your booty? Get to it!',
  //   'Today is a soup and you\'re the chef. Add the ingredients for a productive day!',
  //   'Think you can, think you can\'t; either way, you\'ll be right!',
  //   'You don\'t have to be great to start, but you have to start to be great.',
  //   'The key to success is to start before you\'re ready. Ready, set, go!',
  //   'Life\'s too short for what-ifs. Chase that dream like it stole your wallet!',
  //   'Don\'t watch the clock; do what it does. Keep going!',
  //   'Be a pineapple: stand tall, wear a crown, and be sweet on the inside.',
  //   'It\'s never too late to be what you might have been. Time\'s ticking!',
  //   'If you\'re waiting for a sign, this is it. Go make waves!',
  // ]
  const motivationalQuotes = [
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Fortune favors the bold." - Virgil',
    '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau',
    '"Don’t be afraid to give up the good to go for the great." - John D. Rockefeller',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
    '"Success is walking from failure to failure with no loss of enthusiasm." - Winston Churchill',
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"In the middle of every difficulty lies opportunity." - Albert Einstein',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"Go confidently in the direction of your dreams. Live the life you have imagined." - Henry David Thoreau',
    '"The harder you work for something, the greater you\'ll feel when you achieve it." - Unknown',
    '"Don’t wait for opportunity. Create it." - Unknown',
    '"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you." - Steve Jobs',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"It’s not about how bad you want it, it’s about how hard you’re willing to work for it." - Unknown',
    '"Your career is like a garden. It can hold an assortment of life’s energy that yields a bounty for you. You do not need to grow just one thing in your garden. You do not need to do just one thing in your career." - Jennifer Ritchie Payette',
    '"Don\'t wait for the doors to open; build your own door and walk through it." - ChatGPT',
    '"The journey to success is paved with keystrokes and mouse clicks; make every interaction count." - ChatGPT',
    '"Dreams are the seeds of reality. Cultivate them well, and you\'ll harvest the life you aspire to live." - ChatGPT'
  ]

  // cron.schedule('15 3 * * *', () => {
  cron.schedule('40 16 * * *', () => {
    console.log("Cron is scheduled to run at 16:23");
    let randomGif = Math.floor(Math.random() * sendCVGifs.length);
    let randomQuote = Math.floor(Math.random() * motivationalQuotes.length);
    console.log(`Random Number: ${randomNumber}`);
    const reminderMessage = "Good morning! That CV is looking so good! It's time for other people to see it. Your friendly local warlock is here with you daily reminder. Time to send out your CV, let's get it out there! I also have a cheesy motivational quote for you and a gif. Enjoy!"
    const targetChannel = client.channels.cache.get(process.env.DISCORD_CHANNEL);
    if (targetChannel.isTextBased()) {
      targetChannel.send(`<@${YOUR_USER_ID}>, ${reminderMessage}\n Daily Motivation Cheese (keep an eye out for some ChatGPT originals) \n ${motivationalQuotes[randomQuote]} \n ${sendCVGifs[randomGif]}`);
      const currentTime = new Date();
      console.log("Message sent at: ", currentTime.toISOString());
      }
  });
});


client.login(process.env.DISCORD_TOKEN);
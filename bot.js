const Discord = require('discord.js');
const logger = require('./logger'); // import the logger
require('dotenv').config();
require('http').createServer().listen(3001);
const client = new Discord.Client();

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Tag me to UwUize!");
});

client.on('message', msg => {
    if (msg.isMentioned(client.user) || (Math.floor(Math.random() * 100) + 1) === 69) {
        msg.channel.fetchMessages({ limit: 2 }).then(messages => {
            let prevMes = messages.last().content;
            let mesAsArr = prevMes.split("");
        let newMes = "";
        for(let x = 0; x < mesAsArr.length; x++){
            if(mesAsArr[x] == 'l' || mesAsArr[x] == 'r'){
                mesAsArr[x] = 'w';
            }
            if(mesAsArr[x] == 'L' || mesAsArr[x] == 'R'){
                mesAsArr[x] = 'W';
            }
            newMes += mesAsArr[x];
        }
        let responseOptions = [" UwU", " OwO"]
        let responseChoice = Math.floor(Math.random() * responseOptions.length)
        newMes += responseOptions[responseChoice];
        msg.channel.send(newMes);

          })
          .catch(console.error);
    }
});

client.on('shardError', error => {
	logger.error('A websocket connection encountered an error:', error);
});

client.on('error', err => {
    logger.error(err);
});

client.login(process.env.TOKEN);

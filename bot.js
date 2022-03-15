const Discord = require('discord.js');
require('dotenv').config()
require('http').createServer().listen(3000)
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("Tag me to UwUize!");
 });

client.on('message', msg => {
    if (msg.isMentioned(client.user) || (Math.floor(Math.random() * 1000) + 1) === 755) {
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
        newMes += " OwO";
        msg.channel.send(newMes);

          })
          .catch(console.error);
    }
});

client.login(process.env.TOKEN);

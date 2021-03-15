const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.addField(`**help commands**`,
          
  ||GIF||**
😅|meme
🎴|boomb
=========================
🌝|man gif
🦄|girl gif
=========================
💔|sad gif
❤|love gif
    
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/9jyZWX4Fmc)**`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: '',
  description: 'help bot',
  usage: 'dev hell'
};

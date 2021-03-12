const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://www.bing.com/th/id/OGC.c00d1874cce50c188a393d38c3fb1f8f?pid=1.7&rurl=https%3a%2f%2flh3.googleusercontent.com%2fproxy%2fmveDlxO-fCD7SkfLrEy37RqWr5lKGSxuShd-dFcwOl1e488H1zdHQ1tgEVTSrRTVA9k%3ds0-d&ehk=x5din%2fGaxIqbQG4hMZHJcbeBbJq2jeU7csoXQveBZec%3d","","",];
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("ANNA")

.setColor("pink")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif anna','anna gif','gifanna','annagif','anna','Anna'],

  permLevel: 0

};

exports.help = {

  name: 'anna',

  description: 'lrowsxrd',

  usage: 'anna'

};

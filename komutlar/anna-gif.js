const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://th.bing.com/th/id/OIP.YLTKp773VSNu8DNu-PqDYgHaIJ?pid=ImgDet&rs=1",];
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

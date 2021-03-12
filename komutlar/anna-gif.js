const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://www.bing.com/th?id=OIP.Hy68YLLQ97wrvAX1by2_cgHaFe&w=197&h=160&c=8&rs=1&qlt=90&pid=3.1&rm=2","","",];
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

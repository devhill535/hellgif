const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://th.bing.com/th/id/OIP.qrvoAC6A65x4MtpHUE5xDgHaFx?w=198&h=180&c=7&o=5&pid=1.7",]
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("ANNA;")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif anna','anna gif','gifanna','annagif','anna'],

  permLevel: 0

};

exports.help = {

  name: 'anna',

  description: 'lrowsxrd',

  usage: 'anna'

};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://www.wattpad.com/748720251-~added~-bnha-various-x-fem-reader-~we-love-a?utm_source=web&utm_medium=pinterest&utm_content=share_reading","","",];
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

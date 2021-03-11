const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://64.media.tumblr.com/1dabf041d6581a70a19d3454bd5f4f3a/01605b0a859b1a13-60/s400x600/a067c73b8eae7a214cdf50eddf06deb95fdfe45f.gifv",];
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

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://www.bing.com/th/id/OGC.aa383597be33543e833f67128cf31646?pid=1.7&rurl=http%3a%2f%2f3.bp.blogspot.com%2f-7HV6jjwgDr0%2fU74I5DxMU9I%2fAAAAAAAABEY%2fzajXCxGS4_g%2fs1600%2fpost-41000-Frozen-Anna-smiling-gif-Imgur-WEqF.gif&ehk=Pv2V4OJMkZdkDmIREV0m3XguE%2bJej0%2blOin4akl7pcA%3d","https://www.bing.com/th/id/OGC.a540af2fabd0fcc8f79d21b882f1f3c3?pid=1.7&rurl=https%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fanna-frozen-gif-2.gif&ehk=MBXbNQg093dxKc6NbSd16O3j43kzlXyvQzSqd%2bmClXs%3d",""];
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("ANNA")

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

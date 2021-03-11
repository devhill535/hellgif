const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');

process.setMaxListeners(0);

require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const istatistikler = new Discord.MessageEmbed()
  
  .setColor('ORANGE')
  

  
.addField("**owner bot**", "<@758476332098650152>")
  
  .addField("**owner bot**", "<@803395786582654997>")
  
  .addField("`Language Program`",  `**Java Script**`, true)
  
   .addField("`my name`", `**Gif BOT#3785**`, true)
  
  .addField("`My ID`",  `**758476332098650152**`, true)
  
  .addField( "`My Prefix` ",`**/**`,true)
  
  .addField("**About Memory**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  
  .addField("**Discord.JS**", "v"+Discord.version, true)
  
  .addField("**Node.JS**", `${process.version}`, true)
  
  
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bot",
  description: "lrowsxrd",
  usage: "jfkdjkj"
};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif","https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif","https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif","https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif","https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif","https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif","https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif","https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif","https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif","https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif","https://i.gifer.com/7Ago.gif","https://pa1.narvii.com/6603/e931b39c513a8c7b5ca7303ce493460164223f45_hq.gif","http://gifgifs.com/animations/anime/bleach/ichigo-kurosaki/ichigo_kurosaki_12.gif","https://giffiles.alphacoders.com/339/33944.gif","https://giffiles.alphacoders.com/132/13267.gif","https://giffiles.alphacoders.com/253/2535.gif","https://giffiles.alphacoders.com/157/15737.gif","https://giffiles.alphacoders.com/140/14018.gif","https://giffiles.alphacoders.com/207/207838.gif","https://giffiles.alphacoders.com/140/14015.gif","https://giffiles.alphacoders.com/351/35116.gif","https://giffiles.alphacoders.com/262/26206.gif","https://giffiles.alphacoders.com/559/55912.gif","https://giffiles.alphacoders.com/216/2164.gif","https://giffiles.alphacoders.com/140/14016.gif","https://giffiles.alphacoders.com/354/35459.gif","https://giffiles.alphacoders.com/140/14020.gif","https://giffiles.alphacoders.com/207/207972.gif","https://giffiles.alphacoders.com/132/13214.gif","https://giffiles.alphacoders.com/136/13621.gif","https://giffiles.alphacoders.com/133/13338.gif","https://giffiles.alphacoders.com/348/3480.gif","https://giffiles.alphacoders.com/132/13266.gif","https://giffiles.alphacoders.com/158/15806.gif","https://giffiles.alphacoders.com/136/13621.gif","https://giffiles.alphacoders.com/133/13338.gif","https://giffiles.alphacoders.com/207/207976.gif","https://giffiles.alphacoders.com/207/207976.gif","https://giffiles.alphacoders.com/249/2497.gif","https://giffiles.alphacoders.com/188/188495.gif","https://giffiles.alphacoders.com/132/13264.gif","https://giffiles.alphacoders.com/208/208952.gif","https://giffiles.alphacoders.com/559/55913.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Anime Gif ;")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gifanime','animegif','gif anime','anime gif','anime'],

  permLevel: 0

};

exports.help = {

  name: 'anime',

  description: 'lrowsxrd',

  usage: 'anime'

};



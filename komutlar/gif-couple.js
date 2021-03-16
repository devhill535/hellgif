const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif",
               "https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif",
               "https://giffiles.alphacoders.com/907/90702.gif","https://giffiles.alphacoders.com/158/15802.gif",
               "https://www.bing.com/th/id/OGC.e7c415817136de5106ae323b4424c0b1?pid=1.7&rurl=https%3a%2f%2f68.media.tumblr.com%2f43e723e2c9b8554972c5a408c72829af%2ftumblr_of8eefC4bs1sq9gnbo1_500.gif&ehk=MjGgfFVV01GG0%2bxOoiuPgcfmxNHpKkPs9UxTmMyJHg0%3d",
               "https://www.bing.com/th/id/OGC.fa13aa4b68c1982bd37d627dd056cd19?pid=1.7&rurl=https%3a%2f%2fdata.whicdn.com%2fimages%2f94532959%2foriginal.gif&ehk=RjeMRLoLOstLFWbs8nGA8ycn%2b7mbuDcKnpi%2bVpLPC9s%3d",
               "https://www.bing.com/th/id/OGC.e3691d2fbbf4bb8cc66b347d1505a926?pid=1.7&rurl=https%3a%2f%2f68.media.tumblr.com%2f6588f9c533182692917b514938d2c06d%2ftumblr_o7eii5Yo6h1v99polo1_500.gif&ehk=96JTN6mNSXMLNK691B4gCSn95E0dpcml%2f0bGLd7IJh8%3d",
               "https://www.bing.com/th/id/OGC.c3f88f902d314150f15b4acfdb894fb1?pid=1.7&rurl=http%3a%2f%2fdigtoknow.com%2fwp-content%2fuploads%2f2016%2f01%2fcouples-kissing-pictures-2.gif&ehk=DkHfINJ9smUS%2bChUPfzVHmXKomPpPpK%2bl6KaTqMEV5Q%3d",
               "https://www.bing.com/th/id/OGC.4accd81e340076533f0149759964812f?pid=1.7&rurl=http%3a%2f%2fmedia.giphy.com%2fmedia%2f12oHJkIbHouH9S%2fgiphy.gif&ehk=WcQu%2fsC9MqM8iVaqRIAaXl%2fJDNh%2bVHeYVifaQxSNLzo%3d",
               "https://www.bing.com/th/id/OGC.a966e602511975c92f7b15189ab9a0f0?pid=1.7&rurl=https%3a%2f%2fdata.whicdn.com%2fimages%2f66550104%2foriginal.gif&ehk=6KSktRSJI%2b%2fqrbFWwEvu0L%2b7OpvfDroaa%2fJqPhHauUE%3d",
               "https://www.bing.com/th/id/OGC.520a9c2ae5adf4458830a24600ea568d?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f520a9c2ae5adf4458830a24600ea568d%2ftenor.gif%3fitemid%3d15885682&ehk=IubCtXX46q0pUeC0EtyzcQ0%2f9fw0Fcq1V2IKnyXa2sg%3d",
               "https://64.media.tumblr.com/ba7e534b1d6a177b97d2fa77ebc0f812/tumblr_pdhbf37KuM1xq08x4o1_400.gifv",
               "https://64.media.tumblr.com/1bed8e8d5468c97b8982b6445ce9c80d/tumblr_inline_p7np7zJtqw1qlak20_400.gifv",
               "https://64.media.tumblr.com/985b34a2492e6334a675582819a825f2/tumblr_nu3grhCnpr1r4saquo1_400.gifv",
              
              ];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("COUPLE")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif couple','couplegif','gifcouple','couple gif','couple','Couple','COUPLE',],

  permLevel: 0

};

exports.help = {

  name: 'COUPLE',

  description: 'lrowsfdkvxrd',

  usage: 'COUPLE'

};

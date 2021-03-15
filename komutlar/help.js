client.on("message", message => {
    var addserver = `https://discord.gg/99KsGZHrsv`;
    var SUPPORT = `https://discord.gg/99KsGZHrsv`;
    var website = `https://black-bot-html.glitch.me/`;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter("")
      .setImage(
        "https://cdn.discordapp.com/attachments/796750980469358622/809873763444850698/image0.gif"
      )
      .setColor("RANDOM").setDescription(` 

🕐|date
  ||GIF||
😅|meme
🎴|boomb
=========================
🌝|man gif
🦄|girl gif
=========================
💔|sad gif
❤|love gif

 | [ Server Support](${SUPPORT}) |
`);
    message.channel.sendEmbed(embed);
  }
});

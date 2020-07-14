const Discord =require("discord.js");

module.exports.run= async(Bot ,msg, args)=>
{
      if (msg.member.voice.channel)msg.member.voice.channel.join();
      else return msg.reply("Please make sure you are in a voice channel.");
}
module.exports.help={name:"join"}

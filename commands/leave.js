const Discord =require("discord.js");

module.exports.run= async(Bot ,msg, args)=>
{
      msg.member.voice.channel.leave();
}
module.exports.help={name:"leave"}

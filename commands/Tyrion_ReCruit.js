const Discord =require("discord.js");

module.exports.run= async(Bot ,msg, args)=>
{
  let msgar = msg.content.split(" ");
  let unit=(msgar[2])?" "+msgar[2]:"";
  let rest=(msgar[1])?", "+msgar[1]+unit+" point":"";
  msg.channel.send(`@everyone Tyrion in elite, recruit challenge${rest}`);
  }

module.exports.help={name:"trc"}

const Discord =require("discord.js");

module.exports.run= async(Bot ,msg, args)=>
{
  if(msg.author.username!="馬肉")return msg.reply("你沒資格命令我=ˇ=");
  msg.delete();
  msg.channel.send(msg.content.slice(5));
}

module.exports.help={name:"say"}

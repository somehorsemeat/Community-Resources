const Discord =require("discord.js");

function sleep(sleepTime){for(var start = + new Date ;+ new Date - start<=sleepTime;){};}

module.exports.run= async(Bot ,msg, args)=>
{
  var clear = msg.content.substring(1).split(' ');
  if(!clear[1]) return msg.reply("wrong");
  msg.channel.bulkDelete(1);
  sleep(25);
  msg.channel.bulkDelete(clear[1]);
  msg.reply(`Cleard${clear[1]}message(s)`);
}

module.exports.help={name:"clear"}

const Discord =require("discord.js");

function sleep(sleepTime){for(var start = + new Date ;+ new Date - start<=sleepTime;){};}

module.exports.run= async(Bot ,msg, args)=>
{
  let msgar = msg.content.split(" ");
  if(!msgar[1])return msg.reply("Plese type in how many hour(s) you want me to remind you in");
  if(msgar[2])var msgarsquare= msg.content.split(msgar[1]);
  let content=(msgar[2])?": "+msgarsquare[1] : " to bubble up :)";
  setTimeout(function(){msg.reply(`May I remind you${content}`)},msgar[1]*1000*3600);
  }

module.exports.help={name:"rem"}

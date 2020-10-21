const Discord =require("discord.js");
var Fs = require('fs');

module.exports.run= async(Bot ,msg, args)=>
{
  let msgar = msg.content.split(" "),BiggerThanOne="";
  if(!msgar[1])return msg.reply("Plese type in how many hour(s) you want me to remind you in");
  if(msgar[1]==="cancel")
  {
    if(!msgar[2])return msg.reply("Please type in your reminder ID to cancel");
    Fs.writeFile(`./source/reminder/${msgar[2]}.txt`,"",function(){});
    return msg.reply(`Reminder No.${msgar[2]} has been removed`);
  }
  if(msgar[1]>1)BiggerThanOne="s";
  if(msgar[2])var msgarsquare= msg.content.split(msgar[1]);
  let content=(msgar[2])?": "+msgarsquare[1] : " to bubble up :)";
  var reminderID=setTimeout(function()
  {
    if(Fs.readFileSync(`./source/reminder/${reminderID._idleStart}.txt`,function(){}).includes(":  "))msg.reply(`May I remind you${content}`);
    Fs.unlink(`./source/reminder/${reminderID._idleStart}.txt`,function(){});
  },msgar[1]*1000*3600);
  Fs.appendFile(`./source/reminder/${reminderID._idleStart}.txt`,content, function (err){if (err) throw err;});
  msg.reply(`Reminder setted,I will remind you in ${msgar[1]} hour${BiggerThanOne}, your ID is ${reminderID._idleStart}`);
  }

module.exports.help={name:"rem"}

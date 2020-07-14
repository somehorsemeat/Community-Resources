const Discord =require("discord.js");

function sleep(sleepTime){for(var start = + new Date ;+ new Date - start<=sleepTime;){};}

module.exports.run= async(Bot ,msg, args)=>
{
  let msgar = msg.content.split(" ");
  if(!msgar[1])return msg.reply("Please type in the question.");
  if(!msgar[2])return msg.reply("Please type in at leat two, less than ten options.");
  if(!msgar[3])return msg.reply("Please type in at leat two, less than ten options.");
  if(msgar[11])return msg.reply("Sorry,the options are too much");

  const utf=['\u0030\u20E3','\u0031\u20E3','\u0032\u20E3','\u0033\u20E3','\u0034\u20E3','\u0035\u20E3','\u0036\u20E3','\u0037\u20E3','\u0038\u20E3','\u0039\u20E3']
  var rly=`-- [ ${msg.author.username} ] are asking for a vot --\n:red_circle:question:${msgar[1]} ?\n\n:blue_circle:options:\n`;

  for(i=1;i<(msgar.length-1);i++)if(msgar[i+1])rly+=('  '+utf[i]+':'+msgar[i+1]+'\n');

  msg.channel.send(rly)
  .then(msg=>
    {
      for(i=1;i<(msgar.length-1);i++)msg.react(utf[i]);
      sleep(25);
    })}

module.exports.help={name:"vote"}

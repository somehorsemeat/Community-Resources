const Discord =require("discord.js");
const Fs =require("fs");

module.exports.run= async(Bot ,msg, args)=>
{
  let msgar = msg.content.split(" ");
  if(msgar[1]=='pd'||msgar[1]=='rs')var data =Fs.readFileSync(`./source/${msgar[1]}.json`,"utf-8");
  var words=JSON.parse(data);
  data =JSON.stringify(words);

  let difppl = data.split("<");

  for (var i = 1;i<difppl.length;i++){
    difppl[i]=difppl[i].replace("\":\""," ");

    msg.channel.send(difppl[i]);}
}

module.exports.help={name:"list"}

const Discord =require("discord.js");
const Fs =require("fs");

module.exports.run= async(Bot ,msg, args)=>
{
  var data =Fs.readFileSync("./source/rs.json","utf-8");
  var words=JSON.parse(data);
  data =JSON.stringify(words);

  let difppl = data.split("name");

  for (var i = 1;i<difppl.length;i++){
    difppl[i]=difppl[i].replace("\":\""," ");

    msg.channel.send(difppl[i])}
}

module.exports.help={name:"list"}

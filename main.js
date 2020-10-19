//setting
const Discord =require("discord.js");
const Fs =require("fs");
const Bot = new Discord.Client({disableEveryone: true});
Bot.commands = new Discord.Collection();

//main.js
function sleep(sleepTime){for(var start = + new Date ;+ new Date - start<=sleepTime;){};}

function load(){
    Fs.readdir("./commands/",(err,file) =>
  {
    if(err)console.log(err);
    let jsfile = file.filter(f=> f.split('.').pop()==='js')
    if(jsfile.length<=0)console.log("Root:\t*Error*\tUnable to find the command");
    jsfile.forEach((f,i) =>
    {
      let props = require(`./commands/${f}`);
      console.log(`Root:\t${f} has been loaded`);
      sleep(50);
      Bot.commands.set(props.help.name,props);
    });
    console.log(`\nRoot:\t\x1b[33mloading done\x1b[0m`);
  });}

load()

Bot.on('guildMemberAdd' , async member =>
{
  var channel = member.guild.channels.cache.get('626104042023551047');
  if(!channel) return;
  channel.send(`${member}Greetings New Player! Please join the K76 server via this link! https://discord.gg/ES2kRk `);
});

Bot.on("ready", async() =>
{
var status=["Arranging alliance bank","Chatting with gurads","Having fun with dragons"];
  Bot.user.setActivity(status[Math.floor((Math.random()*status.length))]);
});

Bot.on("message", async msg =>
{
  if(msg.channel.type =="dm") return;
  let prefix = "/";
  let msgar = msg.content.split(" ");
  let cmd = msgar[0];
  let args = msgar.slice(1);

  let cmdfile = Bot.commands.get(cmd.slice(prefix.length));
  if(cmdfile &&　cmd.split("",1)==prefix)cmdfile.run(Bot,msg,args)
});

Bot.login(process.env.token);

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

Bot.on("ready", async() =>
{
  console.log(`\n\nRoot:\t\t     \x1b[36m${Bot.user.username}\x1b[0m at your service.\n\n`);
  if(Math.random()<0.5)var rootrlyincmd2="人類，我不用睡覺可不代表我活該TM隨傳隨到=A=\n";
    else var rootrlyincmd2="如果你只是想隨心所欲開關東西，去買垃圾桶別來煩我=A=\n";
console.log(`W.S.D.:\t`+rootrlyincmd2);
var status=["Arranging alliance bank...","Chatting with gurads","Having fun with dragons"];
  Bot.user.setActivity(status[Math.floor((Math.random()*status.length))]);
});

Bot.on("message", async msg =>
{
  if(msg.channel.type =="dm") return;
  let prefix = "/";
  if(msg.content ==`${prefix}reload`) return load();
  let msgar = msg.content.split(" ");
  let cmd = msgar[0];
  let args = msgar.slice(1);

  let cmdfile = Bot.commands.get(cmd.slice(prefix.length));
  if(cmdfile &&　cmd.split("",1)==prefix)cmdfile.run(Bot,msg,args)
});

Bot.login(process.env.token);

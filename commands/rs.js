const Discord =require("discord.js");
const Fs =require("fs");

module.exports.run= async(Bot ,msg, args)=>{

  var data =Fs.readFileSync("./source/rs.json","utf-8");
  var words=JSON.parse(data)
  let ppl=msg.author;
  if(!words[ppl])words[ppl]={name:`${msg.author.username}`,acc:`${ppl.id}`,grain:0,wood:0,stone:0,iron:0,gold:0,tot:0};
  let msgar = msg.content.split(" ");

  var i;
  for (i=1;i<6;i++)if(msgar[i]/1!=msgar[i])msgar[i]=0;
  var gr=msgar[1],wo=msgar[2],st=msgar[3],ir=msgar[4],go=msgar[5];

  words[ppl].grain= Number(words[ppl].grain)+Number(gr);
  words[ppl].wood= Number(words[ppl].wood)+Number(wo);
  words[ppl].stone= Number(words[ppl].stone)+Number(st);
  words[ppl].iron= Number(words[ppl].iron)+Number(ir);
  words[ppl].gold= Number(words[ppl].gold)+Number(go);
  words[ppl].tot= Number(words[ppl].tot)+Number(gr)+Number(wo)+Number(st)+Number(ir)+Number(go);

  var data =JSON.stringify(words,null,2);
  Fs.writeFile("./source/rs.json",data,(err)=>{if(err)console.log(err);});

  msg.reply(`${gr}k of Grain,${wo}k of Wood,${st}k of Stone,${ir}k of Iron and ${go}k of Gold has been successfully recorded under account <${ppl.id}>`);
  var info = new Discord.MessageEmbed()
  .setTitle('Contribution Balance')
  .addField('Account',ppl.id,true)
  .addField('Name',msg.author.username,true)
  .addField('Contributed Grain',words[ppl].grain+"k",true)
  .addField('Contributed Wood',words[ppl].wood+"k",true)
  .addField('Contributed Stone',words[ppl].stone+"k",true)
  .addField('Contributed Iron',words[ppl].iron+"k",true)
  .addField('Contributed Gold',words[ppl].gold+"k",true)
  .addField('Contributed in total',words[ppl].tot+"k",true)
  .setColor(0x00FF)
  .setTimestamp()
  .setFooter("Thank for your kindly donation")
  msg.channel.send(info);
}
module.exports.help={name:"rs"}

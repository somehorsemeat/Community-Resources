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

  words[ppl].grain= Number(words[ppl].grain)+rss[0];
  words[ppl].wood= Number(words[ppl].wood)+rss[1];
  words[ppl].stone= Number(words[ppl].stone)+rss[2];
  words[ppl].iron= Number(words[ppl].iron)+rss[3];
  words[ppl].gold= Number(words[ppl].gold)+rss[4];
  words[ppl].tot= Number(words[ppl].tot)+rss[5];

  var data =JSON.stringify(words,null,2);
  Fs.writeFile("./source/rs.json",data,(err)=>{if(err)console.log(err);});

  switch (rss[5]) {
    case >1250000:
      rss[6]=0xff0000;
      break;
    case >500000:
      rss[6]=0xffd700;
      break;
    case >125000:
      rss[6]=0xB981C4;
      break;
    case >500000:
      rss[6]=0x67709D;
      break;
    case >125000:
      rss[6]=0x8CC481;
      break;
    case >50000:
      rss[6]=0x424242;
      break;
    default:
      rss[6]=0xA3A3A3;;
  }

  for(i=0;i<6;i++){
  if(Math.floor(rss[i]/1000000)>0)rss[i]/=1000000,rss[i][1]="b";
  else if (Math.floor(rss[i]/1000)>0)rss[i]/=1000,rss[i][1]="m";
  else rss[i][1]="k";
  }

  msg.reply(`${rss[0]}${rss[0][1]} of Grain,${rss[1]}${rss[1][1]} of Wood,${rss[2]}${rss[2][1]} of Stone,${rss[3]}${rss[3][1]} of Iron and ${rss[4]}${rss[4][1]}k of Gold has been successfully recorded under account <${ppl.id}>`);
  var info = new Discord.MessageEmbed()
  .setTitle('Contribution Balance')
  .addField('Account',ppl.id,true)
  .addField('Name',msg.author.username,true)
  .addField('Contributed Grain',rss[0]+rss[0][1],true)
  .addField('Contributed Wood',rss[1]+rss[1][1],true)
  .addField('Contributed Stone',rss[2]+rss[2][1],true)
  .addField('Contributed Iron',rss[3]+rss[3][1],true)
  .addField('Contributed Gold',rss[4]+rss[4][1],true)
  .addField('Contributed in total',rss[5]+rss[5][1],true)
  .setColor(rss[6])
  .setTimestamp()
  .setFooter("Thank for your kindly donation")
  msg.channel.send(info);
}
module.exports.help={name:"rs"}

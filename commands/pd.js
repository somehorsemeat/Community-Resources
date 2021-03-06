const Discord =require("discord.js");
const Fs =require("fs");

module.exports.run= async(Bot ,msg, args)=>{

  var data =Fs.readFileSync("./source/pd.json","utf-8");
  var words=JSON.parse(data);
  let ppl=msg.author;
  if(!words[ppl])words[ppl]={name:`${msg.author.username}`,acc:`${ppl.id}`,grain:0,wood:0,stone:0,iron:0,gold:0,tot:0};
  let msgar = msg.content.split(" ");

  var i,j;
  for (i=1;i<6;i++)if(msgar[i]/1!=msgar[i])msgar[i]=0;
  var rss=[Number(msgar[1]),Number(msgar[2]),Number(msgar[3]),Number(msgar[4]),Number(msgar[5]),Number(msgar[1])+Number(msgar[2])+Number(msgar[3])+Number(msgar[4])+Number(msgar[5])];
  var unit=[];
  var unco=['k','k','k','k','k','k'];

  words[ppl].grain= Number(words[ppl].grain)+rss[0];
  words[ppl].wood= Number(words[ppl].wood)+rss[1];
  words[ppl].stone= Number(words[ppl].stone)+rss[2];
  words[ppl].iron= Number(words[ppl].iron)+rss[3];
  words[ppl].gold= Number(words[ppl].gold)+rss[4];
  words[ppl].tot= Number(words[ppl].tot)+rss[5];

  var data =JSON.stringify(words,null,2);
  Fs.writeFileSync("./source/pd.json",data,(err)=>{if(err)console.log(err);});

  for(i=0;i<6;i++){
  if(rss[i]<1000)unit[i]="k";
  else if (rss[i]<1000000)unit[i]="m",rss[i]/=1000;
  else unit[i]="b",rss[i]/=1000000;
  }

  for(i=1000;i<1002;i++){
  if(i==1000)j='m';
  else j='b';
  if(words[ppl].grain>=i)unco[0]=j,words[ppl].grain/=i;
  if(words[ppl].wood>=i)unco[1]=j,words[ppl].wood/=i;
  if(words[ppl].stone>=i)unco[2]=j,words[ppl].stone/=i;
  if(words[ppl].iron>=i)unco[3]=j,words[ppl].iron/=i;
  if(words[ppl].gold>=i)unco[4]=j,words[ppl].gold/=i;
  if(words[ppl].tot>=i)unco[5]=j,words[ppl].tot/=i;}

  msg.reply(`${rss[0]}${unit[0]} of Grain,${rss[1]}${unit[1]} of Wood,${rss[2]}${unit[2]} of Stone,${rss[3]}${unit[3]} of Iron and ${rss[4]}${unit[4]} of Gold has been successfully recorded under account <${ppl.id}>`);
  var info = new Discord.MessageEmbed()
  .setTitle('Deposit Balance')
  .addField('Account',ppl.id,true)
  .addField('Name',msg.author.username,true)
  .addField('Saved Grain',String(words[ppl].grain).concat(unco[0]),true)
  .addField('Saved Wood',String(words[ppl].wood).concat(unco[1]),true)
  .addField('Saved Stone',String(words[ppl].stone).concat(unco[2]),true)
  .addField('Saved Iron',String(words[ppl].iron).concat(unco[3]),true)
  .addField('Saved Gold',String(words[ppl].gold).concat(unco[4]),true)
  .addField('Saved in total',String(words[ppl].tot).concat(unco[5]),true)
  .setColor(0xFFFFFF)
  .setTimestamp()
  msg.channel.send(info);
}
module.exports.help={name:"pd"}

const Discord =require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run= async(Bot ,msg, args)=>
{
      const vc = msg.member.voice.channel;
      if (!vc) return msg.reply("不進語音是要給誰聽啦淦");
      try { var connection = await vc.join(); }
      catch(error) { return msg.reply("給網址啦淦#"); }
      var cc =msg.content.split(" ");
      if(!cc[1])msg.reply("給網址啦淦#");
      else
      {
        const dp=connection.play(ytdl(cc[1]))
          .on("end",() =>
          {
            console.log("Root:\tsong ended");
            msg.member.voice.channel.leave();
          })
          .on("error",() =>msg.reply("給網址啦淦#"));
        dp.setVolumeLogarithmic(1/5);
      }
}
module.exports.help={name:"play"}

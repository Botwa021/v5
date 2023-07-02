var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .ytcomment botak kontl|bang syaii'
  m.reply('_Proses..._')
  var tio = `https://api.zahwazein.xyz/creator/ytcomment?url=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg&text=${response[0]}&text2=${response[1]}i&apikey=zenzkey_669bfd8d39`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['ytcomment'];
handler.tags = ['maker'];
module.exports = handler;
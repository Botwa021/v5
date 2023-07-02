var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .carbon bang syaii'
  m.reply('_Proses..._')
  var tio = `https://api-xcoders.site/api/maker/carbon-text?text=${response[0]}&apikey=RBdTSxRDtH7DOOi`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['carbon'];
handler.tags = ['maker'];
module.exports = handler;
var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .quotesmaker nama|kata kata nya masseh'
  m.reply('_Proses..._')
  var tio = `https://api-xcoders.site/api/ephoto/quotestatus?text=${response[0]}&text2=${response[1]}&apikey=RBdTSxRDtH7DOOi`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['quotesmaker'];
handler.tags = ['maker'];
module.exports = handler;
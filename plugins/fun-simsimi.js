let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {
  let res = await fetch('https://xzn.wtf/api/simi?&text=${encodeURlComponent(text)}&apikey=Akiraabotz')
  let json = await res.json()
  if (json.result) m.reply(json.result)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler
let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let tio = `
*_STATUS BOT ONLINE✅_*
    `.trim()
conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: tio, 
                contextInfo: {
                     externalAdReply: {
                        title: 'ketik #menu untuk memulai ',
                         mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/d6202dfdc68e72b669631.jpg',
                        sourceUrl: 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97'
                    }
                }, mentions: [m.sender]
}}, {})
}
handler.tags = ['main']
handler.customPrefix = /^(test|tes)$/i 
handler.command = new RegExp
handler.limit = false

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}
let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d204c78e7f970e3ce8d1d.jpg'
let caption = `*Akiraa-Md* shop bot

List paket:
- Premium 
- Moderator 
- Sewa bot

• List Premium✅:
•10,000rp; = 7 hari
•40,000rp; = 30 hari
•60,000r; = permanent

keuntungan:
-akses Banyak fitur bot✅
-dapat memasukkan bot ke dalam group✅

• List moderator: 
•40,000; = 7 hari 
•70,000; = 30 hari
•90,000; = permanent

keuntungan:
- akses fitur moderator ✅
- ban✅
- unban✅
- add limit✅
- add exp✅
- add money✅
- add to Group✅

•sewa bot:
-7,000rp; = 7 hari
-30,000rp; = 30 hari
 
note: Bot akan keluar dari group jika masa sewa telah habis‼️



Ingin membeli? Chat ⤵️
https://wa.me/6283842839555
Selain itu *Clone* !!

• Payment:
➡️ Dana, Gopay, Ovo

Shop bot By Bang syaii"`

conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: caption, 
                contextInfo: {
                     externalAdReply: {
                        title: 'shop bot nurah cuman di Akiraabotz:v',
                        mediaType: 1,
                        previewType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/d204c78e7f970e3ce8d1d.jpg',
                        sourceUrl: 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97'
                    }
                }, mentions: [m.sender]
}}, {})

       }
       
handler.help = ['shopbot']
handler.command = /^(shopbot)/i
handler.tags = ['main']
module.exports = handler
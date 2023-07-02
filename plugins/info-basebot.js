let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} 
[Download sc Akiraabotz]

_*•Script Akiraabotz v1:*_
(https://drive.google.com/file/d/11rsCJyhPhJi_psqd304dwL0G7XnH7iT0/view?usp=drivesdk)

_*•script Akiraabotzv2*_
(https://drive.google.com/file/d/13RqMaOnuPTddL_FX5LZUs31gV6K8ZKzr/view?usp=drivesdk)

_*•script Akiraabotz v3:*_
(https://drive.google.com/file/d/15Wp0EDocrNt4dmBXKvyCHbS77_u81-AT/view?usp=drivesdk)

download File menggunakan .gdrive

Jika ingin bertanya tanya langsung chat ke no owner dibawah
Wa.me/6283842839555

`
m.reply(esce)
}
handler.command = /^(Akiraa)$/i

module.exports = handler
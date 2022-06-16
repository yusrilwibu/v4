let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*â”€â”€â”€â”€â”€Œ DONATE ã€ â”€â”€â”€*
Hai ðŸ‘‹
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
â”Œã€” Donasi â€¢ Emoney ã€•
â”œðŸ“ŒIndoosat: 085822347348
â””â”€â”€â”€â”€
Berapapun donasi kalian akan sangat berarti ðŸ‘
Arigatou!
Contact person Owner:
wa.me/6285822347348 (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler

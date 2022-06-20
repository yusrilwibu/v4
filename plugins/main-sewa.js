let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `HALLO KAK 👋
━━━[  *SEWABOT* ]━━
━━━━━━━━━━━━━━━━━━━━
━━━[ *HARGA* ]━━
• *1 MINGGU 1 GROUP* 5.000
• *1 BULAN 1 GROUP:* 10.000
• *PERMANEN 1 GROUP:* 20.000
🤖
┗━━━━━━━━━━━━━━━━━━
┏━━━[ *PAYMENT*  ]━━
• *DANA:* ${dana}
• *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━
Jika berminat untuk sewa bot hubungi nomor di bawah!!

*jangan lupa donasi kak*
Terimakasih yang sudah mau donasi

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'DONASI', '.donasi', 'PEMILIK BOT', '.owner', 'MENU', '.menu', m) 
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewabot|arullsewa|sewa)$/i

module.exports = handler

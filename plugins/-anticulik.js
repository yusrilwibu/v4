let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 
• *Axis:* 6283843192208
• *Indosat:* 6285822347348

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/sahrulwara_____

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285822347348', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler

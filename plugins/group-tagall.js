let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *T̳A̳G̳A̳L̳L̳ ̳M̳E̳M̳* ⋘
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `\nA͓̽r͓̽u͓̽l͓̽l͓̽O͓̽f͓̽c͓̽`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler

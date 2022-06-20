let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m)
}
await delay(100)

  return conn.sendMessage(m.chat, { text: `Hay kak @${await m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, mentions: [m.sender] }, { quoted: conn.p[id][0] })

  await delay(100)

  return delete conn.p[id]

}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler

let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/bd6914e065dbd698e72d7.jpg', m, { packname: "sticker by", author: "ArullOfc" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler

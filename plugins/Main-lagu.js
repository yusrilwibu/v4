let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Partyan Dulu ygy*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendFile(m.chat, 'https://file.io/1BZKHiUuKXgL', hyzer, { packname: "sticker by", author: "ArullOfc" })
}

handler.customPrefix = /^(Tes)$/i
handler.command = new RegExp

module.exports = handler

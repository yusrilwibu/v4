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
  "text": '*Awokwok*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/7454e89d50d25fe7a6206.png', hyzer, { packname: "sticker by", author: "ArullOfc" })
}

handler.customPrefix = /^(Hi Beban 👋|Anjay Beban Group)$/i
handler.command = new RegExp

module.exports = handler

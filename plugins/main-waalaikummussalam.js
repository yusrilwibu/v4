let handler = async (m, {conn}) => {
let anu = '\nوَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n\n_waalaikumussalam wr.wb._\n\n🍂Menjawab salam adalah wajib. Apabila ada seseorang melewati sekumpulan kaum Muslimin, kemudian dia memberi salam kepada mereka, namun mereka tidak mau menjawabnya, maka ruh al-quds (ruh yang suci) akan dicabut dari diri mereka, dan yang menjawab salam orang tersebut adalah malaikat'
m.reply(anu)  
}
handler.customPrefix = /^ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم$/i // ketik bot (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
 
 • Renovasi oleh ziyo
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '6282111238631'
global.nomerowner = ["6282111238631"]
// Apikey ======//
global.skizo = 'FalX'
//watermark ====//
global.packname = 'Di Buat Oleh'
global.author = 'Skyzenn -MD'
global.title = '⟡S Y Z E N N • M U L T I • D E V I C E⟡'
global.body = 'x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ'
global.filename = 'Veemon MD - FDOC'
global.botname = 'Rzxyy - Md'
global.shinka = 'Veemon Jogress Haidar !'
global.idsaluran = 'https://whatsapp.com/channel/0029VakJ3ZDJ93wd4HumI60u'
global.namesaluran = '- Skyzenn • Chanels -'
global.sourceurl = 'https://chat.whatsapp.com/HZyMShYMQsIKTwFjp8Xnsh'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = '𝐇𝐚𝐢𝐝𝐚𝐫𝐗𝐌𝐚𝐡𝐢𝐫𝐮'
// cpanel ======//
global.domain = 'https://center.zaaoffc.digitalserver.my.id'
global.apikey2 = 'ptla_ovG2AkH9oAcHVf6iy4W5bsN7VQ7Hbxwpk2LjVecndRB' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_2Kp2aFe56IXfQ4paiB2xu3kPBYo7P5gPs5MM3KRvVHQ' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

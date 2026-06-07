module.exports = {
 config: {
 name: "fork",
 version: "1.6",
 author: "〲MAMUNツ࿐",
 countDown: 2,
 role: 0,
 shortDescription: "Official GitHub Fork",
 category: "utils",
 guide: {
 en: "{pn} | fork"
 }
 },

 langs: {
 en: {
 current: `
 ✦━━━━━━━━━✦
👑 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗙𝗢𝗥𝗞 👑
✦━━━━━━━━━✦
👑 𝗢𝗪𝗡𝗘𝗥 ➜ 𝐀𝐒𝐇𝐈𝐊
🤖 𝗕𝗢𝗧 ➜ 𝗚𝗢𝗔𝗧 𝗕𝗢𝗧 𝗩𝟮
━━━━━━━━━━━
🌐 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗚𝗜𝗧𝗛𝗨𝗕
🔗  https://github.com/mdquotex568-pixel/Ashik-goat.git
━━━━━━━━━━━
🎥 𝗩𝗜𝗗𝗘𝗢 𝗧𝗨𝗧𝗢𝗥𝗜𝗔𝗟 📺 https://youtu.be/zp61jH98vSQ?si=vbYqOqGOUQye9Qhu
━━━━━━━━━━
𝘁𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗰𝗵𝗮𝗻𝗻𝗲𝗹: https://t.me/ashikgod

Massanger group:https://m.me/j/AbZIF6GWRSBTHmQt/?send_source=gc%3Acopy_invite_link_c
━━━━━━━━━━
𝐀𝐒𝐇𝐈𝐊 𝗚𝗢𝗔𝗧 𝗕𝗢𝗧 𝗩𝟮
✦━━━━━━━━━✦
`
 }
 },

 onStart: async function ({ message, getLang }) {
 const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
 return message.reply(getLang("current", link));
 },

 onChat: async function ({ message, event, getLang }) {
 const body = event.body?.trim().toLowerCase();

 if (body === "fork") {
 const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
 return message.reply(getLang("current", link));
 }
 }
};

module.exports = {
  config: {
    name: "fork",
    version: "1.4",
    author: "〲MAMUNツ࿐ T.T　o.O",
    countDown: 2,
    role: 0,
    shortDescription: "Show official fork link with owner info",
    category: "utils",
    guide: {
      en: "Type 'fork' to see the link and owner."
    }
  },

  langs: {
    en: {
      current: "𝚝𝚘𝚍𝚎𝚛 𝚔𝚗 𝚍𝚎𝚋𝚘 𝚏𝚘𝚛𝚔╰───────『 ✨ 』───────╯"
    }
  },

  onStart: async function ({ message, getLang }) {
    const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
    return message.reply(getLang("current", link));
  },

  onChat: async function ({ message, getLang, event }) {
    if (event.body && event.body.toLowerCase() === "fork") {
      const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
      return message.reply(getLang("current", link));
    }
  }
};

module.exports = {
  config: {
    name: "ban",
    version: "1.0",
    author: "ashik",
    role: 2,
    category: "admin"
  },

  onStart: async function ({ event, message, args }) {

    if (!global.banUsers) global.banUsers = new Set();

    const type = (args[0] || "").toLowerCase();

    // ---------------- BAN ADD ----------------
    if (type === "add" || type === "ban") {

      const uid = Object.keys(event.mentions || {})[0];

      if (!uid)
        return message.reply("❌ Please mention a user to ban");

      global.banUsers.add(uid);

      return message.reply(`🚫 User BANNED\nUID: ${uid}`);
    }

    // ---------------- UNBAN ----------------
    if (type === "remove" || type === "unban") {

      const uid = Object.keys(event.mentions || {})[0];

      if (!uid)
        return message.reply("❌ Please mention a user to unban");

      global.banUsers.delete(uid);

      return message.reply(`✅ User UNBANNED\nUID: ${uid}`);
    }

    // ---------------- BAN LIST ----------------
    if (type === "list") {

      const list = [...global.banUsers];

      if (list.length === 0)
        return message.reply("✅ No banned users");

      let msg = "🚫 BAN LIST 🚫\n\n";

      list.forEach((u, i) => {
        msg += `${i + 1}. ${u}\n`;
      });

      return message.reply(msg);
    }

    // ---------------- HELP ----------------
    return message.reply(
`📌 BAN SYSTEM COMMAND

/ban add @user
/ban remove @user
/ban list`
    );
  }
};

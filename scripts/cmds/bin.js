const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "pastebin",
    aliases: ["bin"],
    version: "2.0",
    author: "NeoKEX",
    countDown: 5,
    role: 0,
    shortDescription: "Upload command source code",
    longDescription: "Upload a command file to pastebin service",
    category: "utility",
    guide: "{pn} <commandName>"
  },

  onStart: async function ({ args, message }) {
    try {
      const cmdName = args[0];

      if (!cmdName) {
        return message.reply("❌ | Usage: /bin <commandName>");
      }

      const cmdPath = path.join(__dirname, `${cmdName}.js`);

      if (!fs.existsSync(cmdPath)) {
        const files = fs.readdirSync(__dirname)
          .filter(f => f.endsWith(".js"))
          .join("\n");

        return message.reply(
          `❌ File not found!\n\nLooking for:\n${cmdPath}\n\nAvailable files:\n${files}`
        );
      }

      const code = fs.readFileSync(cmdPath, "utf8");

      if (!code || code.trim().length === 0) {
        return message.reply("❌ | File is empty.");
      }

      const apiUrl = Buffer.from(
        "aHR0cHM6Ly9hcnlhbmFwaS51cC5yYWlsd2F5LmFwcC9hcGkvcGFzdGViaW4=",
        "base64"
      ).toString("utf8");

      const response = await axios.get(apiUrl, {
        params: {
          content: code,
          title: `${cmdName}.js`
        },
        timeout: 30000
      });

      if (
        response.data &&
        response.data.status === 0 &&
        response.data.raw
      ) {
        return message.reply(
          `✅ Upload Successful!\n\n🔗 ${response.data.raw}`
        );
      }

      return message.reply(
        `❌ Upload failed.\n\nResponse:\n${JSON.stringify(response.data, null, 2)}`
      );

    } catch (err) {
      return message.reply(
        `❌ Error:\n${err.message}`
      );
    }
  }
};

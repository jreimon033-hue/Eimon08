const axios = require("axios");

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = {
  config: {
    name: "searchimg",
    version: "4.0",
    author: "ashik",
    countDown: 5,
    role: 0,
    description: "Bing HD image search with shuffle mode",
    category: "image",
    guide: {
      en: "{pn} <query>"
    }
  },

  onStart: async function ({ message, args }) {

    if (!args.length) {
      return message.reply(
`╭──── IMAGE SEARCH ────╮

Usage:
/searchimg cat
/searchimg anime girl
/searchimg freefire

╰────────────────────╯`
      );
    }

    const query = encodeURIComponent(args.join(" "));

    try {

      const url = `https://www.bing.com/images/search?q=${query}`;

      const res = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });

      const html = res.data;

      const regex = /murl&quot;:&quot;(https:\/\/[^&]+)&quot;/g;

      let images = [];
      let match;

      while ((match = regex.exec(html)) !== null) {
        images.push(match[1]);
      }

      if (!images.length) {
        return message.reply("❌ No images found!");
      }

      // 🔥 shuffle mode
      images = shuffleArray(images);

      images = images.slice(0, 6);

      let msg = `╭──── SHUFFLE RESULTS ────╮\n🔎 ${args.join(" ")}\n💡 Save any image you like\n╰────────────────────────╯`;

      // 👉 send images ONE BY ONE (save friendly)
      for (let i = 0; i < images.length; i++) {
        try {
          const img = await axios.get(images[i], {
            responseType: "arraybuffer",
            timeout: 10000
          });

          await message.reply({
            body: `🖼️ Image ${i + 1}`,
            attachment: img.data
          });

        } catch (e) {}
      }

      return;

    } catch (err) {
      console.log(err);
      return message.reply("❌ Error fetching images!");
    }
  }
};

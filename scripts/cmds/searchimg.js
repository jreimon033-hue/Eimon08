const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "searchimg",
  version: "1.0",
  hasPermssion: 0,
  credits: "ashik",
  description: "Search 6 images from Pexels",
  commandCategory: "media",
  usages: "/searchimg <query>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const query = args.join(" ");

  if (!query) {
    return api.sendMessage(
      "🖼️ | Usage: /searchimg <query>",
      event.threadID,
      event.messageID
    );
  }

  const API_KEY = "xbqnRtIRv2s5IcTSrC493fmgszwfa5cEOc3dowZjLfG1eueAkm14cNXZ";

  try {
    const res = await axios.get(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=6`,
      {
        headers: {
          Authorization: API_KEY
        }
      }
    );

    if (!res.data.photos || res.data.photos.length === 0) {
      return api.sendMessage(
        `❌ | No images found for: ${query}`,
        event.threadID,
        event.messageID
      );
    }

    const attachments = [];

    for (let i = 0; i < Math.min(6, res.data.photos.length); i++) {
      const imgUrl = res.data.photos[i].src.large;
      const imgPath = path.join(__dirname, `cache_searchimg_${i}.jpg`);

      const img = await axios({
        url: imgUrl,
        method: "GET",
        responseType: "stream"
      });

      await new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(imgPath);
        img.data.pipe(writer);
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      attachments.push(fs.createReadStream(imgPath));
    }

    api.sendMessage(
      {
        body: `🔎 Results for: ${query}\n🖼️ Found ${attachments.length} images`,
        attachment: attachments
      },
      event.threadID,
      () => {
        for (let i = 0; i < attachments.length; i++) {
          const imgPath = path.join(__dirname, `cache_searchimg_${i}.jpg`);
          if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
        }
      },
      event.messageID
    );

  } catch (err) {
    console.error(err);
    api.sendMessage(
      "❌ | Failed to fetch images. Check your Pexels API key.",
      event.threadID,
      event.messageID
    );
  }
};

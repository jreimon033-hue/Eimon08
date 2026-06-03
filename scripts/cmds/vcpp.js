const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { createCanvas, loadImage } = require("canvas");

module.exports = {
  config: {
    name: "vcpp",
    version: "1.0",
    author: "ashik",
    countDown: 5,
    role: 0,
    description: "VCPP Profile Frame Generator",
    category: "image",
    guide: {
      en: "Reply a photo\n/vcpp yellow XAIKO , SIYAM , KO KING TOP VOICE G"
    }
  },

  onStart: async function ({ api, event, args }) {
    const { threadID, messageID, messageReply } = event;

    if (!messageReply || !messageReply.attachments?.[0]) {
      return api.sendMessage("❌ Please reply to a photo!", threadID, messageID);
    }

    if (!args.length) {
      return api.sendMessage("❌ Wrong format! Use /vcppr for help", threadID, messageID);
    }

    try {
      const color = args[0];
      const data = args.slice(1).join(" ");

      const [upper, down, gc] = data.split(",").map(x => x.trim());

      const imgURL = messageReply.attachments[0].url;
      const imgData = await axios.get(imgURL, { responseType: "arraybuffer" });
      const baseImg = await loadImage(imgData.data);

      const canvas = createCanvas(1000, 1000);
      const ctx = canvas.getContext("2d");

      // BACKGROUND
      ctx.fillStyle = color || "#000";
      ctx.fillRect(0, 0, 1000, 1000);

      // CIRCLE CLIP
      ctx.save();
      ctx.beginPath();
      ctx.arc(500, 450, 250, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(baseImg, 250, 200, 500, 500);
      ctx.restore();

      // BORDER
      ctx.strokeStyle = "#00ffff";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(500, 450, 250, 0, Math.PI * 2);
      ctx.stroke();

      // TEXT TOP
      ctx.fillStyle = "#fff";
      ctx.font = "bold 50px Sans";
      ctx.textAlign = "center";
      ctx.fillText((upper || "NAME").toUpperCase(), 500, 100);

      // TEXT DOWN
      ctx.font = "bold 40px Sans";
      ctx.fillText((down || "").toUpperCase(), 500, 900);

      // GC NAME
      ctx.font = "bold 30px Sans";
      ctx.fillText((gc || "").toUpperCase(), 500, 820);

      const buffer = canvas.toBuffer("image/png");

      const filePath = path.join(__dirname, "vcpp.png");
      fs.writeFileSync(filePath, buffer);

      return api.sendMessage(
        {
          body: "✅ VCPP Created Successfully!",
          attachment: fs.createReadStream(filePath)
        },
        threadID,
        () => fs.unlinkSync(filePath),
        messageID
      );

    } catch (e) {
      console.log(e);
      return api.sendMessage("❌ Error generating image!", threadID, messageID);
    }
  }
};

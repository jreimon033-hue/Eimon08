const axios = require("axios");

module.exports.config = {
  name: "4k",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ashik",
  description: "Image enhance 4K",
  commandCategory: "image",
  usages: "reply photo with /4k",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  try {
    const reply = event.messageReply;

    if (!reply || !reply.attachments || reply.attachments.length === 0)
      return api.sendMessage("❌ Please reply to an image!", event.threadID);

    const imgUrl = reply.attachments[0].url;

    api.sendMessage("⏳ Enhancing image to 4K...", event.threadID);

    // FREE API CALL (upscale)
    const res = await axios.post("https://api.wavespeed.ai/enhance", {
      image: imgUrl,
      scale: 4
    });

    const enhanced = res.data.result;

    return api.sendMessage(
      { attachment: await global.utils.getStreamFromURL(enhanced) },
      event.threadID
    );

  } catch (e) {
    console.log(e);
    return api.sendMessage("❌ Enhance failed!", event.threadID);
  }
};

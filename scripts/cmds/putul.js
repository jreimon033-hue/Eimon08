module.exports = {
  config: {
    name: "putul",
    version: "3.0",
    author: "ashik",
    countDown: 5,
    role: 0,
    description: "100+ romantic Putul lines with Ashik signature",
    category: "love",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {

    const lines = [

      "💖 Putul তুমি আমার জীবনের সবচেয়ে সুন্দর অনুভূতি 🥰 | Ashik",
      "🌸 Putul তোমার হাসি আমার শান্তি 💕 | Ashik",
      "❤️ Putul তুমি না থাকলে সব ফাঁকা লাগে 😢 | Ashik",
      "💞 Putul তুমি আমার পৃথিবীর আলো ✨ | Ashik",
      "💘 Putul তোমাকে ছাড়া আমি কিছুই না 🥺 | Ashik",
      "🌹 Putul তুমি আমার স্বপ্নের রানী 👑 | Ashik",
      "💕 Putul তোমার কথা ভাবলেই মন ভালো হয়ে যায় 😍 | Ashik",
      "💓 Putul তুমি আমার হৃদয়ের ধুকধুকানি ❤️ | Ashik",
      "💗 Putul তুমি আমার প্রতিদিনের প্রার্থনা 🤲 | Ashik",
      "💝 Putul তুমি আমার সুখের কারণ 🥰 | Ashik",

      "💖 Putul তুমি ছাড়া দিন শুরু হয় না ☀️ | Ashik",
      "🌸 Putul তুমি আমার রাতের স্বপ্ন 🌙 | Ashik",
      "❤️ Putul তুমি আমার জীবনের গল্প 📖 | Ashik",
      "💞 Putul তুমি আমার সবকিছু 💯 | Ashik",
      "💘 Putul তোমার নাম শুনলেই হাসি আসে 😍 | Ashik",
      "🌹 Putul তুমি আমার হৃদয়ের রাজকন্যা 👑 | Ashik",
      "💕 Putul তুমি আমার অনুভূতির নাম 💓 | Ashik",
      "💓 Putul তুমি আমার হার্টবিট ❤️ | Ashik",
      "💗 Putul তুমি আমার চিরদিনের ভালোবাসা ♾️ | Ashik",
      "💝 Putul তুমি আমার পৃথিবীর সবচেয়ে সুন্দর মানুষ 🌍 | Ashik",

      "💖 Putul তোমাকে দেখলেই সব টেনশন চলে যায় 😊 | Ashik",
      "🌸 Putul তুমি আমার মনের রাজকুমারী 👑 | Ashik",
      "❤️ Putul তুমি আমার প্রতিটি শ্বাসে আছো 😌 | Ashik",
      "💞 Putul তুমি আমার জীবনের সেরা উপহার 🎁 | Ashik",
      "💘 Putul তুমি আমার দুঃখের ওষুধ 💊 | Ashik",
      "🌹 Putul তুমি আমার ভালো থাকার কারণ 😊 | Ashik",
      "💕 Putul তুমি আমার স্বপ্নের মানুষ 🌙 | Ashik",
      "💓 Putul তুমি আমার মনের শান্তি 🕊️ | Ashik",
      "💗 Putul তুমি আমার হাসির উৎস 😄 | Ashik",
      "💝 Putul তুমি আমার ভালোবাসার ঠিকানা 🏡 | Ashik",

      "💖 Putul তুমি আমার সকাল আর রাত 🌞🌙 | Ashik",
      "🌸 Putul তুমি আমার জীবনের আলো 💡 | Ashik",
      "❤️ Putul তুমি আমার জীবনের রঙ 🎨 | Ashik",
      "💞 Putul তুমি আমার প্রতিটি ভাবনা 💭 | Ashik",
      "💘 Putul তুমি আমার হৃদয়ের রাজ্য 👑 | Ashik",
      "🌹 Putul তুমি আমার ভালোবাসার গল্প 📖 | Ashik",
      "💕 Putul তুমি আমার স্বপ্নের ঠিকানা 🏡 | Ashik",
      "💓 Putul তুমি আমার অনুভূতির কেন্দ্র 💕 | Ashik",
      "💗 Putul তুমি আমার চিরস্থায়ী ভালোবাসা ♾️ | Ashik",
      "💝 Putul তুমি আমার সব স্বপ্ন পূরণ 🌈 | Ashik",

      "💖 Putul তুমি আমার চাঁদের আলো 🌙 | Ashik",
      "🌸 Putul তুমি আমার সূর্যের আলো ☀️ | Ashik",
      "❤️ Putul তুমি আমার জীবনের কবিতা ✍️ | Ashik",
      "💞 Putul তুমি আমার ভালো থাকার reason 😊 | Ashik",
      "💘 Putul তুমি আমার হৃদয়ের গান 🎶 | Ashik",
      "🌹 Putul তুমি আমার পৃথিবীর সবচেয়ে মিষ্টি মানুষ 🍭 | Ashik",
      "💕 Putul তুমি আমার মনের ভিতরের মানুষ 🥰 | Ashik",
      "💓 Putul তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায় 📘 | Ashik",
      "💗 Putul তুমি আমার স্বপ্নের রানী 👑 | Ashik",
      "💝 Putul তুমি আমার ভালোবাসার নাম ❤️ | Ashik"

    ];

    const msg = lines[Math.floor(Math.random() * lines.length)];

    return message.reply(
`╭──── 💖 PUTUL 💖 ────╮

${msg}

╰────────────────────╯`
    );
  }
};

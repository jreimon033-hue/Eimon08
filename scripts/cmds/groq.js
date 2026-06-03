const axios = require("axios");

module.exports = {
config: {
name: "gemini",
version: "1.0",
author: "ashik",
countDown: 5,
role: 0,
description: "AI Assistant powered by Gemini",
category: "ai",
guide: {
en: "{pn} <question>"
}
},

onStart: async function ({ message, args }) {

	if (!args.length) {
		return message.reply(

`╭─── GEMINI AI ───╮

Usage: /gemini <question>

Examples:
gemini Who is Elon Musk?
gemini What is JavaScript?
gemini Tell me about Bangladesh

╰────────────────╯`
);
}

	const prompt = args.join(" ");

	try {

		const apiKey = "AQ.Ab8RN6LCvMTLuFuAaiSwzKsNrBdCIUuPSLW1bLk4qoIIC5EsFg";

		const response = await axios.post(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
			{
				contents: [
					{
						parts: [
							{
								text: `You are a helpful AI assistant. Always reply in the same language as the user.\n\nUser: ${prompt}`
							}
						]
					}
				]
			}
		);

		const answer =
			response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
			"No response received.";

		return message.reply(

`╭─── GEMINI RESPONSE ───╮

${answer}

╰───────────────────────╯`
);

	} catch (error) {
		console.log(error.response?.data || error);

		return message.reply(

`❌ Request Failed

Possible Reasons:
• Invalid Gemini API Key
• Rate Limit Exceeded
• Network Issue
• Service Unavailable

Please try again later.`
);
}
}
};

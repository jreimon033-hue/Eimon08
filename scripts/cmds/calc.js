const axios = require("axios");

const GROQ_API_KEY = "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";

module.exports = {
	config: {
		name: "calc",
		version: "1.0",
		author: "ashik",
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "AI Calculator"
		},
		longDescription: {
			en: "Solve math with steps"
		},
		category: "utility",
		guide: {
			en: "/calc <math problem>"
		}
	},

	onStart: async function ({ message, args }) {
		const question = args.join(" ");

		if (!question) {
			return message.reply(
				"🧮 | Example:\n" +
				"/calc 2x + 5 = 15\n" +
				"/calc x² - 5x + 6 = 0\n" +
				"/calc What is the speed if a train travels 60km in 2 hours?"
			);
		}

		try {
			await message.reply("🧠 Solving...");

			const response = await axios.post(
				"https://api.groq.com/openai/v1/chat/completions",
				{
					model: "llama-3.3-70b-versatile",
					messages: [
						{
							role: "system",
							content: `
You are an expert mathematics teacher.

Rules:
- Solve step by step.
- Explain clearly.
- Show formulas if needed.
- Give final answer.
- Support Bangla and English.
- Use simple formatting.
`
						},
						{
							role: "user",
							content: question
						}
					],
					temperature: 0.2,
					max_tokens: 2000
				},
				{
					headers: {
						Authorization: `Bearer ${GROQ_API_KEY}`,
						"Content-Type": "application/json"
					}
				}
			);

			const answer =
				response.data.choices?.[0]?.message?.content ||
				"No answer found.";

			return message.reply(
				`🧮 CALCULATOR\n\n❓ Question:\n${question}\n\n${answer}`
			);

		} catch (err) {
			console.log(err.response?.data || err);

			return message.reply(
				"❌ Error:\n" +
				JSON.stringify(err.response?.data || err.message, null, 2)
			);
		}
	}
};

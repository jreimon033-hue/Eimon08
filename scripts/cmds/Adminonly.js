module.exports = {
	config: {
		name: "adminonly",
		version: "1.0",
		author: "ashik",
		countDown: 5,
		role: 2,
		shortDescription: "Toggle admin only mode",
		longDescription: "Enable or disable admin only mode for bot",
		category: "system",
		guide: {
			en: "{pn} on / off"
		}
	},

	onStart: async function ({ message, args, api, event }) {

		const config = global.GoatBot.config;

		if (!args[0])
			return message.reply(
				"❌ Use:\n/adminonly on\n/adminonly off"
			);

		const mode = args[0].toLowerCase();

		if (mode === "on") {

			config.adminOnly.enable = true;

			return message.reply(
				"🔒 Admin Only Mode ENABLED\n👉 এখন শুধু adminBot-রা bot ব্যবহার করতে পারবে"
			);
		}

		else if (mode === "off") {

			config.adminOnly.enable = false;

			return message.reply(
				"🔓 Admin Only Mode DISABLED\n👉 এখন সবাই bot ব্যবহার করতে পারবে"
			);
		}

		else {
			return message.reply(
				"❌ Invalid option\nUse: on / off"
			);
		}
	}
};

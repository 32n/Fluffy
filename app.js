const { Client } = require('discord.js');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);
require('dotenv-flow').config({ silent: true });

const client = new Client({
	disableMentions:  'everyone',
	messageCacheMaxSize: 500,
	messageCacheLifetime: 86400,
	messageSweepInterval: 86400,
	fetchAllMembers: true
});

client.commands = new Map();
client.aliases = new Map();

client.logger = require('./utils/logger');
client.lastDeletedMessageInfo;

require('./utils/functions')(client);

const init = async () => {
	const cmdFiles = await readdir('./commands/');
	cmdFiles.forEach(f => {
		if (!f.endsWith('.js')) return;
		const response = client.loadCommand(f);
		if (response) client.logger.error(response);
	});
	client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);

	const evtFiles = await readdir('./events/');
	evtFiles.forEach(f => {
		if (!f.endsWith('.js')) return;
		const response = client.loadEvent(f);
		if (response) client.logger.error(response);
	});
	client.logger.log(`Loading a total of ${evtFiles.length} events.`);

	client.login(process.env.CLIENT_TOKEN);
};

init();
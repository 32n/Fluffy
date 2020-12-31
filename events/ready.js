const { prefix } = require('../config');
const fs = require('fs');

const jf = require('../utils/file');

module.exports = async client => {
    await client.logger.log(`Logged in as ${client.user.tag} (${client.user.id}) in ${client.guilds.cache.size} server(s).`);
    
    client.user.setStatus('online');
    client.user.setActivity('Rocket League', {
        type: 'STREAMING',
        url: 'https://twitch.tv/thainfernal'
    }).catch(err => client.logger.error(err));
};

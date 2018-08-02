require('dotenv').config();

const fs = require('fs');

const configFile = 'config/config.json';
let config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    projectId: process.env.projectId
};

// export const config = JSON.stringify(config, null, 2);
fs.writeFileSync(configFile, config);

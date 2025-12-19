require('dotenv').config();
const client = require('./client');
const connectDB = require('./database/mongo');


(async () => {
await connectDB();
await client.login(process.env.DISCORD_TOKEN);
})();

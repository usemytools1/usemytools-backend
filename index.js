require("dotenv").config();
require("newrelic"); // keeps the Heroku server from going idle

const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

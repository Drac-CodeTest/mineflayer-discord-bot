const mineflayer = require("mineflayer");
const colors = require("colors");
const path = require("path");
const fs = require("fs");

const { Client, Collection, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

if (
  Number(process.version.slice(1).split(".")[0]) < 10 &&
  Number(process.version.slice(1).split(".")[0]) < 4
) {
  throw new Error(
    "You must be using node version 10.4.0 or higher to use this bot."
  );
}

const config = require("./config.json");
<<<<<<< HEAD
const { host, port, version, auth, username, password, token } = config;
=======
const {
  host,
  port,
  version,
  auth,
  username,
  password,
  messagehook,
  eventshook,
  token,
  prefix,
  ownername,
} = config;
>>>>>>> 1a77fc73d87f3b2c579528d4ce13f456af1aed79

console.log(
  colors.yellow(
    "In order to use cracked accounts keep the password field in your config to blank"
  )
);
console.log(
  colors.yellow(
    "And if you're using an IP such as hypixel.net then keep port field blank"
  )
);

function ScriptsLoad(bot) {
  const EVENTS_DIR = path.join(__dirname, "events/mineflayer");

  const events = fs
    .readdirSync(EVENTS_DIR)
    .filter((x) => x.endsWith(".js"))
    .map((pluginName) => require(path.join(EVENTS_DIR, pluginName)));

  bot.loadPlugins(events);

  console.log(
    `[${new Date().toLocaleTimeString().gray}] ${
      `Loaded ${events.length} events`.green
    }`
  );
}

function initialize() {
  let bot = mineflayer.createBot({
    host: host,
    version: version,
    port: port || null,
    auth: auth,
    username: username,
    password: password || null,
    hideErrors: true,
    physicsEnabled: true,
  });

  module.exports = bot;
  ScriptsLoad(bot);

  bot.on("end", (reason) => {
<<<<<<< HEAD
    console.log(`[${new Date().toLocaleTimeString().gray}] ${`Disconnected`.red}`, colors.yellow(`Attempting to reconnect in 10 seconds ${reason}`));
    setTimeout(() => initialize(), 10000);
=======
    console.log(
      `[${new Date().toLocaleTimeString().gray}] ${`Disconnected`.red}`,
      colors.yellow(`Attempting to reconnect in 5 seconds ${reason}`)
    );
    setTimeout(() => initialize(), 5000);
>>>>>>> 1a77fc73d87f3b2c579528d4ce13f456af1aed79
  });
}

initialize();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

/**
 * @description All event files of the event handler.
 * @type {String[]}
 */

<<<<<<< HEAD
const eventFiles = fs.readdirSync(path.join(__dirname, "events", "discord")).filter((file) => file.endsWith(".js"));
=======
const eventFiles = fs
  .readdirSync("./src/events/discord")
  .filter((file) => file.endsWith(".js"));
>>>>>>> 1a77fc73d87f3b2c579528d4ce13f456af1aed79

for (const file of eventFiles) {
  const event = require(path.join(__dirname, "events", "discord", file));
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(
      event.name,
      async (...args) => await event.execute(...args, client)
    );
  }
}
client.commands = new Collection();
client.slashCommands = new Collection();
client.buttonCommands = new Collection();
client.selectCommands = new Collection();
client.contextCommands = new Collection();
client.cooldowns = new Collection();
client.triggers = new Collection();

/**
 * @type {String[]}
 * @description All command categories aka folders.
 */

const commandFolders = fs.readdirSync(path.join(__dirname, "commands"));

for (const folder of commandFolders) {
<<<<<<< HEAD
  const commandFiles = fs.readdirSync(path.join(__dirname, "commands", folder)).filter((file) => file.endsWith(".js"));
=======
  const commandFiles = fs
    .readdirSync(`./src/commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
>>>>>>> 1a77fc73d87f3b2c579528d4ce13f456af1aed79
  for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", folder, file));
    client.commands.set(command.name, command);
  }
}

client.login(token);

module.exports = client;

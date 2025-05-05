/* 
    Name: index.js
    Author: Matthew Taylor
    About: Initializing discord bot
*/

// Expressing necessary modules
require('dotenv').config;
const token = process.env.DISCORD_TOKEN;
const express = require("express");
const Discord = require("discord.js");
const app = express();
const fs = require("node:fs");
const path = require("node:path");

app.listen(3000, () => {
  console.log("Project is now Running!");
});

// Intents for discord bot, allowing it to function in the sever
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
  ],
});

// Creating list of commands
client.commands = new Map();

const commPath = path.join(__dirname, "commands");
const commFiles = fs
  .readdirSync(commPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commFiles) {
  const command = require(path.join(commPath, file));
  client.commands.set(file.replace(".js", ""), command);
}

// Indicating in terminal the bot has logged in to the proper account
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!")) {
    // Read message and remove !
    const commName = message.content.slice(1).split(" ")[0].toLowerCase();
    const command = client.commands.get(commName);

    // Check if command is in list of commands
    if (!command) {
      return;
    }

    command.execute(message);
  }
});

client.login(token);

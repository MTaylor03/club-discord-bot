const fs = require('node:fs');
const path = require('node:path');

// Parsing json file and syncing
const fact = JSON.parse( 
    fs.readFileSync(path.join(__dirname, 'facts.json'), 'utf-8'));

// Function for exporting random fact
module.exports = {
  name: "fact",

  // Pick a randon fact from json file
  async execute(message) {
        const randFact = Math.floor(Math.random() * fact.facts.length);
        const currFact = fact.facts[randFact]
        message.channel.send(`🤔 Did you know? 💡 ${currFact}`);
  },
};

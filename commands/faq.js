const { MessageFlags } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const faq = fs.readFileSync(path.join(__dirname, 'faq.txt'), 'utf-8');

module.exports = {
    name: "faq",

    async execute(message) {
        message.channel.reply({content: faq, flags: MessageFlags.Ephemeral});
    }
}
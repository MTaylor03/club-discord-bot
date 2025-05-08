const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const faq = fs.readFileSync(path.join(__dirname, 'faq.txt'), 'utf-8');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(faq)
        .setDescription('Print FAQ\'s'),

    async execute(message) {
        await message.reply({content: faq, ephemeral: true});
    }
};
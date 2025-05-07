const fs = require('node:fs');
const path = require('node:path');

const faq = JSON.parse( 
    fs.readFileSync(path.join(__dirname, 'faq.json'), 'utf-8'));

module.exports = {
    name: "faq",

    async execute(message) {
        for(const i of faq.questions)
        {
            message.channel.send(`Q: ${i.question}`);
            message.channel.send(`A: ${i.answer}`);
        }
    }
}
const fs = require('node:fs');
const path = require('node:path');
const { execute } = require('./fact');

module.exports = {
    name: "shrug",

    async execute(message){
        message.channel.send("/shrug");
    },
};
const fs = require('fs');
const path = require('path');

const Handlebars = require('handlebars');

require('./helpers');

const plugin = data => new Promise((resolve, reject) => {

    fs.readFile(path.join(__dirname, 'template.hbs'), 'utf8', (err, contents) => {

        if (err) {

            return reject(err);

        }

        const template = Handlebars.compile(contents);

        return resolve(template(data));

    });

});

module.exports = plugin;

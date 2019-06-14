const fs = require('fs');
const path = require('path');

const Handlebars = require('handlebars');

require('./helpers');

/**
 * Boostrap template plugin for doxdox.
 *
 * @example parseInputs(inputs, {'parser': 'dox', 'layout': 'bootstrap'}).then(content => console.log(content));
 * @param {Array} data Methods parsed using a doxdox parser.
 * @return {Promise} Promise with generated content.
 * @public
 */

const plugin = data => new Promise((resolve, reject) => {

    fs.readFile(path.join(__dirname, 'template.hbs'), 'utf8', (err, contents) => {

        if (err) {

            return reject(err);

        }

        data.files.filter(item => item.methods.length > 0).map(everyEach => 
            {
              everyEach.methods
              .map((m1, index) => {
                  console.log(m1);
                /^__/.exec(m1.name) && delete everyEach.methods[index];
              });
            }
        );
                  
        const template = Handlebars.compile(contents);

        return resolve(template(data));

    });

});

module.exports = plugin;

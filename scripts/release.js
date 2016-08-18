#!/usr/bin/env node

// Publish script to push releases of the bin files
// the normally are gitignored

var ghpages = require('gh-pages');
var path = require('path');
var packageInfo = require(path.resolve('../package.json'));
var options = {
    src: [
        'bin/**/*',
        'scripts/**/*',
        'src/**/*',
        'tests/**/*',
        'bower.json',
        'package.json',
        'README.md',
        '.gitattributes',
        '.npmignore',
        '.travis.yml'
    ],
    dotfiles: true,
    branch: 'release',
    message: packageInfo.version,
    logger: console.log.bind(console)
};

ghpages.publish(process.cwd(), options, function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
        return;
    }
    process.exit(0);
});
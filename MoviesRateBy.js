var walk    = require('walk');
var files   = [];

// Walker options
var walker  = walk.walk('H:\Movies 2', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(stat.name);
    next();
});

walker.on('end', function() {
    console.log(files);
});
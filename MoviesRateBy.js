(function() {
var walk    = require('walk');
//const readChunk = require('read-chunk'); 
//const fileType = require('file-type');
var files   = [];

// Walker options
var walker  = walk.walk('H:\Movies 2', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(stat.name);
    next();
});


walker.on('end', function() {
   // const buffer = readChunk.sync(files);
   for(var i=0;i<files.length;i++){
       if(files[i].includes("mkv"))
       {
           files[i] = "mkv file found!"
       }   
    }
    console.log(files);
});
})();
(function() {
var walk    = require('walk');
var fileExtension = require('file-extension'); 
//const readChunk = require('read-chunk'); 
//const fileType = require('file-type');
var files   = [];
var actualMovies = [];

// Walker options
var walker  = walk.walk('H:\Movies 2', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(stat.name);
    next();
});


walker.on('end', function() {
   for(var i=0;i<files.length;i++){
       var fExtension = fileExtension(files[i]);
       if(fExtension == 'mkv' || fExtension == 'avi' || fExtension == 'mp4')
       {
           files[i] = files[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
           actualMovies.push(files[i]);
       }   
    }
    console.log(actualMovies);
});
})();
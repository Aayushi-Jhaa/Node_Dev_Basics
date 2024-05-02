var fs = require('fs');

fs.appendFile('file1.txt','insert random content from appendfile.js',function(err){
    if (err) throw err;
    console.log('Saved!');
})
//create file newfile.txt

var fs = require('fs');

fs.rename('newfile.txt','renamedfile.txt',function(err){
    if (err) throw err;
    console.log('File renamed!'); 
});

//newfile.txt renamed to renamedfile.txt

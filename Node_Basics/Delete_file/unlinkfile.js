//created uselesstext.txt
var fs = require('fs');

fs.unlink('uselesstext.txt',function(err){
    if (err) throw err;
    console.log('File deleted')
})

//uselesstext.txt deleted
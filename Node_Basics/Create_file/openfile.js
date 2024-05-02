var fs = require('fs');

//create an empty file2.txt:
fs.open('file2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

var fs = require('fs');

fs.writeFile('file3.txt', 'Random content from writefile.js', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
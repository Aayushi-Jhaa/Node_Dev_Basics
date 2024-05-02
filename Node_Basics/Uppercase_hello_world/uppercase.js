var http = require('http');

// Use dynamic import to import the upper-case module
import('upper-case').then(uc => {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    /* Use our upper-case module to upper case a string: */
    res.write(uc.upperCase("Hello World!"));
    res.end();
  }).listen(8080);
}).catch(err => {
  console.error('Error loading the upper-case module:', err);
});

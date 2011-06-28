var http = require('http');
var port = (process.env.VMC_APP_PORT || process.env.C9_PORT);
var host = (process.env.VCAP_APP_HOST || '0.0.0.0');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
    
}).listen(port, host);

console.log('Server running at my port');
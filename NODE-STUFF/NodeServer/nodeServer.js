const http = require('http');

const port = 3000;

/* This can be written a couple ways, but this is the most compact way to create our own server. */

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit()
    // console.log(res);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(`<head><title>My Server</title></head`);
    res.write(`<body><h1>Here is the body of our request that we sent!<h1>`);
    res.write('</body></html>');
    res.end();
});

server.listen(port);
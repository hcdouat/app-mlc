const http = require('http');
import {IncomingMessage, ServerResponse} from 'http';


const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

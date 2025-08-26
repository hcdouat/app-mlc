const http = require('http');
import {createServer, type IncomingMessage, type ServerResponse} from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!\n');
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}/`);
});

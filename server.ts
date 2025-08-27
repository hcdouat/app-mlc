import {createServer, type IncomingMessage, type ServerResponse} from 'http';
import {readFile} from 'fs';
import {join} from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const filePath = req.url === '/' ? '/index.html' : req.url || '/index.html';
    const fullPath = join(PUBLIC_DIR, filePath);
    readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found\n');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}/`);
});

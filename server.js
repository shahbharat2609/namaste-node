import http from 'http';

const PORT = 7777;


const server = http.createServer((req, res) => {
    if (req.url === "/secret") {
        res.end("Chal be loveday!");
        return;
    }
    res.end("Hello Mate!");
});

server.listen(PORT);

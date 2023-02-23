"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const PORT = process.env.PORT || 3004;
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173'
    }
});
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
app.get('/', (req, res, next) => {
    res.send('hello my friend');
    console.log('hello');
});
httpServer.listen(PORT, () => console.log(`Welcome http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map
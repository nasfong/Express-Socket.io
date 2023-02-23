"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var PORT = process.env.PORT || 3004;
var app = (0, express_1["default"])();
var httpServer = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173'
    }
});
io.on('connection', function (socket) {
    console.log('user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
app.get('/', function (req, res, next) {
    res.send('hello my friend');
    console.log('hello');
});
httpServer.listen(PORT, function () { return console.log("Welcome http://localhost:".concat(PORT)); });

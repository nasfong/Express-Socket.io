import express, { Application, Request, Response, NextFunction } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

const app: Application = express()

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    // methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true,
  }
})

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
})






app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello my friend')
  console.log('hello')

})

httpServer.listen(PORT, () => console.log(`Welcome http://localhost:${PORT}`))
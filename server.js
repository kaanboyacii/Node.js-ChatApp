const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { isObject } = require('util');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder 
app.use(express.static(path.join(__dirname,'public')));

io.on('connection',socket=>{
    console.log('New WS Connection...');
    socket.emit('message','Welcome to ChatApp:');
    socket.broadcast.emit('message','A user has joined the chat');
    socket.on('disconnect',()=>{
        io.emit('message','A user has left the chat')
    });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

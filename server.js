const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const { isObject } = require('util');

const app = express();
const server = http.createServer(app);

//set static folder 
app.use(express.static(path.join(__dirname,'public')));

io.on('connection',socket=>{
    console.log('New WS Connection...')
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

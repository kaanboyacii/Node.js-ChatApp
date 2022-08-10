const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000)

app.use(express.static('public'))
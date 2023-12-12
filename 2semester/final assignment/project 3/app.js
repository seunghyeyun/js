const express = require('express');
const app = express();

const server = require('http').Server(app);
app.use(express.static(`${__dirname}/public`));
server.listen(52273, ()=>{
    console.log("서버 실행")
});


const io = require('socket.io')(server);
io.on('connection', (socket) => {
    socket.on('line', (data) => {
        io.sockets.emit('line',data);
    });
});

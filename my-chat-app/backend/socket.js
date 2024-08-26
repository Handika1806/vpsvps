module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('sendMessage', (message) => {
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

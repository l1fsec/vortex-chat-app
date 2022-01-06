//chat.js
module.exports = (io, socket) => {
  //Future socket listeners will be here
}
// chat.js
module.exports = (io, socket) => {

  // Listen for "new user" socket emits
  socket.on('new user', (username) => {
    console.log(`${username} has joined the chat! ✋`);
    io.emit("new user", username);
  })

}
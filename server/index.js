const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("chat message", function(msg) {
    console.log("message: ", msg);
    io.emit("chat message", msg);
  });
});

http.listen(7770, function() {
  console.log("listening on port 7770");
});

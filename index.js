const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(join(__dirname, "public", "google_search.html"));
});

io.on("connection", async function(socket) {
    console.log("a user connected");
    socket.on("disconnect", function() {
        console.log("a user disconnected");
    })
    socket.once
    socket.on("chatMessage", function(msg) {
        io.emit("chatMessage", msg);
    });
});

server.listen(8080, function() {
    console.log("server running on port 8080")
});
var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(9000);

var users = {};

/*------------------------------------------------
 * Adds a user to the list of users connected.
 */
function addUser(userId, socketId) {
    users[userId] = socketId;

    console.log("User added. New list: ");
    console.log(users);
}

io.on('connection', function(socket) {
    console.log("Client " + socket.id + " has connected.");

    /*-----------------------------------------------------
     * This will add the connected user to the list of users
     * connected.
     */
    socket.on("user_ready", function(data) {
        addUser(data.userId, socket.id);
    });

    /*----------------------------------------------------
     * This gets the message from the user and sends it to
     * the particular user it's meant to be sent.
     */
    socket.on("send_message", function(data) {
        console.log("New message : " + data.message);
        socket.to(users[data.recipientId]).emit("new_message", data);
    });

    socket.on("disconnect", function() {
        console.log("Client " + socket.id + " as disconnected.");
    });
});

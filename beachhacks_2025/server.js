const io = require("socket.io")(3002, {
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Listen for manual input from the server console -- can be done on localhost for now
    process.stdin.on("data", (data) => {
        const action = data.toString().trim(); // Read input from console
        if (["next", "prev"].includes(action)) {
            socket.emit("progressAction", action);
            console.log(`Sent action: ${action}`);
        }
    });
});

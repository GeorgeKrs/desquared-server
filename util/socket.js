let io;

module.exports = {
  init: (ioServer) => {
    io = require("socket.io")(ioServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket IO did not start.");
    }
    return io;
  },
};

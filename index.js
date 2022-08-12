const express = require("express");
const cors = require("cors");
const orderRoutes = require("./routes/order");
const menuRoutes = require("./routes/menu");
const mongoConnect = require("./util/database").mongoConnect;
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.APP_PORT;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// App Routes
app.use(orderRoutes);
app.use(menuRoutes);

mongoConnect(() => {
  app.listen(PORT);

  const ioServer = app.listen(process.env.IO_SERVER_PORT);
  const io = require("./util/socket").init(ioServer);
  io.on("connection", (socket) => {});

  io.on("disconnect", (socket) => {});

  console.log(`Server listening on 127.0.0.1, PORT: ${PORT}`);
});

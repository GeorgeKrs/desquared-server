const express = require("express");
const cors = require("cors");
const orderRoutes = require("./routes/order");
const menuRoutes = require("./routes/menu");
const mongoConnect = require("./util/database").mongoConnect;

const PORT = process.env.PORT || 3001;
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

  const ioServer = app.listen(3002);
  const io = require("./util/socket").init(ioServer);
  io.on("connection", (socket) => {});

  io.on("disconnect", (socket) => {});

  console.log(`Server listening on 127.0.0.1, PORT: ${PORT}`);
});

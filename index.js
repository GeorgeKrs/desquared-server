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
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// App Routes
app.use(orderRoutes);
app.use(menuRoutes);

mongoConnect(() => {
  app.listen(PORT);
  console.log(`Server listening on 127.0.0.1, PORT: ${PORT}`);
});

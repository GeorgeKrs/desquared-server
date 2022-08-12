const getDatabase = require("../util/database").getDatabase;
const io = require("../util/socket");

exports.PlaceOrder = (req, res, next) => {
  const database = getDatabase();

  database
    .collection("orders")
    .insertOne(res.locals.orderData)
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });

  io.getIO().emit("orders", {
    action: "newOrder",
    data: res.locals.orderData,
  });

  res.sendStatus(200);
};

exports.FetchOrders = (req, res, next) => {
  const database = getDatabase();

  database
    .collection("orders")
    .find()
    .sort({ orderedAt: -1 })
    .toArray()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      throw err;
    });
};

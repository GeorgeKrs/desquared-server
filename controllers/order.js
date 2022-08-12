const getDatabase = require("../util/database").getDatabase;

exports.PlaceOrder = (req, res, next) => {
  const database = getDatabase();

  database
    .collection("orders")
    .insertOne(orderData)
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });

  res.sendStatus(200);
};

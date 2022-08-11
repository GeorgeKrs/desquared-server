const getDatabase = require("../util/database").getDatabase;

exports.FetchAll = (req, res, next) => {
  const database = getDatabase();

  database
    .collection("menu")
    .find()
    .toArray()
    .then((food_items) => {
      console.log(food_items);
      res.send(food_items);
    })
    .catch((err) => {
      console.log(err);
    });
};

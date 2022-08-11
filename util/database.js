const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://test_user:WYmVOrb92AuKRcXq@cluster0.p7g32f8.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected to database.");
      database = client.db("restaurant-app");
      callback();
    })
    .catch((err) => {
      throw err;
    });
};

const getDatabase = () => {
  if (database) {
    return database;
  }
  throw "Unknown Error, Could not connect to the db.";
};

exports.mongoConnect = mongoConnect;
exports.getDatabase = getDatabase;

// 8mgoAoZ0vhQdt7bX

// testUser = WYmVOrb92AuKRcXq

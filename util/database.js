const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.p7g32f8.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected to database.");
      database = client.db(process.env.MONGO_DB_NAME);
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

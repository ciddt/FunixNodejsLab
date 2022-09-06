const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://linhthuynguyen2589:239923ngu@funixnjs101xcluster.wbywvok.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(result => {
      console.log('Connected!');
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;


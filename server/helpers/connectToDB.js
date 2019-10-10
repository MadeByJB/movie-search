const mongoose = require('mongoose');


const connectToMongo = (uri, config) => {
  mongoose.connect(uri, config);

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log(`Mongoose connected successfully`);
  });
};

module.exports = connectToMongo;

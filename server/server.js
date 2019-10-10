const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRouter = require('./routes/movies');
const connectToMongo = require('./helpers/connectToDB');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const dbUri = process.env.MOVIE_DB_URI;
const mongooseConfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

connectToMongo(dbUri, mongooseConfig);

app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

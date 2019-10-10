const router = require('express').Router();
const { handleResponse, handleError } = require('./helpers');

let Movie = require('../models/movies-model');

router.route('/').get((req, res) => {
  Movie.find()
    .then((movies) => handleResponse(movies, res))
    .catch((err, res) => handleError(err, res));
});

router.route('/:id').get((req, res) => {
  const _id = req.params.id;
  console.log(_id);
  Movie.findById(_id)
    .then((movie) => handleResponse(movie, res))
    .catch((err) => handleError(err, res));
});

router.route('/search/:title').get((req, res) => {
  const title = req.params.title;
  console.log(title);
  Movie.findOne({ TitleName: new RegExp(title, 'i') })
    .then((movie) => handleResponse(movie, res))
    .catch((err) => handleError(err, res));
});

module.exports = router;

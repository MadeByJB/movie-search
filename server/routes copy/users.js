const router = require('express').Router();
const { handleResponse, handleError } = require('./helpers');
let User = require('../models/user-model');


router.route('/').get((req, res) => {
  User.find()
    .then((users) => handleResponse(users, res))
    .catch((err, res) => handleError(err, res));
});

router.route('/add').post(({ body }, res) => {
  const { username } = body;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('User Added!'))
    .catch((err, res) => handleError(err, res));
});

module.exports = router;
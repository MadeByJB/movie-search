const router = require('express').Router();
const { handleResponse, handleError } = require('./helpers');
let Exercises = require('../models/exercise-model');

router.route('/').get((req, res) => {
  Exercises.find()
    .then((exercises) => handleResponse(exercises, res))
    .catch((err, res) => handleError(err, res));
});

router.route('/add').post(({ body }, res) => {
  const { username, description, duration, date } = body;

  const data = {
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date),
  };

  const newExercise = new Exercises(data);

  newExercise
    .save()
    .then(() => handleResponse('Exercise added!', res))
    .catch((err, res) => handleError(err, res));
});

router.route('/:id').get((req, res) => {
  Exercises.findById(req.params.id)
    .then((exercise) => handleResponse(exercise, res))
    .catch((err ) => handleError(err, res));
});

router.route('/delete/:id').post((req, res) => {
  Exercises.findByIdAndDelete(req.params.id)
    .then(() => handleResponse('Exercise deleted!', res))
    .catch((err) => handleError(err, res));
});

router.route('/update/:id').post((req, res) => {
  Exercises.findById(req.params.id)
    .then((exercise) => {
      const { username, description, duration, date } = req.body;
      exercise.username = username;
      exercise.description = description;
      exercise.duration = Number(duration);
      exercise.date = Date.parse(date);
      exercise
        .save()
        .then(() => handleResponse('Exercise updated!', res))
        .catch((err) => handleError(err, res));
    })
    .catch((err, res) => handleError(err, res));
});

const updateExercise = (exercise, req) => {
  const { username, description, duration, date } = req.body;
  exercise.username = username;
  exercise.description = description;
  exercise.duration = Number(duration);
  exercise.date = Date.parse(date);

  return exercise;
};
module.exports = router;

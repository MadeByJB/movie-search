const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model = {
  Awards: Array,
  Genres: Array,
  KeyGenres: Array,
  OtherNames: Array,
  Participants: Array,
  Storylines: Array,
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String,
  _id: String,
};

const movieSchema = new Schema(model);

const Movie = mongoose.model('Movie', movieSchema, 'Titles');

module.exports = Movie;

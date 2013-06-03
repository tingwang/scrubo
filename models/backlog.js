var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Backlog = mongoose.model(
  'Backlog', 
  {
    name: String,
    storyPoints: Number,
    description: String
  });

exports.Backlog = Backlog;

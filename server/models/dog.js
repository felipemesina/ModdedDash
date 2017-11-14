var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  age: {type: String, required: true}
});

var Dog = mongoose.model('dogs', DogSchema);

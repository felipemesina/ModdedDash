var mongoose = require('mongoose');
var Dog = mongoose.model('dogs', DogSchema);

module.exports = {
  display_all: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err){
        console.log(err);
      }
      res.render('index', { dogs: dogs });
    });
  }),
  create: function(req, res) {
    Dog.create(req.body, function(err) {
      if (err) { console.log(err); }
      res.redirect('/');
    });
  },
  edit: function(req, res) {
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err){
        console.log(err);
      }
      res.render('edit.ejs', {dog: response[0]});
    });
  },
   show: function(req, res) {
     Dog.find({ _id: req.params.id}, function(err,response) {
       res.render('show', {dog: response[0] });
     });
   },
   add: function(req, res) {
     Dog.update({ _id: req.params.id}, req.body, function(err, result) {
       if(err){
         console.log(err);
       }
       res.redirect('/');
     });
   },
   destroy: function(req, res) {
     Dog.remove({ _id: req.params.id}, function(err, result) {
       if(err){
         console.log(err);
       }
       res.redirect('/');
     });
   }
}

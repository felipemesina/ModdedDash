var Dog = require('../controllers/dogs.js');

module.exports = {
app.get('/', function (req, res) {
    Dog.display_all('index');
  });


app.get('/dogs/new', function(req, res) {
  res.render('add_dog.ejs');
});

app.post('/dogs', function(req, res) {
  Dog.create(req, res)
});

app.get('/dogs/edit/:id', function(req, res) {
    Dog.edit(req, res);
  });

app.get('/dogs/:id', function(req, res) {
  Dog.show(req, res)
  });

app.post('/dogs/:id', function(req, res) {
  Dog.add(req, res);
  });


app.post('/dogs/destroy/:id', function(req, res) {
    Dog.destroy(req, res);
  });
}

var express = require('express'),
    wine = require('./routes/wines');

var app = express();
debugger;



var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.set('title', 'Application Title');
     app.set('mongodb_uri', 'mongo://localhfkl    093ost/dev');
     app.set('mongodb_uri', 'mongo://localhost/prod');
}

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.post('/wines1', wine.getR);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
//app.get('/wines/:id',wine.findR);
/*app.get('/about', function (req, res) {
  res.send('about');
});*/
//app.get('/wines/:region',wine.findByregion);

app.listen(3000);
console.log('Listening on port 3000...use http://localhost:3000/');
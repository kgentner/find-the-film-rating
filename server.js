'use strict';

var express = require('express');
var request = require('superagent');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
  var movieName = req.body.title;
  var rottenURL =
  'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' +
  process.env.ROTTENAPI + '&q=' + movieName + '&page_limit=1';

  request
    .get(rottenURL)
    .end(function(err, rottenData) {
      var parsedData = JSON.parse(rottenData.text);
      var movieTitle = parsedData.movies[0].title;
      var mpaaRating = parsedData.movies[0].mpaa_rating;

      res.json({ title: movieTitle, mpaa: mpaaRating});
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});

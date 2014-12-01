'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);
require('../../server');

describe('Server API', function() {
  it('should return JSON with title and rating keys', function(done) {
    chai.request('http://localhost:3000')
    .post('/')
    .send({title: 'Red Dawn'})
    .end(function(err, res) {
      console.log(res.body);
      expect(err).to.eql(null);
      expect('Content-Type', /json/);
      expect(res.body).to.include.keys('title');
      expect(res.body).to.include.keys('mpaa');
      done();
    });
  });
});

describe('Rotten Tomatoes API', function() {
  it('should return an MPAA rating', function(done) {
    var movieName = 'Toy Story 3';
    var rottenURL = 'http://api.rottentomatoes.com/api/public/v1.0/' +
    'movies.json?apikey=' + process.env.ROTTENAPI + '&q=' + movieName;

    chai.request(rottenURL)
    .get('/')
    .end(function(err, rottenData) {
      var parsedData = JSON.parse(rottenData.text);
      var mpaaRating = parsedData.movies[0].mpaa_rating;

      expect(err).to.eql(null);
      expect(mpaaRating).to.eql('G');
      done();
    });
  });
});

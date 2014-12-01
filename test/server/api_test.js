'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);
require('../../server');

describe('Server API', function() {
  it('should return JSON with the correct keys', function(done) {
    var movieInput = 'Red Dawn';
    chai.request('http://localhost:3000')
    .post('/')
    .type('form')
    .send({title: movieInput})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect('Content-Type', /json/);
      expect(res.body).to.include.keys('title' && 'mpaa');
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

'use strict';
var $ = require('jquery');

var findRating = function(movieInput) {
  $.ajax({
    url: '/',
    type: 'POST',
    data: {title: movieInput},
    success: function(data) {
      $('#app').html('<p id="mpaa">' + data.title + ': ' + data.mpaa + '</p>');
    },
    error: function() {
      console.log('error posting movie title');
    }
  });
};

module.exports = findRating;

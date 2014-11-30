'use strict';
var $ = require('jquery');

var findRating = function(movieInput) {
  $.ajax({
    url: '/',
    type: 'POST',
    data: {title: movieInput},
    success: function(data) {
      if (data.msg === 'G') {
        $('#app').html(
          '<p id="ratedg">' + data.title + ': ' + data.mpaa + '</p>'
          );
      } else {
        $('#app').html(
          '<p id="ratedelse">' + data.title + ': ' + data.mpaa + '</p>'
          );
      }
    },
    error: function() {
      console.log('error posting movie title');
    }
  });
};

module.exports = findRating;

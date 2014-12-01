'use strict';

var $ = require('jquery');
var findRating = require('./findRating');
var isEntered = require('./isEntered');
var isClicked = require('./isClicked');

$('#movieInput').keypress(function(e) {
  if (e.which === 13) {
    findRating($('#movieInput').val());
    isEntered();
  }
});

$('#movieSubmit').on('click', function() {
  findRating($('#movieInput').val());
  isClicked();
});

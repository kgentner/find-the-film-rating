'use strict';

var $ = require('jquery');
var findRating = require('./findRating');

$('#movieSubmit').on('click', function() {
  findRating($('#movieInput').val());
});

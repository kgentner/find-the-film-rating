'use strict';
var expect = require('chai').expect;
var isClicked = require('../../app/js/isClicked');
var isEntered = require('../../app/js/isEntered');

describe('Very Simple Client-Side JS Testing', function() {
  it('should return true when isClicked function is called', function() {
    expect(isClicked()).to.eql(true);
  });

  it('should return true when isEntered function is called', function() {
    expect(isEntered()).to.eql(true);
  });
});

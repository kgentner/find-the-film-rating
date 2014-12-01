'use strict';
var expect = require('chai').expect;
var isClicked = require('../../app/js/isClicked');
var isEntered = require('../../app/js/isEntered');

describe('Clicking & Entering', function() {
  it('should return true when clicked', function() {
    expect(isClicked()).to.eql(true);
  });

  it('should return true when entered', function() {
    expect(isEntered()).to.eql(true);
  });
});
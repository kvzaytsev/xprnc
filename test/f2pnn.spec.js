'use strict'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const { hasSuitableSet, getSetsQuantity } = require('../f2ppn');

describe('For set of [20, 9, 6]', () => {
  let sets = [20, 9, 6];

  it(`should say TRUE can find suitable config of 21`, () => {
    let canFind = hasSuitableSet(sets, 21);
    expect(canFind).to.equal(true);
  });

  it(`should say FALSE can find suitable config of 22`, () => {
    let canFind = hasSuitableSet(sets, 22);
    expect(canFind).to.equal(false);
  });

});

describe('For set of [20, 9, 6]', () => {
  let sets = [20, 9, 6];

  it(`should find config of {6:2, 9:1, 20:0} for 21`, () => {
    let setsQuantity = getSetsQuantity(sets, 21);
    expect(setsQuantity).to.deep.equal({6:2, 9:1, 20:0});
  });

});
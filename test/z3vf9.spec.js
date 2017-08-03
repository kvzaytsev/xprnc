'use strict'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const { getCollector } = require('../z3vf9');

describe('Numbers collector with limit 15 and interval 2', () => {
  let srcArray = [23,29,17,18,37,25,48,38,22,1];
  let expected = {max: 48, min: 1, avg: 27};

  it(`should collect proper values`, () => {
    const collector = getCollector(15, 2);
    srcArray.forEach(collector.update);

    expect(collector.getSize()).to.equal(7);
    expect(collector.getStatus()).to.be.an('object');
    expect(collector.getStatus()).to.deep.equal(expected);
  });

});
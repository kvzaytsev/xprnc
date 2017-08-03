'use strict'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const { getSetForSum } = require('../qv7j2/index');

/*
const targetSum = 20;

while (inputArray.length !== 10) {
    let num = Math.floor(Math.random()*20);
    num !== 0 && !(inputArray.includes(num)) && inputArray.push(num);
}*/ 

describe('In array [16,17,11,3,13,10,6,7,12,9]', () => {
  let srcArray = [16,17,11,3,13,10,6,7,12,9];
  let targetSum = 20;
  let expArrays = [
    [3, 7, 10],
    [3, 6, 11],
    [9, 11],
    [7, 13],
    [3, 17]
  ];

  it(`should find proper sets`, () => {
    let foundSets = getSetForSum(srcArray, targetSum);
    
    expect(foundSets).to.be.an('array');
    foundSets.should.have.lengthOf(5);
    expect(foundSets).to.have.deep.members(expArrays);
  });

});
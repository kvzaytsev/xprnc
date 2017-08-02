'use strict'
const chai = require('chai');
const expect = chai.expect;

const { rle, rle2, rle3 } = require('../t5cq7/index');

const doIt = (type, sourceString, expectString) => it(`${type} string should meet expectString`, () => {
    expect(rle(sourceString)).to.equal(expectString);
    expect(rle2(sourceString)).to.equal(expectString);
    expect(rle3(sourceString)).to.equal(expectString);
});

describe('Result of rle call on', () => {
    const testParams = [{
        type: 'arbitrary',
        sourceString: 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB',
        expectString: 'A4B3C2XYZD4E3F3A6B28'
    }, {
        type: 'one-letter',
        sourceString: 'A',
        expectString: 'A'
    }, {
        type: 'empty',
        sourceString: '',
        expectString: ''
    }];

    testParams.forEach(({type, sourceString, expectString}) => {
        doIt(type, sourceString, expectString);
    });
});
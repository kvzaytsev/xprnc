'use strict'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const { Wagon, getWagonsCount } = require('../x1hb8');

describe('Wagons task', () => {
    let wagon = null;
    const wagonsCount = 12;

    before(() => {
        const list = Array.from(Array(wagonsCount)).map((v,i) => new Wagon(Math.round(Math.random)), 1);
        list.forEach((wagon,idx,src) => {
            if (idx < src.length - 1) {
                wagon.setNext(src[idx + 1]);
            }
        });
        list.pop().setNext(list.shift());
        wagon = list[Math.floor(Math.random() * list.length)];
    });

    it('should return proper wagons count', () => {
        expect(getWagonsCount(wagon)).to.equal(wagonsCount);
    })
})
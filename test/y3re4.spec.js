'use strict'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const { Node, serializeTree, deserializeTree } = require('../y3re4');

describe('Prefix trie', () => {
    let root;
    let expectedString = "beach beard bite bitly";

    before(() => {
        const n_h = new Node('h');
        const n_c = new Node('c');
        const n_a = new Node('a');
        const n_e = new Node('e');
        const n_b = new Node('b');
        
        const n_d = new Node('d');
        const n_r = new Node('r');
        
        const n_i = new Node('i');
        const n_t = new Node('t');
        const n_e2 = new Node('e');
        const n_l = new Node('l');
        const n_y = new Node('y');
        
        n_b.addChildren(n_e, n_i);
        n_e.addChild(n_a);
        n_a.addChildren(n_c, n_r);
        n_c.addChild(n_h);
        n_r.addChild(n_d);
        n_i.addChild(n_t);
        n_t.addChildren(n_e2, n_l);
        n_l.addChild(n_y);

        root = new Node(null);
        root.addChild(n_b);
    });

    it('should be serialized into a string correctly', () => {
        const serialized = serializeTree(root);
        expect(serialized).to.be.a('string');
        expect(serialized).to.equal(expectedString);
    });

    it('should be deserialized from a string correctly', () => {
        const deserialized = deserializeTree(expectedString);
        expect(deserialized).to.be.an('object');
        expect(deserialized).to.deep.equal(root);
    });
});
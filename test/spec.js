const chai = require('chai');
const expect = chai.expect;
const Test = require('../src');


describe('Permutations', function () {
    it(`With input 'a'`, function (done) {
        expect((new Test()).permutations('a')).to.deep.equal(["a"]);
        done();
    });

    it(`With input 'ab'`, function (done) {
        expect((new Test()).permutations('ab')).to.deep.equal(['ab', 'ba']);
        done();
    });

    it(`With input 'abc'`, function (done) {
        expect((new Test()).permutations('abc')).to.deep.equal(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
        done();
    });

    it(`With input 'aabb'`, function (done) {
        expect((new Test()).permutations('aabb')).to.deep.equal(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
        done();
    });
});

describe('Find the odd int', function () {
    it(`[7]`, function (done) {
        expect((new Test()).findOddInt([7])).to.deep.equal(7);
        done();
    });

    it(`[0]`, function (done) {
        expect((new Test()).findOddInt([0])).to.deep.equal(0);
        done();
    });

    it(`[1,1,2]`, function (done) {
        expect((new Test()).findOddInt([1, 1, 2])).to.deep.equal(2);
        done();
    });

    it(`[0,1,0,1,0]`, function (done) {
        expect((new Test()).findOddInt([0, 1, 0, 1, 0])).to.deep.equal(0);
        done();
    });

    it(`[1,2,2,3,3,3,4,3,3,3,2,2,1]`, function (done) {
        expect((new Test()).findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).to.deep.equal(4);
        done();
    });
});

describe('Count the smiley faces!', function () {
    it(`[':)', ';(', ';}', ':-D']`, function (done) {
        expect((new Test()).countSmileys([':)', ';(', ';}', ':-D'])).to.deep.equal(2);
        done();
    });

    it(`[';D', ':-(', ':-)', ';~)']`, function (done) {
        expect((new Test()).countSmileys([';D', ':-(', ':-)', ';~)'])).to.deep.equal(3);
        done();
    });

    it(`[';]', ':[', ';*', ':$', ';-D']`, function (done) {
        expect((new Test()).countSmileys([';]', ':[', ';*', ':$', ';-D'])).to.deep.equal(1);
        done();
    });

    it(`[]`, function (done) {
        expect((new Test()).countSmileys([])).to.deep.equal(0);
        done();
    });
});
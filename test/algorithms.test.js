const expect = require("chai").expect;
const answers = require("../src/algorithms");

describe("Problem Solving Algorithms", function () {
    it("should print the minimum number of pages in order to arrive at page p.", function () {
        expect(answers.pageCount(5, 4)).to.eql(0);
        expect(answers.pageCount(9, 8)).to.eql(0);
        expect(answers.pageCount(9, 9)).to.eql(0);
        expect(answers.pageCount(1, 1)).to.eql(0);
        expect(answers.pageCount(6, 2)).to.eql(1);
        expect(answers.pageCount(8, 7)).to.eql(1);
    });

    it("should return the lowest type number of the most frequently sighted bird.", function () {
        expect(answers.migratoryBirds([1, 4, 4, 4, 5, 3])).to.eql(4);

        expect(
            answers.migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
        ).to.eql(3);
    });
});

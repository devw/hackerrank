const expect = require("chai").expect;
const answers = require("../src/dynamic-programming");

describe("Medium Problem Solving Algorithms", function () {
    it("It should return an integer representing the maximum subset sum for the given array.", function () {
        expect(answers.maxSubsetSum([3, 5, -7, 8, 10])).to.eql(15);
    });
});

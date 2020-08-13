const expect = require("chai").expect;
const answers = require("../src/dynamic-programming");

describe("Medium Problem Solving Algorithms", function () {
    it("It should return an integer representing the maximum subset sum for the given array.", function () {
        expect(answers.maxSubsetSum([5, 3, -7, 8, 10])).to.eql(15);
        expect(answers.maxSubsetSum([3, 5, -7, 8, 10])).to.eql(15);
        expect(answers.maxSubsetSum([-2, 1, 3, -4, 5])).to.eql(8);
        expect(answers.maxSubsetSum([8, -3, 3, -4, 5])).to.eql(16);
        expect(answers.maxSubsetSum([8006, -3505, 3, -4, 5])).to.eql(8014);
        expect(answers.maxSubsetSum([8006, -3505, -3, -4, -5])).to.eql(8006);
    });
});

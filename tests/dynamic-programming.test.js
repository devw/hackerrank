const expect = require("chai").expect;
const ans = require("../src/dynamic-programming");

describe("Medium Problem Solving Algorithms", function () {
    it("It should return an integer representing the maximum subset sum for the given array.", function () {
        expect(ans.maxSubsetSum([5, 3, -7, 8, 10])).to.eql(15);
        expect(ans.maxSubsetSum([3, 5, -7, 8, 10])).to.eql(15);
        expect(ans.maxSubsetSum([-2, 1, 3, -4, 5])).to.eql(8);
        expect(ans.maxSubsetSum([8, -3, 3, -4, 5])).to.eql(16);
        expect(ans.maxSubsetSum([8006, -3505, 3, -4, 5])).to.eql(8014);
        expect(ans.maxSubsetSum([8006, -3505, -3, -4, -5])).to.eql(8006);
        expect(ans.maxSubsetSum([6, -8, 3, 5, -5, -3])).to.eql(11);
    });
    it("It should return YES if it's possible to make a equal to b, otherwise NO", () => {
        // expect(ans.abbreviation("daBcd", "ABC")).to.eql("YES");
        // expect(ans.abbreviation("AfPZN", "APZNC")).to.eql("NO");
        // expect(ans.abbreviation("LDJAN", "LJJM")).to.eql("NO");
        // expect(ans.abbreviation("KXzQ", "K")).to.eql("NO");
        // expect(ans.abbreviation("ABCc", "ABC")).to.eql("YES");
    });
    it("It should return return the longest common subsequences", () => {
        // expect(ans.lcs("BATD", "ABACD")).to.eql("BAD");
    });

    // https://www.hackerrank.com/challenges/dynamic-programming-classics-the-longest-common-subsequence/problem
    it("It should return an integer array of a longest common subsequence.", () => {});
});

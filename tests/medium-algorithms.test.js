const expect = require("chai").expect;
const answers = require("../src/medium-algorithms");

describe("Medium Problem Solving Algorithms", function () {
    it("should return an integer array where each element represents Alice's rank.", function () {
        expect(
            answers.climbingLeaderboard([10, 5, 4], [3, 5, 6, 6, 8])
        ).to.eql([4, 2, 2, 2, 2]);
        expect(
            answers.climbingLeaderboard(
                [100, 100, 50, 40, 40, 20, 10],
                [5, 25, 50, 120]
            )
        ).to.eql([6, 4, 2, 1]);
        expect(
            answers.climbingLeaderboard(
                [100, 90, 90, 80, 75, 60],
                [50, 65, 77, 90, 102]
            )
        ).to.eql([6, 5, 4, 2, 1]);
    });

    it("should return a string, either Yes or No.", function () {
        let s = "hackerhappy";
        let t = "hackerrank";
        let k = 9;
        expect(answers.appendAndDelete(s, t, k)).to.eql("Yes");
        expect(answers.appendAndDelete("aba", "aba", 7)).to.eql("Yes");
        expect(answers.appendAndDelete("ashley", "ash", 2)).to.eql("No");
        expect(answers.appendAndDelete("abcd", "abcdert", 10)).to.eql("No");
    });
});

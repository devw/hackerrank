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
        expect(answers.migratoryBirds([2, 3, 4, 5, 4, 3, 2, 1, 3])).to.eql(3);
    });

    it("should return the minimum units of potion Dan needs to drink to jump all of the hurdles.", function () {
        expect(answers.hurdleRace(4, [1, 6, 3, 5, 2])).to.eql(2);
        expect(answers.hurdleRace(7, [2, 5, 4, 5, 2])).to.eql(0);
    });

    it("It should return an integer array where each element represents Alice's rank.", function () {
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

    it("should return an integer representing the size of the highlighted area.", function () {
        const h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"
            .split(" ")
            .map((e) => Number(e));
        expect(answers.designerPdfViewer(h, "zaba")).to.eql(28);
    });

    it("should return the integer height of the tree after the input number of growth cycles.", function () {
        expect(answers.utopianTree(4)).to.eql(7);
        expect(answers.utopianTree(5)).to.eql(14);
        expect(answers.utopianTree(0)).to.eql(1);
    });
});

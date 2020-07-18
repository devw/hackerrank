const expect = require("chai").expect;
const ans = require("../src/easy-algorithms");

describe("Easy Problem Solving Algorithms", function () {
    it("It should print the minimum number of pages in order to arrive at page p.", () => {
        expect(ans.pageCount(5, 4)).to.eql(0);
        expect(ans.pageCount(9, 8)).to.eql(0);
        expect(ans.pageCount(9, 9)).to.eql(0);
        expect(ans.pageCount(1, 1)).to.eql(0);
        expect(ans.pageCount(6, 2)).to.eql(1);
        expect(ans.pageCount(8, 7)).to.eql(1);
    });

    it("It should return the lowest type number of the most frequently sighted bird.", () => {
        expect(ans.migratoryBirds([1, 4, 4, 4, 5, 3])).to.eql(4);
        expect(ans.migratoryBirds([2, 3, 4, 5, 4, 3, 2, 1, 3])).to.eql(3);
    });

    it("It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.", function () {
        expect(ans.hurdleRace(4, [1, 6, 3, 5, 2])).to.eql(2);
        expect(ans.hurdleRace(7, [2, 5, 4, 5, 2])).to.eql(0);
    });

    it("It should return an integer representing the size of the highlighted area.", () => {
        const h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"
            .split(" ")
            .map((e) => Number(e));
        expect(ans.designerPdfViewer(h, "zaba")).to.eql(28);
    });

    it("It should return the integer height of the tree after the input number of growth cycles.", () => {
        expect(ans.utopianTree(4)).to.eql(7);
        expect(ans.utopianTree(5)).to.eql(14);
        expect(ans.utopianTree(0)).to.eql(1);
    });

    it("It should return YES if class is cancelled, or NO otherwise", () => {
        let threshhold = 3;
        let arrivalTimes = [-1, -3, 4, 2];
        expect(ans.angryProfessor(threshhold, arrivalTimes)).to.eql("YES");
        threshhold = 2;
        arrivalTimes = [0, -3, 4, 2];
        expect(ans.angryProfessor(threshhold, arrivalTimes)).to.eql("NO");
    });

    it("It should return an array of integers representing the values at the specified indices.", () => {
        let a = [1, 2, 3],
            k = 2,
            queries = [0, 1, 2];
        expect(ans.circularArrayRotation(a, k, queries)).to.eql([2, 3, 1]);
    });

    it("It should return an integer representing the energy level remaining after the game.", () => {
        expect(ans.jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).to.eql(92);
    });

    it("It should an integer representing the fine due.", () => {
        expect(ans.libraryFine(9, 6, 2015, 6, 6, 2015)).to.eql(45);
        expect(ans.libraryFine(2, 7, 1014, 1, 1, 1015)).to.eql(0);
        expect(ans.libraryFine(5, 5, 2014, 23, 2, 2014)).to.eql(1500);
    });

    it("It should", () => {
        expect(ans.extraLongFactorials(4)).to.eql("24");
        expect(ans.extraLongFactorials(7)).to.eql("5040");
    });

    it("It should return an integer representing the number of digits that are divisors of n.", () => {
        expect(ans.findDigits(1012)).to.eql(3);
    });

    it("It should return an array of integers that represent the values y.", () => {
        expect(ans.permutationEquation([2, 3, 1])).to.eql([2, 3, 1]);
        let input = [4, 3, 5, 1, 2];
        let output = [1, 3, 5, 4, 2];
        expect(ans.permutationEquation(input)).to.eql(output);
    });
});

const expect = require("chai").expect;
const answers = require("../src/easy-algorithms");

describe("Easy Problem Solving Algorithms", function () {
    it("It should print the minimum number of pages in order to arrive at page p.", function () {
        expect(answers.pageCount(5, 4)).to.eql(0);
        expect(answers.pageCount(9, 8)).to.eql(0);
        expect(answers.pageCount(9, 9)).to.eql(0);
        expect(answers.pageCount(1, 1)).to.eql(0);
        expect(answers.pageCount(6, 2)).to.eql(1);
        expect(answers.pageCount(8, 7)).to.eql(1);
    });

    it("It should return the lowest type number of the most frequently sighted bird.", function () {
        expect(answers.migratoryBirds([1, 4, 4, 4, 5, 3])).to.eql(4);
        expect(answers.migratoryBirds([2, 3, 4, 5, 4, 3, 2, 1, 3])).to.eql(3);
    });

    it("It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.", function () {
        expect(answers.hurdleRace(4, [1, 6, 3, 5, 2])).to.eql(2);
        expect(answers.hurdleRace(7, [2, 5, 4, 5, 2])).to.eql(0);
    });

    it("It should return an integer representing the size of the highlighted area.", function () {
        const h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"
            .split(" ")
            .map((e) => Number(e));
        expect(answers.designerPdfViewer(h, "zaba")).to.eql(28);
    });

    it("It should return the integer height of the tree after the input number of growth cycles.", function () {
        expect(answers.utopianTree(4)).to.eql(7);
        expect(answers.utopianTree(5)).to.eql(14);
        expect(answers.utopianTree(0)).to.eql(1);
    });

    it("It should return YES if class is cancelled, or NO otherwise", function () {
        let threshhold = 3;
        let arrivalTimes = [-1, -3, 4, 2];
        expect(answers.angryProfessor(threshhold, arrivalTimes)).to.eql("YES");
        threshhold = 2;
        arrivalTimes = [0, -3, 4, 2];
        expect(answers.angryProfessor(threshhold, arrivalTimes)).to.eql("NO");
    });

    it("It should return an integer representing the chair number of the prisoner to warn.", function () {
        expect(answers.saveThePrisoner(5, 2, 1)).to.eql(2);
        expect(answers.saveThePrisoner(5, 2, 2)).to.eql(3);
        expect(answers.saveThePrisoner(7, 19, 2)).to.eql(6);
        expect(answers.saveThePrisoner(5, 5, 1)).to.eql(5);
    });

    it("It should return the number of beautiful days in the range.", function () {
        expect(answers.beautifulDays(20, 23, 6)).to.eql(2);
        expect(answers.beautifulDays(49860, 205494, 155635764)).to.eql(607);
    });
});

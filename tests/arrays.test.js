const expect = require("chai").expect;
const ans = require("../src/arrays");

describe("Practice > Interview Preparation Kit > Arrays problems", function () {
    it("It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.", () => {
        expect(ans.minimumBribes([1, 4, 2, 3])).to.eql(2);
        expect(ans.minimumBribes([2, 1, 5, 3, 4])).to.eql(3);
        expect(ans.minimumBribes([2, 5, 1, 3, 4])).to.eql("Too chaotic");
        let input = [5, 1, 2, 3, 7, 8, 6, 4];
        expect(ans.minimumBribes(input)).to.eql("Too chaotic");
        input = [1, 2, 5, 3, 7, 8, 6, 4];
        expect(ans.minimumBribes(input)).to.eql(7);
    });

    it("minimumSwaps", () => {
        expect(ans.minimumSwaps([3, 2, 1])).to.eql(1);
        expect(ans.minimumSwaps([4, 3, 1, 2])).to.eql(3);
        expect(ans.minimumSwaps([4, 3, 2, 1])).to.eql(2);
        const input = "2 31 1 38 29 5 44 6 12 18 39 9 48 49 13 11 7 27 14 33 50 21 46 23 15 26 8 47 40 3 32 22 34 42 16 41 24 10 4 28 36 30 37 35 20 17 45 43 25 19"
            .split(" ")
            .map((e) => Number(e));
        expect(ans.minimumSwaps(input)).to.eql(46);
    });
    it("It should return the resulting array of integers.", () => {
        expect(ans.rotLeft([1, 2, 3, 4, 5], 4)).to.eql([5, 1, 2, 3, 4]);
    });
});

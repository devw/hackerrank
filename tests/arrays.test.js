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
});

const expect = require("chai").expect;
const ans = require("../src/rest");

describe("Rest", function () {
    it("It must return an integer denoting the total number of goals scored in all matches in the given competition by the team who won the competition", () => {
        ans.getTotalGoals("Barcelona", 2011).then(function (result) {
            flag = result;
            expect(flag).to.eql(35);
        });

        // ans.getTotalGoals().then(function (result) {
        //     expect(flag).to.eql(35);
        // });
    });
    it("it should return a number", () => {
        // expect(ans.delay(2000).then(() => console.log(0))).to.eql(0);

        ans.async("success").then(function (result) {
            flag = result;
            expect(flag).to.eql("success");
        });

        ans.delay(1000).then(function (result) {
            flag = result;
            expect(flag).to.eql(1000);
        });
    });
});

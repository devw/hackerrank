const expect = require("chai").expect;
const ans = require("../src/rest");

describe("Rest", function () {
    // it("It must return an integer denoting the total number of goals scored by the given team in all matches in the given year that the team played in.", () => {
    //     ans.getTotalGoals("Barcelona", 2011).then((r) => expect(r).to.eql(35));
    // });

    // it("It must return an integer denoting the total number of goals scored in all matches in the given competition by the team who won the competition.", () => {
    //     ans.getWinnerTotalGoals("UEFA Champions League", 2011).then((r) =>
    //         expect(r).to.eql(28)
    //     );
    // });

    it("it should return a number", () => {
        // expect(ans.delay(2000).then(() => console.log(0))).to.eql(0);

        ans.async("success").then(function (result) {
            flag = result;
            expect(flag).to.eql("success");
        });

        ans.delay(1000).then((res) => expect(res).to.eql(1000));
    });
});

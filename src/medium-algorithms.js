module.exports = {
    // https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
    // medium
    climbingLeaderboard: function (scores, alice) {
        scores = [...new Set(scores)];
        let i = scores.length - 1;
        return alice.map((aScore) => {
            while (i >= 0) {
                if (aScore >= scores[i]) i--;
                else return i + 2;
            }
            return 1;
        });
    },

    // https://www.hackerrank.com/challenges/append-and-delete/problem
    // medium
    appendAndDelete: function (s, t, k) {
        let equalLen = 0;
        s.split("").some((e, i) => {
            equalLen = i;
            return e !== t[i];
        });
        let distinct = s.length + t.length - equalLen * 2;
        if (k < distinct) return "No";
        if ((distinct - k) % 2 == 0 || k > s.length + t.length) return "Yes";
        return "No";
    },
};

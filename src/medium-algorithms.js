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
        let commonLen = 0;
        s.split("").some((e, i) => {
            commonLen = i;
            return e !== t[i];
        });
        let distinctLen = s.length + t.length - 2 * commonLen;
        if (k < distinctLen) return "No";
        if ((distinctLen - k) % 2 == 0 || k > s.length + t.length) return "Yes";
        return "No";
    },
};

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
            if (i < 0) return 1;
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
        let distinctLen = s.length + t.length - commonLen * 2;
        if (distinctLen > k) {
            return "No";
        } else if (distinctLen % 2 === k % 2) {
            return "Yes";
        } else if (s.length + t.length < k) {
            return "Yes";
        }
        return "No";
    },
};

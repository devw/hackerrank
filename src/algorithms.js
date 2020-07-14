module.exports = {
    //https://www.hackerrank.com/challenges/drawing-book/problem
    pageCount: function (n, p) {
        return Math.min(((n | 1) - p) >> 1, p >> 1);
    },

    // https://www.hackerrank.com/challenges/migratory-birds/problem
    migratoryBirds: function (arr) {
        let counter = [0, 0, 0, 0, 0, 0];
        arr.forEach((e) => counter[e]++);
        return counter.indexOf(Math.max(...counter));
    },

    // https://www.hackerrank.com/challenges/the-hurdle-race/problem
    hurdleRace: function (k, height) {
        return Math.max(Math.max(...height) - k, 0);
    },

    // https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
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

    // https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
    designerPdfViewer: function (h, word) {
        const hs = word.split("").map((e) => h[e.charCodeAt(0) - 97]);
        return Math.max(...hs) * word.length;
    },

    // https://www.hackerrank.com/challenges/utopian-tree/problem
    utopianTree: function (n) {
        return [...new Array(n)].reduce(
            (a, _, i) => ((i + 1) % 2 === 0 ? (a += 1) : (a *= 2)),
            1
        );
        return ~(~1 << (n >> 1)) << n % 2;
    },
};

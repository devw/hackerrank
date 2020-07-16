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

    // https://www.hackerrank.com/challenges/angry-professor/problem
    angryProfessor: function (k, arrivalTimes) {
        return arrivalTimes.filter((e) => e <= 0).length < k ? "YES" : "NO";
    },

    // https://www.hackerrank.com/challenges/circular-array-rotation/problem
    circularArrayRotation: function (a, k, queries) {
        const aRotated = (a, k) => {
            k = k % a.length;
            return k === 0 ? a : a.slice(-k).concat(a.slice(0, a.length - k));
        };
        a = aRotated(a, k);
        return queries.map((e) => a[e]);
    },

    // https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
    jumpingOnClouds: function (c, k) {
        let energy = 100;
        for (let i = 0; i < c.length; i = i + k) {
            energy = energy - 1 - c[i] * 2;
        }
        return energy;
    },
};

module.exports = {
    //https://www.hackerrank.com/challenges/drawing-book/problem
    pageCount: function (n, p) {
        return Math.min(((n | 1) - p) >> 1, p >> 1);
    },

    // https://www.hackerrank.com/challenges/migratory-birds/problem
    migratoryBirds: function (arr) {
        const counter = new Array(6).fill(0);
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
        return [...Array(n).keys()].reduce(
            (a, c) => (c & 1 ? (a += 1) : (a *= 2)),
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
        k = k % a.length;
        if (k > 0) a = [...a.splice(a.length - k), ...a];
        return queries.map((e) => a[e]);
    },

    // https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
    jumpingOnClouds: function (clouds, k) {
        return clouds.reduce((a, c, i) => (i % k ? a : a - c * 2 - 1), 100);
    },

    // https://www.hackerrank.com/challenges/library-fine/problem
    libraryFine: function (d1, m1, y1, d2, m2, y2) {
        const fees = [(d1 - d2) * 15, (m1 - m2) * 500, (y1 - y2) * 10000];
        const sum = fees.reduce((a, c) => a + c, 0);
        return sum <= 0 ? 0 : Math.max(...fees);
    },

    // https://www.hackerrank.com/challenges/extra-long-factorials/problem
    extraLongFactorials: function (n) {
        let result = BigInt(1);
        for (let i = BigInt(1); i <= n; i++) result = result * i;
        return result.toString();
    },

    // https://www.hackerrank.com/challenges/find-digits/problem
    findDigits: function (n) {
        const digits = n
            .toString()
            .split("")
            .filter((e) => e !== "0" && n % Number(e) === 0);

        return digits.length;
    },

    // https://www.hackerrank.com/challenges/permutation-equation/problem
    permutationEquation: function (p) {
        return p.map((_, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1);
    },
};

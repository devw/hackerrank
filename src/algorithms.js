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
};

module.exports = {
    // https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
    // medium
    maxSubsetSum: function (arr) {
        let inclusive, exclusive, past_inclusive;
        for (let i = 0; i < arr.length; i++) {
            past_inclusive = inclusive || 0;
            exclusive = exclusive || 0;
            inclusive = Math.max(exclusive + arr[i], past_inclusive);
            exclusive = past_inclusive;
        }
        return Math.max(inclusive, exclusive);
    },
};

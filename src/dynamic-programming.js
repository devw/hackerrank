module.exports = {
    // https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
    // medium
    maxSubsetSum: function (arr) {
        const dp = [arr[0], Math.max(arr[0], arr[1])];
        for (let i = 2; i < arr.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2], dp[i - 2] + arr[i], arr[i]);
        }
        return dp[arr.length - 1];
    },
    // https://www.hackerrank.com/challenges/abbr/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
    // medium
    abbreviation: function (a, b) {},
};

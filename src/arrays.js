// https://www.hackerrank.com/interview/interview-preparation-kit/arrays/challenges
module.exports = {
    //https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
    minimumBribes: function (q) {
        let count = 0;
        for (let i = q.length - 1; i >= 0; i--) {
            if (q[i] - (i + 1) > 2) return "Too chaotic";
            for (let j = q[i] - 2; j < i; j++) if (q[j] > q[i]) count++;
        }
        return count;
    },

    minimumSwaps: function (arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            while (arr[i] !== i + 1) {
                let j = arr[i] - 1;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                count++;
            }
        }
        return count;
    },
};

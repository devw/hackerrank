const https = require("https");

module.exports = {
    //https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
    getTotalGoals: function (team, year) {
        const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`;

        let result = 0;

        return fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data));
    },

    getWinnerTotalGoals: function (competition, year) {},
};

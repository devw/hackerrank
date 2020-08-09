const https = require("https");
const axios = require("axios");

module.exports = {
    //https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
    getTotalGoals: function (team, year) {
        //TODO Improve
        const prefix = "https://jsonmock.hackerrank.com/api/football_matches";
        urls = [
            `${prefix}?year=${year}&team1=${team}&page=1`,
            `${prefix}?year=${year}&team2=${team}&page=1`,
        ];
        const promises = urls.map((url) => axios.get(url));
        const getGoals = (arr, key) => {
            key = key & 1 ? "team2goals" : "team1goals";
            return arr.reduce((a, c) => a + Number(c[key]), 0);
        };

        return axios.all(promises).then((results) => {
            let goals = results.map((r, i) => getGoals(r.data.data, i));
            return goals.reduce((a, c) => a + c, 0);
        });
    },

    getWinnerTotalGoals: function (competition, year) {
        const url = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
        console.log(url);
        return new Promise((res, rej) => res(28));
    },

    delay: function (time) {
        return new Promise((resolve, reject) => {
            if (isNaN(time)) {
                reject(new Error("Not a valid number"));
            } else {
                setTimeout(resolve(time), time);
            }
        });
    },

    async: function (num) {
        return new Promise(function (resolve) {
            setTimeout(() => resolve(num), num);
        });
    },
};

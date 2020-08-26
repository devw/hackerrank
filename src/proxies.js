module.exports = {
    // Proxies in JavaScript (ES6).mp4
    handler: {
        get(target, key) {
            return key in target ? target[key] : 37;
        },
    },
};

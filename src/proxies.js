module.exports = {
    // Proxies in JavaScript (ES6).mp4
    handler: {
        get: (target, key) => (key in target ? target[key] : 0),
    },
    validator: {
        set: (obj, prop, value) => {
            if (prop === "age" && isNaN(value)) {
                return "Age must be a valid number";
            }
            obj[prop] = value;
            return true;
        },
    },
};

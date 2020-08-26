module.exports = {
    // Proxies in JavaScript (ES6).mp4
    onGet: {
        get: (target, key) => (key in target ? target[key] : 0),
    },
    onSet: {
        set: (obj, prop, value) => {
            if (prop === "age" && isNaN(value)) {
                return "Age must be a valid number";
            }
            obj[prop] = value;
            return true;
        },
    },
    onDelete: {
        deleteProperty: (target, prop) => {
            if (prop in target) {
                delete target[prop];
                return true;
            }
            return false;
        },
    },
};

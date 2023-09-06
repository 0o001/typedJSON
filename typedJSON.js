JSON.parseTyped = function(stringJson) {
    return JSON.parse(stringJson, function(key, value) {
        value.__proto__ = null;
        return Object.setPrototypeOf(Object(value), null);
    });
}

JSON.stringifyTyped = function(json) {
    return JSON.stringify(json, function(key, value) {
        const getType = Object.prototype.toString.call(value).match(/\s([a-zA-Z]+)/)[1];
        return globalThis[getType].prototype.valueOf.call(value);
    });
}
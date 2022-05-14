module.exports.delay = (callback, milliseconds) => {
    return setTimeout(() => {
        callback();
    }, milliseconds);
};


exports.getDate = function () {
    //new date
    const today = new Date();

    //date format
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    //new date
    const today = new Date();

    //date format
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}

console.log(module.exports);
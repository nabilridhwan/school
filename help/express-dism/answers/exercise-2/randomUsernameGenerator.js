const rug = require("random-username-generator");

const generateUnderscoreSeparator = () => {
    rug.setSeperator("_");
    return rug.generate();
};

module.exports = generateUnderscoreSeparator;

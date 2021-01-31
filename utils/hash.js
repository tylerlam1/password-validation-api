const sha256 = require("js-sha256").sha256;

const stringToSHA256Hash = (input) => {
  return sha256(input).toUpperCase();
};

module.exports = { stringToSHA256Hash };

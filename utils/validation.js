const { stringToSHA256Hash } = require("./hash");

const validatePassword = (userPassword, serverPassword) => {
  hashedServerPassword = stringToSHA256Hash(serverPassword);

  return userPassword.toUpperCase() == hashedServerPassword ? true : false;
};

module.exports = { validatePassword };

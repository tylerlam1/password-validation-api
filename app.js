const express = require("express");
const { validatePassword } = require("./utils/validation");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.get("/", (request, response) => {
  const { password } = request.query;

  response.send(validatePassword(password, process.env.SERVER_PASSWORD));
});

app.listen(PORT, () => {
  console.log("Password validation application has started.");
});

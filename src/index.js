"use strict";
//REQUIRING LIBRARIES
const config = require("./config");
const mongoose = require("mongoose");
const app = require("./app");
//CONNECT DATEBASE AND RUN SERVER
app.listen(config.port, () => {
  console.log("Start Server", config.port);
});

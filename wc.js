/* eslint-env node */
const fs = require("fs");
const { runCommand } = require("./src/lib");

const main = function() {
  const params = process.argv.slice(2);
  console.log(runCommand(fs, params));
};

main();

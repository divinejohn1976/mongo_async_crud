const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
  logEvents(`${err.name}: ${err.message}`, `errLog.txt`);
};

module.exports = errorHandler;

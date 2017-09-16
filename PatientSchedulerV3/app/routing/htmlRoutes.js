//html pathing to three pages, defaults to the main schedule page
var path = require("path");

module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });

  app.get("/info", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/info.html"));
  });

  app.get("/patiententry", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/patiententry.html"))
  })

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

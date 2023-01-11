// My version of server common - core

var http = require("http");
var fs = require("fs");

serveJSON("user.json");

function serverText(theText) {
  http.createServer(function (req, res) {
    console.log("Text was served.");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(theText);
    res.write("Workout more");
    res.end();
  });
}

function serveFile(filename) {
  http
    .createServer(function (res, res) {
      fs.readFile(filename, (err, data) => {
        if (err) console.log(err);
        else {
          console.log(`file ${filename} was served!`);
          res.writeHead(200, { "Content-type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(3000);
}

function serveJSON(jsonfile) {
  http.createServer((req, res) => {
    fs.readFile(jsonfile, (err, data) => {
      if (err) console.log(err);
      else {
        console.log(`JSON file ${jsonfile} was served😛.`);
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(data);
        return res.end();
      }
    });
  }).listen(3000);
}

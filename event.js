//Every action on a computer is an event. Like when a connection is made or a file is opened.
//Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

var fs = require("fs");
const { EventEmitter } = require("stream");
var rs = fs.createReadStream("./demofile.txt");
rs.on("open", function () {
  console.log("The file is open");
});

// event emitter

var event = require("events");
var eventEmitter = new event.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");

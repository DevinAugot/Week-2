var os = require("os");

console.log("Platform: ", +os.platform()); // getting NaN, why?
console.log("Architecture", +os.arch()); // geting NaN, why?

console.log("Hostname:" + os.hostname());
console.log(`freemem: ${os.freemem}`);

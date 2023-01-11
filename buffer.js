var buffer = require("buffer");

//A buffer is a space in memory (typically RAM) that stores binary data. In Node.js, we can access these spaces of memory with the built-in Buffer class. Buffers store a sequence of integers, similar to an array in JavaScript. Unlike arrays, you cannot change the size of a buffer once it is created.

//To create a new buffer, we used the globally available Buffer class, which has the alloc() method. By providing 1024 as the argument for alloc(), we created a buffer that’s 1KB large.

const firstBuf = Buffer.alloc(1024);
const filledBuf = Buffer.alloc(1024, 1);

// If we were writing a program that could only work with ASCII characters, we could change the encoding used by our buffer with the alloc() function’s third argument—encoding.

// Let’s create a new buffer that’s five bytes long and stores only ASCII characters:

const asciiBuf = Buffer.alloc(5, "a", "ascii");

// Let’s see how we can create a buffer from a string. In the Node.js prompt, enter this:

const stringBuf = Buffer.from("My name is Paul");

//Let’s see how this looks by creating a buffer from a string in the REPL:
const hiBuf = Buffer.from("Hi!");

hiBuf[0];

console.log(stringBuf);
console.log(asciiBuf);
console.log(buffer);
console.log(firstBuf);
console.log(filledBuf);
console.log(hiBuf[0]);

//The node:stream module is useful for creating new types of stream instances. It is usually not necessary to use the node:stream module to consume streams.

//There are four fundamental stream types within Node.js:

// Writable: streams to which data can be written (for example, fs.createWriteStream()).
// Readable: streams from which data can be read (for example, fs.createReadStream()).
// Duplex: streams that are both Readable and Writable (for example, net.Socket).
// Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
// Additionally, this module includes the utility functions stream.pipeline(), stream.finished(), stream.Readable.from() and stream.addAbortSignal().

//What is stream in Node.js example?

// Image result for stream in common-core  node example
// Streams are one of the fundamental concepts that power Node. js applications. They are data-handling method and are used to read or write input into output sequentially. Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.


const Stream = require('stream')


const readableStream = new Stream.Readable()
readableStream.push('ping!')
readableStream.push('pong!')







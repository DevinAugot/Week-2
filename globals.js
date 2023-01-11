//Node js has a number of inbuilt globals like any other javascript framework. These inbuilt globals help us to develop any kind of new feature without writing much logic in our program. By using these built-in globals, we just need to call these predefined functions with proper parameters. In this blog, we shall explore inbuilt global variables in Node.js, and how we can declare and use them in our applications.

global.globalString = "This can be accessed anywhere!";
console.log(globalString); // Output: "This can be accessed anywhere!"

globalString = "Check me out now";
console.log(globalString); // Output: "Check me out now"

globalString = undefined;
console.log(globalString); // Output: undefined

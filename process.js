const [firstArg, secondArg, thirdArg, fourthArg] = process.argv;
console.log(process.argv);
console.log(`FIRST` + firstArg);
console.log(`SECOND` + secondArg);

console.log(`The final two args are: ${thirdArg} ${fourthArg}`);

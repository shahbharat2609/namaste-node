import fs from 'fs'

let a = 100;

//* Async  - Poll phase of the event loop
setImmediate(() => console.log("setImmediate"));


//* Async - Poll phase of the event loop
fs.readFile('./sample.txt', 'utf-8', () => {
    console.log("File Reading CB");
});

//* Async  - Timer phase of the event loop
setTimeout(() => console.log("Timer expired"), 0);

//* Synchronous -Will be pushed directly to the Call Stack 
function printA() {
    console.log("a= ", a)
}

printA();

//* Synchronous -Will be pushed directly to the Call Stack
console.log("Last line of the file");



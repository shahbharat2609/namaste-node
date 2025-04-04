import fs from 'fs'

let a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile('./sample.txt', 'utf-8', () => {
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(()=>console.log("process.nextTick"));

function printA() {
    console.log("a= ", a)
}

printA();

console.log("Last line of the file");



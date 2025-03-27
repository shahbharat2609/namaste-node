import fs from 'fs';
import https from 'https';

console.log('Hello World');

let a = 7896541;
let b = 181986;

https.get('https://dummyjson.com/products', (res) => {
    console.log("Fetched Data Successfully" + res);
})

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile('./sample.txt', 'utf-8', (err, data) => {
    console.log("File data: ", data);
})

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication code is ", c);

import crypto from 'crypto';

console.log('Hello World');

let a = 7896541;
let b = 181986;


//?pbkdf - Password Based Key Derivation Function

//!Sync Function - Will block the MAIN Thread
const key = crypto.pbkdf2Sync("password", "salt", 5000000, 64, "sha512");
console.log("First Key is generated");

//! Async Function
crypto.pbkdf2("password", "salt", 1000000, 64, "sha512", (err,key) => {
    console.log("Second Key is generated");
});

function multiplyFn(x,y) {
  const result = a * b;
  return result;
}

let c = multiplyFn(a,b);

console.log("Multiplication result is ",c);


console.log("Hello World");

let a = 1078698;
let b = 20986;

//?This callback will only be be pushed to call stack in V8 once the call stack is empty.
setTimeout(() => {
    console.log("call me ASAP");
}, 0);

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication result is ", c);


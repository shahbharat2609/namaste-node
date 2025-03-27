// import fs from 'fs';
import crypto from 'crypto';

process.env.UV_THREADPOOL_SIZE = 8;
// fs.readFile('./sample.txt','utf-8',(err,data)=>{
//     console.log('File Reading CB');
// })

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('1 - cryptoPBKDF2 done');
    
    
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('2 - cryptoPBKDF2 done');
    
    
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('3 - cryptoPBKDF2 done');
    
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('4 - cryptoPBKDF2 done');
    
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('5 - cryptoPBKDF2 done');
    
})
// streams

const{createReadStream} = require('fs')

//const stream = createReadStream('./NodeJS Basics/first.txt')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./NodeJS Basics/first.txt', {highWarterMark:9000})
 const stream = createReadStream('./NodeJS Basics/first.txt', {encoding:'utf-8'})

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>console.log(err))

// http 
const http = require('http')
const fs = require('fs')

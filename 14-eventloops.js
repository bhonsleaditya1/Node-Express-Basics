const {readFile} = require('fs')

console.log('started');
readFile('./NodeJS Basics/text.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");
})
console.log('starting next task');

console.log('first');
setTimeout(()=>{
    console.log('second');
},0)
console.log('third');

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    if(req.url==='/'){
        res.end('Home Page');
    }
    if(req.url === '/about'){
        for(let i=0;i<100;i++){
            for(let j = 0;j<100;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('about');
    }
    console.log(req.url);
    //res.end('Error Page');
})

server.listen(5000, ()=>{
    console.log('Server listening on port: 5000');
})


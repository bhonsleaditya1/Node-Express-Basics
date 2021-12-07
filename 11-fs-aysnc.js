const {readFile,writeFile, read} = require('fs')

console.log('start');
readFile('./chapter-1-NodeJS/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./chapter-1-NodeJS/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './chapter-1-NodeJS/read-sync-1.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err)
                    console.log(err);
                console.log('done with this task');
                console.log(result);
            }
        )
    })
    
})
console.log('starting next one');



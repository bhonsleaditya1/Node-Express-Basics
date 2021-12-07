const {readFile, writeFile} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data);
//             }
//         });
//     })
// }

// getText('./NodeJS Basics/text.txt')
//     .then(result=>console.log(result))
//     .catch(err=>console.log(err))

const start = async()=>{
    try{
        const first = await readFile('./NodeJS Basics/first.txt','utf-8')
        const second = await readFile('./NodeJS Basics/second.txt','utf-8')
        await writeFile('./NodeJS Basics/result.txt',`this is awsome : ${first} ${second}`);
        console.log(first,second);
    }catch(err){
        console.log(err);
    }
}

start()
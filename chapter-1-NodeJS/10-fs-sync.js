const {readFileSync,writeFileSync} = require('fs')

console.log('start');
const first = readFileSync('./chapter-1-NodeJS/first.txt','utf-8')
const second = readFileSync('./chapter-1-NodeJS/second.txt','utf-8')
console.log(first);
console.log(second);

writeFileSync(
    './result-sync.txt',
    `Here is result : ${first}, ${second}`, {flag:'a'}
)
console.log('done with task');
console.log('starting next one');
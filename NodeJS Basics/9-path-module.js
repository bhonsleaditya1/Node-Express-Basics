const path = require('path')

console.log(path.sep);
const filePath = path.join('/chapter-1/','text.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'/chapter-1','text,txt')
console.log(absolute);
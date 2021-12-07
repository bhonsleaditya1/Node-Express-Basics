// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-export-alternative')

// console.log(data);
// console.log(names)

require('./7-function')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
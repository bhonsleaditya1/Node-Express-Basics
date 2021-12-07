// npm - global command, comes with node
// npm --version

// local repository - use it pnly in this particular project
// npm i <dependency/packageName>

// global dependency - use it in any project
// npm install -g <packageName>


// package.json = manifest file stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init
// npm init -y

const _ = require('lodash')

const items = [1,[2,[3,[4,5]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
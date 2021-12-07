const EventEmitter = require('events')
const http = require('http')

const customEmitter = new EventEmitter()
const server = http.createServer()
customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} ${id}`);
})
customEmitter.emit('response')

customEmitter.on('response',()=>{
    console.log('logic');
})

customEmitter.on('response',()=>{
    console.log('logic');
})

customEmitter.emit('response','john',34)

server.on('request',(req,res)=>{
    res.end('Welcome')
})
server.listen(5000)
const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response',() => {
    console.log('data recieved');
});
customEmitter.on('response',(name,id)=>{
    console.log('heelo',name,id);
})
customEmitter.emit('response','helo',4);
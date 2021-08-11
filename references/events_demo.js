const EventEmitter=require('events');

//Create class
class MyEmitter extends EventEmitter{}

//init object
const myEmitter=new MyEmitter();

//event listener
myEmitter.on('event',()=>{ console.log('events fired') });

//init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
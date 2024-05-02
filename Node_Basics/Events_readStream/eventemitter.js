var events = require('events');
var eventEmitter = new events.EventEmitter();
//Event handler
var myEventHandler = function(){
    console.log('I heard a scream');
}
//Event handler assigned to an event
eventEmitter.on('scream',myEventHandler);
//Scream event
eventEmitter.emit('scream');

const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell()

schoolBell.on("ring",()=>{
    console.log("Yahoo! Class Shesh!");
})
schoolBell.on("ring",()=>{
    console.log("Dhat! Arekta class ache!");
})
schoolBell.on("broken",()=>{
    console.log("Oh no! class ki ar shesh hobena!");
})

schoolBell.emit("ring");
schoolBell.emit("broken");

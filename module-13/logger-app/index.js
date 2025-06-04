const path = require('path')
const inputArguments = process.argv.slice(2)
const fs = require('fs')

const text = inputArguments.join(" ")
const timestamp = new Date().toISOString();
const message = `${text} ${timestamp} \n`
console.log(timestamp)
if (!message){
    console.log("❌ Please provide a message to log");
    console.log("Example : node index.js Hello World!!");
    process.exit(1)
}

// const filePath = __dirname + "\\log.txt";
const filePath = path.join(__dirname,"log.txt")
fs.appendFile(filePath, message,{encoding:"utf-8"},()=>{
    console.log("Your Log added successfully");
})
console.log(filePath)

//1. synchronous
// 1. file read /I/o intensive task -> single thred -> not go to thread pool ->

//2. asynchronous
// file read -> single thread -> event loop -> thread pool -> taks completion

const fs = require("fs");

// console.log("Task 1")

// const text = "Learning File System";

// fs.writeFileSync("./hello.txt",text)

// console.log("Task 3")


// const data = fs.readFileSync("./hello.txt",{encoding:"utf-8"})

// console.log("Task 4")

// console.log(data)

// asynchronously 

// console.log("Task 1")
// let text = "node js";
// fs.readFile('./hello-world.txt', {encoding:"utf-8"}, (err,data)=>{
//     if(err){
//         console.log("Something went wrong!",err);
//         return
//     }
//     // text = data
//     // console.log(text,"inside readFile callback")
//     fs.writeFile("./hello.txt",data,{encoding:"utf-8"},(err)=>{
//         if(err){
//             console.log("Something went wrong!",err);
//             return
//         }
//         console.log("Written successfully")
//     })
// });
// console.log(text,"form console")
// console.log("Task 3")


const readStream  = fs.createReadStream("./hello-world.txt",{encoding:"utf-8"})
const writeStream  = fs.createWriteStream("./hello.txt",{encoding:"utf-8"})

readStream.on("data",(data)=>{
    console.log(data);
    writeStream.write(data,(err)=>{
        if (err){
            throw Error("Error",err)
        }
    })
})


readStream.on("error",(err)=>{
    if (err){
        throw Error("Error",err)
    }
})

// writeStream.on("error",(err)=>{
//     if (err){
//         throw Error("Error",err)
//     }
// })

readStream.on("end",()=>{
    console.log("reading ended")
    writeStream.end()
})

writeStream.on("finish",()=>{
    console.log("Written successfully")
})
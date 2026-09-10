const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname,"data", "student.txt");
fs.readFile(filePath,"utf8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Student Details:");
    console.log(data);
    console.log("File Name:", path.basename(filePath));
    console.log("Directory Name:", path.dirname(filePath));
    console.log("File Extension:", path.extname(filePath));
});
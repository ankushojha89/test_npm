//const intro = require("./1-intro.js");
const http = require("http");


// intro.abc("Hello")
// console.log(__dirname);
// console.log(__filename);

//intro.abc(path.join(__dirname,"1-intro.js"));

http.createServer((req,resp)=>{
    console.log(req)
resp.write("Wel come")
resp.end();
}).listen(3001);
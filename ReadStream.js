const {createReadStream} = require('fs');
const stream = createReadStream('./contents/bigFile.txt',{highWaterMark:70000,encoding:'utf8'});
stream.on('data',(result)=>
{
    console.log(result);
});
stream.on('error',(err)=>console.log(err));
console.log("Streaming")
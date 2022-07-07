const {readFile} = require('fs');
console.log("startinf here");
readFile('./contents/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed the task');
})
console.log('Next task')
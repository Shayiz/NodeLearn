const {readFile,writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


// const getText = (path) =>{
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if (err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }
// const start = async() => {
//     try{
//         const first = await getText('./contents/first.txt');
//         const second = await getText('./contents/second.txt');
//         console.log(first,second);
//     }
//     catch(error)
//     {
//         console.log(error)

//     }
// }
// start()

const start = async() => {
    try {
        const first = await readFilePromise('./contents/first.txt','utf8');
        const  second = await readFilePromise('./contents/second.txt','utf8');
        console.log(first,second);
        result = first + second;
        await writeFilePromise('./contents/third.txt',result);

    } catch (error) {
        console.log(error);
    }
}
start()
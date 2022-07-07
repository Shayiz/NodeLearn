const {readFile,writeFile} = require('fs').promises;

const start = async() => {
    try {
        const first = await readFile('./contents/first.txt','utf8');
        const  second = await readFile('./contents/second.txt','utf8');
        console.log(first,second);
        result = first + second;
        await writeFile('./contents/third.txt',result,{flag : 'a'});

    } catch (error) {
        console.log(error);
    }
}
start()
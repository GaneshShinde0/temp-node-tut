const { readFile, writeFile, write} = require('fs')
const { resourceLimits } = require('worker_threads')

console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{  // if you dont use utf8 then it will show buffer
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result 
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })   
    })
    console.log(result) 
})
console.log('starting next task')
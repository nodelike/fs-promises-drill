const fs = require('fs')

function createOutputDirectory(){
    return new Promise((resolve, reject) => {
        fs.mkdir("output", { recursive: true}, (err) => {
            if(err){
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

function createRandomFiles(){
    let createFilePromises = [];
    for(let i = 0; i < 10; i++){
        let data = {id: i, filename: `random-file-${i}.json`};
        let createFilePromise = new Promise((resolve, reject) => {
            fs.writeFile(`output/random-file-${i}.json`, JSON.stringify(data, null, 2), (err) => {
                if(err){
                    reject(err);
                } else {
                    resolve();
                }
            })

        })
        createFilePromises.push(createFilePromise)
    }

    return Promise.all(createFilePromises);
}

function deleteFiles(){
    let deleteFilePromises = [];

    for(let i = 0; i < 10; i++){
        let deletePromise = new Promise((resolve, reject) => {
            fs.unlink(`output/random-file-${i}.json`, (err) => {
                if(err){
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
        deleteFilePromises.push(deletePromise)
    }

    return Promise.all(deleteFilePromises);
}



module.exports = {
    createOutputDirectory, createRandomFiles, deleteFiles
}
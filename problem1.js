const fs = require('fs').promises

function createOutputDirectory(){
    return fs.mkdir("output", { recursive: true})
}

function createRandomFiles(){
    let createFilePromises = [];
    for(let i = 0; i < 10; i++){
        let data = {id: i, filename: `random-file-${i}.json`};
        createFilePromises.push(fs.writeFile(`output/random-file-${i}.json`, JSON.stringify(data, null, 2)))
    }

    return Promise.all(createFilePromises);
}

function deleteFiles(){
    let deleteFilePromises = [];

    for(let i = 0; i < 10; i++){
        deleteFilePromises.push(fs.unlink(`output/random-file-${i}.json`))
    }

    return Promise.all(deleteFilePromises);
}



module.exports = {
    createOutputDirectory, createRandomFiles, deleteFiles
}
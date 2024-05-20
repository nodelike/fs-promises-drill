const fs = require('fs').promises

async function createOutputDirectory(){
    await fs.mkdir("output", { recursive: true})
}

async function createRandomFiles(){
    let createFilePromises = [];
    for(let i = 0; i < 10; i++){
        let data = {id: i, filename: `random-file-${i}.json`};
        createFilePromises.push(fs.writeFile(`output/random-file-${i}.json`, JSON.stringify(data, null, 2)))
    }

    await Promise.all(createFilePromises);
}

async function deleteFiles(){
    let deleteFilePromises = [];

    for(let i = 0; i < 10; i++){
        deleteFilePromises.push(fs.unlink(`output/random-file-${i}.json`))
    }

    await Promise.all(deleteFilePromises);
}



module.exports = {
    createOutputDirectory, createRandomFiles, deleteFiles
}
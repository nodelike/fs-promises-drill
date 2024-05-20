const fs = require("fs")

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

function appendFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, data, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

function deleteFile(filename) {
    return new Promise((resolve, reject) => {
        fs.unlink(filename, (err) => {
            if(err){
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

module.exports = {
    readFile, writeFile, appendFile, deleteFile
}
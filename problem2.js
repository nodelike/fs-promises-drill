const fs = require("fs").promises;
const path = require("path");

function readFile(filename) {
    return fs.readFile(filename, "utf8");
}

function writeFile(filename, data) {
    return fs.writeFile(filename, data);
}

function appendFile(filename, data) {
    return fs.appendFile(filename, data);
}

function deleteFile(filename) {
    return fs.unlink(filename);
}

module.exports = {
    readFile, writeFile, appendFile, deleteFile
}
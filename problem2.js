const fs = require("fs").promises;

async function readFile(filename) {
    try {
        let data = await fs.readFile(filename, "utf8");
        return data;
    } catch (error) {
        console.log(`Error in reading file: ${error}`);
    }
}

async function writeFile(filename, data) {
    try {
        await fs.writeFile(filename, data);
    } catch (error) {
        console.log(`Error in writing to file: ${error}`);
    }
}

async function appendFile(filename, data) {
    try {
        await fs.appendFile(filename, data);
    } catch (error) {
        console.log(`Error in appending to file: ${error}`);
    }
}

async function deleteFile(filename) {
    try {
        await fs.unlink(filename);
    } catch (error) {
        console.log(`Error in deleting file: ${error}`);
    }
}

module.exports = {
    readFile, writeFile, appendFile, deleteFile
}
const { createOutputDirectory, createRandomFiles, deleteFiles } = require("./../problem1.js");

createOutputDirectory()
    .then(() => {
        console.log("Output Folder created!");
        createRandomFiles();
    }).then(() => {
        console.log("Files created successfully.");
        deleteFiles();
    }).then(() => {
        console.log("Deleted files successfully.");
    }).catch((error) => {
        console.log(`Error creating & deleting files ${error}`);
    })
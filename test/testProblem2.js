/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/
const { readFile, writeFile, appendFile, deleteFile } = require("./../problem2.js")

// 1.
readFile("./test/lipsum_2.txt")
    .then((data) => {
        let uppercaseData  = data.toUpperCase();
        let filename = "lipsum-upper.txt"

        return writeFile(filename, uppercaseData)
            .then(() => {
                appendFile("filenames.txt", filename + '\n');
            }).then(() => {
                return filename;
            })
    })

// 2.
    .then((filename) => {
        return readFile(filename)
            .then((data) => {
                let lowerCaseData = data.toLowerCase();
                let sentenceData = lowerCaseData.split('.').join('.\n');

                let filename = "lipsum-split.txt";
                return writeFile(filename, sentenceData)
                    .then(() => {
                        appendFile("filenames.txt", filename + '\n');
                    })
            })
    })

// 3.    
    .then(() => {
        return readFile("filenames.txt")
            .then((filenames) => {
                let files = filenames.trim().split("\n");

                let filePromises = files.map((file) => {
                    return readFile(file);
                });

                return Promise.all(filePromises)
            })

//4.
    }).then((filesData) => {
        let sortedData = filesData.join('\n').split('\n').sort().join('\n');
        let filename = "lipsum-sorted.txt"
        return writeFile(filename, sortedData)
            .then(() => {
                appendFile("filenames.txt", filename + '\n');
            });

//5.
    }).then(() => {
        return readFile("filenames.txt")
            .then((filenames) => {
                let files = filenames.trim().split("\n");

                let deletePromises = files.map((file) => {
                    return deleteFile(file);
                })

                return Promise.all(deletePromises);
            })
    }).catch((error) => {
        console.log(`Error in performing operations: ${error}`)
    }).then(() => {
        console.log("Operations performed successfully");
    })


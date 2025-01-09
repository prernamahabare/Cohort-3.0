// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.

// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name("counter")
    .description("Count number of words")
    .version('0.8.0');

program
    .command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log("Error while Counting" + err);
            } else {
                const countLines = data.split("\n").length;
                console.log(`There are ${countLines} No of lines in the ${file}`);
                console.log(data);
            }
        })
    })

program.parse();
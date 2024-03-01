//your JS code here. If required.
//const fileNames = [
 // "file1.txt",
  //"file2.txt",
 // "file3.txt",
 // "file4.txt",
 // "file5.txt",
//];

// do not change the code above
// add your code here
// script.js

// Import the built-in 'fs' module for file system operations
const fs = require('fs').promises;

// Define an async function to read and log file content
async function readFileAndLog(filename) {
    try {
        // Read the file asynchronously
        const data = await fs.readFile(filename, 'utf8');
        console.log(`Content from ${filename}: ${data}`);
    } catch (error) {
        console.error(`Error reading ${filename}: ${error.message}`);
    }
}

// Array of file names (adjust these to match your actual file names)
const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

// Call the async function for each file
async function main() {
    for (const filename of fileNames) {
        await readFileAndLog(filename);
    }
}

// Execute the main function
main();

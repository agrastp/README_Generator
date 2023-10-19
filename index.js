//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Variables to connect to modules to application
const generateMarkdown = require('./utils/generateMarkdown');
// const licenseBadege = require('./utils/badges');
const questions = require('./utils/questions');

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
//Do I need to have a separate function to write it or can I include it in the init function?

// Function to initialize app and write README file
function init() { 
    try {
        const answers = inquirer.prompt(questions);
        let answerData = generateMarkdown(answers);
        // include the licsense badge variable
        fs.writeFile('new-README.md', answerData)
    }
    catch(err){
        throw err;
    }
}

//Function call to initialize app
init();

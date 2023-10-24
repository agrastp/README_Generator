//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Variables to connect modules to application
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

//Returns as a promise rather than a callback
const writeFileAsync = util.promisify(fs.writeFile);


// Function to initialize app and write README file
async function init() { 
    try {
        const answers = await inquirer.prompt(questions);
        let answerData = generateMarkdown(answers);
        console.log(answers);
        await writeFileAsync('new-README.md', answerData);
    }
    catch(err){
        throw err;
    }
}


//Function call to initialize app
init();

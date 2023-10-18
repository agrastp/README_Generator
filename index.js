// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for this project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How can this project be used?',
            name: 'use',
        },
        {
            type: 'list',
            message: 'Select the license you used for this project.',
            name: 'license',
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla",
                "MIT",
                "Apache",
                "Boost",
            ]
        },
        {
            type: 'input',
            message: 'What is the URL to clone the repo for this project?',
            name: 'clone',
        },
        {
            type: 'input',
            message: 'What are the testing protocols for this project?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'List your contributors and resources you used for your project.',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What is the URL to the deployed site?',
            name: 'link',
        },
        {
            type: 'input',
            message: 'What is the URL to the project repository?',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
    ])

    .then((data) => {
        const mdPageContent = generateReadMe(data);
        fs.writeFile('README.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('sucessfully created README.md')
        );
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

const questions = [
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
    ]


    module.exports = {
        questions: questions,
      };
    

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name:'installation',
        message: 'Describe how to install your app'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your app'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which license your app should have',
        choices: ['MIT', 'GNU GPLv3', 'Apache']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Outline preferred methods of contribution'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests for your project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github user name'
    },
];



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    
    .then(data => {
       return generateMarkdown(data);
    })
    .then(data => {
        fs.writeFile('./product/README.MD', data, err => {
            if (err) {
                throw err;
            }
            console.log('new readme created!');
        })
    });
};

// Function call to initialize app
init();

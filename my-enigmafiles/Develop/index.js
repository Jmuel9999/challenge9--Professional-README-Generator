// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('');

// TODO: Create an array of questions for user input
const questionPrompt = () => {
    return inquirer.prompt([
        type: 'input',
        name: 'name',
        message: ''
    ])
    
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

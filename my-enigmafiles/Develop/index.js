// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('');

// TODO: Create an array of questions for user input
const questionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
            // Provide place to input title of project
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },  
        // Does the user want to add a table of contents?
        {
            type: 'confirm',
            name: 'confirmTOC',
            message: 'Would you like to add a table of contents?',
            default: true,
        },  
        {
            // If user wants table of contents items
            type: 'input',
            name: 'confirmTOC',
            message: 'Please provide your list items for your Table of Contents.',
            when: ({confirmTOC}) => confirmTOC
        },
        {
            // Project installation instruction prompt
            type: 'input',
            name: 'installation',
            message: 'Please provide your installation instructions for your project.',
            // validate user input
            validate: (installation) => {
                if (installation) {
                    return true;
                } else {
                    console.log('You MUST provide installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            // User project usage prompt
            type: 'input',
            name: 'usage',
            message: "Please provide your project's usage information",
            // validate user input
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('You MUST provide a usage guide for your product!');
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questionPrompt();
};

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const {prompt} = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//const generateMarkdown = require('');

// TODO: Create an array of questions for user input
const questionPrompt = () => {
    // Promise
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
        // Add a description of project
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief description of your project.',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('You MUST enter a valid description of your project!');
                    return false;
                }
            }
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
        {
            // License prompt
            type: 'checkbox',
            name: 'license',
            message: 'With what licensing did you build this project with?',
            choices: ['MIT', 'Apache', 'GPLv3']
        },
        {
            // Contributing guidelines prompt
            type: 'input',
            name: 'contribution',
            message: 'Please add contribution guidelines.',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please enter your contribution guidelines before proceeding!');
                    return false;
                }
            }
        },
        {
            // Project test instructions prompt
            type: 'input',
            name: 'testing',
            message: 'Please provide testing instructions for you project.',
            validate: testing => {
                if (testing) {
                    return true;
                } else {
                    console.log('You MUST include your testing instructions for your project.');
                    false;
                }
            }
        },
        {
            // Questions section prompts
            // GitHub username prompt
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub username!');
                    return false;
                }
            }
        },
        {
            // Email address prompt
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You MUST enter a valid email address!');
                    return false;
                }
            }
        }
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err);
        console.log(data)
    })
};

questionPrompt()
    .then(data => {
        // Creates readme file and takes the json object that we made (inquirer.prompt) and turns it into a string
        writeToFile('README.md', generateMarkdown(data));
        //console.log(data);
    })

// // TODO: Create a function to initialize app
// function init() {
    
// };

// Function call to initialize app
// init();

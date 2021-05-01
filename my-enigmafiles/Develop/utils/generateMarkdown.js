

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README Run this inside fs.writeFile to create a file with this info
function generateMarkdown(data) {
  // h1 markdown is #, h2 is ##....etc
  return `
# ${data.title}
## ${data.tableOfContents}
## ${data.installation}
## ${data.usage}
## ${data.license}
## ${data.contribution}
## ${data.testing}
## ${data.github}
## ${data.email}
`;
}

module.exports = generateMarkdown;

// {
//   type: 'input',
//   name: 'title',
//   message: 'What is the title of your project?',
//   // Provide place to input title of project
//   validate: nameInput => {
//       if (nameInput) {
//           return true;
//       } else {
//           console.log('Please enter the name of your project.');
//           return false;
//       }
//   }
// },  
// // Does the user want to add a table of contents?
// {
//   type: 'input',
//   name: 'confirmTOC',
//   message: 'Please enter your table of contents items.',
//   validate: confirmTOC => {
//       if (confirmTOC) {
//           return true;
//       } else {
//           console.log('Please enter your table of contents items.');
//           return false;
//       }
//   }
// },  
// {
//   // Project installation instruction prompt
//   type: 'input',
//   name: 'installation',
//   message: 'Please provide your installation instructions for your project.',
//   // validate user input
//   validate: (installation) => {
//       if (installation) {
//           return true;
//       } else {
//           console.log('You MUST provide installation instructions for your project!');
//           return false;
//       }
//   }
// },
// {
//   // User project usage prompt
//   type: 'input',
//   name: 'usage',
//   message: "Please provide your project's usage information",
//   // validate user input
//   validate: usage => {
//       if (usage) {
//           return true;
//       } else {
//           console.log('You MUST provide a usage guide for your product!');
//           return false;
//       }
//   }
// },
// {
//   // License prompt
//   type: 'checkbox',
//   name: 'license',
//   message: 'With what licensing did you build this project with?',
//   choices: []
// },
// {
//   // Contributing guidelines prompt
//   type: 'input',
//   name: 'contribution',
//   message: 'Please add contribution guidelines.',
//   validate: contribution => {
//       if (contribution) {
//           return true;
//       } else {
//           console.log('Please enter your contribution guidelines before proceeding!');
//           return false;
//       }
//   }
// },
// {
//   // Project test instructions prompt
//   type: 'input',
//   name: 'testing',
//   message: 'Please provide testing instructions for you project.',
//   validate: testing => {
//       if (testing) {
//           return true;
//       } else {
//           console.log('You MUST include your testing instructions for your project.');
//           false;
//       }
//   }
// },
// {
//   // Questions section prompts
//   // GitHub username prompt
//   type: 'input',
//   name: 'github',
//   message: 'What is your github username?',
//   validate: github => {
//       if (github) {
//           return true;
//       } else {
//           console.log('Please enter a valid GitHub username!');
//           return false;
//       }
//   }
// },
// {
//   // Email address prompt
//   type: 'input',
//   name: 'email',
//   message: 'What is your email address?',
//   validate: email => {
//       if (email) {
//           return true;
//       } else {
//           console.log('You MUST enter a valid email address!');
//           return false;
//       }
//   }
// }
// If there is a Table of Contents sections (default will be YES)
const contentsItems = itemData => {
  if (!itemData) {
    return ''
  } else {
    `${itemData}`
  }
};

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
# *${data.title}*
## Description
- ${data.description}
## Table of Contents
- ${data.tableOfContents}
* [${contentsItems()}]
## Installation
- ${data.installation}
## Usage
- ${data.usage}
## License
- ${data.license}
## Contributing
- ${data.contribution}
## Tests
- ${data.testing}
## Questions
- github.com/${data.github}
- ${data.email}
`;
}

module.exports = generateMarkdown;
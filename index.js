const inquirer = require("inquirer");
const fs = require("fs");


const startReadme = (response) => {
    const data = 
`# ${response.title} ![license](https://img.shields.io/badge/license-${response.license}-green)

## Description
${response.description}

## Table of Contents
- [Installation Guide](#installation-guide)
- [Usage Information](#usage-information)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)


## Installation Guide
${response.installation}

## Usage Information
${response.usage}

## License
This application is covered under the ${response.license} license.

## Contribution Guidelines
${response.contribution}

## Test Instructions
${response.test}

## Questions
Find my github at [http://github.com/${response.github}](http://github.com/${response.github})

Contact me by email: ${response.email}`

    if (!fs.existsSync('./output')){
        fs.mkdirSync('./output');
    }
    fs.writeFileSync('./output/README.md', data, (error) => 
    error ? console.error(error) : console.log("sucess"));
}

inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation Instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'License Type: ',
        name: 'license',
        choices: ['GPL', 'MIT', 'BSD']
    },
    {
        type: 'input',
        message: 'Github Username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email'
    }
]).then(startReadme);
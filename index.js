const inquirer = require("inquirer");
const fs = require("fs");

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
])
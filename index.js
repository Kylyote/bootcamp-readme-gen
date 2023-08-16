// Load required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Variables for tracking user options

// README generation file that will have responses to prompts inserted into it
function generateReadMe(title, description, installation, usage, license, contributing, tests, github, questionEmail) {
    return `#${title}

    ##Description:
    ============
    ${description}
    
    ${license}

    ##Table of Contents
    =================
     - [Installation](#installation)
     - [Usage](#usage)
     - [License](#license)
     - [Contributors](#contributors)
     - [Tests](#tests)
     - [Questions](#questions)
     
    ##Installation
    ============
    ${installation}
    
    ##Usage
    =====
    ${usage}
    
    ##License
    =======
    This project is covered under the ${license}.
    
    ##Contributors
    ============
    ${contributing}
    
    ##Tests
    =====
    ${tests}
    
    ##Questions
    =========
    For questions you can contact me at my [GitHub account](https://github.com/${github}).
    I can also be emailed at [${questionEmail}](${questionEmail}).`
}

// Inquirer questions and options. Need sections for Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
        {
            type:'input',
            message:'What is the title of your project?',
            name:'title'
        },
        {
            type:'input',
            message: 'Please describe the project you have created.',
            name: 'description'
        },
        {
            type:'input',
            message: 'What is the proper way to install your project?',
            name: 'installation'
        },
        {
            type:'input',
            message: 'What is the intended use of you program?',
            name:'usage'
        },
        {
            type:'list',
            message: 'What license is this project covered under? Use ARROW keys and ENTER to select.',
            name:'license',
            choices:['MIT License','Apache License 2.0','BSD License','GPL License','Mozilla Public License 2.0','GNU General Public Lisence (GPL)','GNU Lesser General Public License (LPGL)']
        },
        {
            type:'input',
            message:'Were there any other contributors?',
            name:'contributing'
        },
        {
            type:'input',
            message:'What kind of tests should a user run to make sure your program is running properly?',
            name:'tests'
        },
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'github'
        },
        {
            type:'input',
            message:'What is the email users can use to reach you?',
            name:'questionEmail'
        }
    ])
    .then((response) => {
    // Call the README generating block
    const readmeContent = generateReadMe(response.title, response.description, response.installation, response.usage, response.license, response.contributing, response.tests, response.github, response.questionEmail);

    fs.writeFile("README.md", readmeContent, 
        (err) => {
            err ? console.error(err) : console.log('Success!');
        })
    })
    

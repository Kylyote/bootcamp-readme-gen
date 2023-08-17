// Load required modules
const inquirer = require('inquirer');
const fs = require('fs');

// README generation file that will have responses to prompts inserted into it
function generateReadMe(title, description, installation, usage, license, contributing, tests, github, questionEmail,licenseImage){
return `# ${title}

${licenseImage}

## Description

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This project is covered under the ${license}.

## Contributors

${contributing}

## Tests

${tests}

## Questions

For questions you can contact me at my [GitHub account](https://github.com/${github}).
I can also be emailed at <a href="mailto:${questionEmail}">${questionEmail}</a>.

### [Back to Top](#Description)`
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
            type:'editor',
            message: 'Please describe the project you have created. Be sure to Exit and Save.',
            name: 'description'
        },
        {
            type:'editor',
            message: 'What is the proper way to install your project?',
            name: 'installation'
        },
        {
            type:'editor',
            message: 'What is the intended use of you program?',
            name:'usage'
        },
        {
            type:'list',
            message: 'What license is this project covered under? Use ARROW keys and ENTER to select.',
            name:'license',
            choices:['MIT License','Apache License 2.0','BSD License','Mozilla Public License 2.0','GNU General Public Lisence (GPL)','GNU Lesser General Public License (LPGL)'],
            default:'MIT License'
        },
        {
            type:'editor',
            message:'Were there any other contributors?',
            name:'contributing'
        },
        {
            type:'editor',
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
    let licenseImage = "";

    if (response.license === "MIT License"){
        licenseImage ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if(response.license === "Apache License 2.0"){
        licenseImage = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if(response.license === "BSD License"){
        licenseImage = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if(response.license === "Mozilla Public License 2.0"){
        licenseImage = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if(response.license === "GNU General Public Lisence (GPL)"){
        licenseImage = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else {
        licenseImage = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    }

    const readmeContent = generateReadMe(response.title, response.description, response.installation, response.usage, response.license, response.contributing, response.tests, response.github, response.questionEmail,licenseImage);

    fs.writeFile("Gen_README.md", readmeContent, 
        (err) => {
            err ? console.error(err) : console.log('Success!');
        })
    })
    

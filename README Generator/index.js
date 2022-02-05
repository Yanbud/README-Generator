// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mark = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = () => {
        return inquirer.prompt([{
                type: `input`,
                name: `username`,
                message: `What is your GitHub username?`
            },
            {
                type: `input`,
                name: `email`,
                message: `What is your email address?`
            },
            {
                type: `input`,
                name: `title`,
                message: `What is your project's name?`
            },
            {
                type: `input`,
                name: `desc`,
                message: `Please write a short description of our project`
            }, {
                type: `list`,
                name: `license`,
                message: `What kind of license should your project have?`,
                choices: [`MIT`, `APACHE 2.0`, `GPL 3.0`, `BSD 3`, `None`]
            }, {
                type: `input`,
                name: `install`,
                message: `What command should be run to install dependencies?`
            }, {
                type: `input`,
                name: `test`,
                message: `What command should be run to run tests?`
            }, {
                type: `input`,
                name: `usage`,
                message: `What does the user need to know about using the repo?`
            },
            {
                type: `input`,
                name: `contribute`,
                message: `What does the user need to know about contributing to the repo?`
            }
        ])
    }
    // TODO: Create a function to write README file
function writeToFile(filename, data) {
    return `${mark(data)} 
## Description 
${data.desc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\n${data.install}
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contributing
${data.contribute}
## Tests
To run tests, run the following command:
\n${data.test}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email} or visit my GitHub at <a href="https://github.com/${data.username}" target="_blank">${data.username}</a>.
    `;
}

// TODO: Create a function to initialize app
function init() {
    const filename = `README.md`;
    promptUser()
        .then((answers) => fs.writeFileSync(filename, writeToFile(filename, answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
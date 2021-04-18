//NPM Packages

const inquirer = require('inquirer');
const fs = require('fs');


//User-Prompted Questions

const questions = [
    {
    type: 'input',
    message: "What is the title of your Project?",
    name: 'title',
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("You must enter a response here.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Please describe your project:",
    name: "description",
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("You must enter a response here.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Please include any installation requirements:",
    name: 'installation',
  },
  {
    type: 'input',
    message: "Please descibe the projects usage:",
    name: 'usage',
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("You must enter a response here.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Please include any contributors here:",
    name: 'contributing',
  },
  {
    type: 'input',
    message: "Please provide any tests run for your code here:",
    name: 'tests',
  },
  {
    type: 'list',
    message: "Please select the license that your application is covered under.",
    choices: ["Apache License 2.0", "Boost Software License 1.0", "GNU General Public License v3.0", "MIT License", "Mozilla Public License 2.0", "None"],
    name: 'license',
  },
  {
    type: 'input',
    message: "Please include your Github profile name:",
    name: "github",
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("You must enter a response here.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Please include your email:",
    name: 'email',
    validate: function validEmail(text) {
        if (text.includes('@') && text.includes('.com')){
          return true
        } else {
          console.log( "You have entered an invalid email address!" )
        }
    }
  },
  ];


///// FUNCTION TO CREATE BADGE ON README //////

  function generateBadge(license) {
    if (license == "Apache License 2.0") {
        img = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
        desc = "https://choosealicense.com/licenses/apache-2.0/"
    } else if (license == "Boost Software License 1.0") {
        img = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
        desc = "https://choosealicense.com/licenses/bsl-1.0/"
    } else if (license == "GNU General Public License v3.0") {
        img = "https://img.shields.io/badge/License-GPLv3-blue.svg" 
        desc = "https://choosealicense.com/licenses/agpl-3.0/"
    } else if (license == "MIT License") {
        img = "https://img.shields.io/badge/License-MIT-yellow.svg"
        desc = "https://choosealicense.com/licenses/mit/"
    } else if (license == "Mozilla Public License 2.0") {
        img = "https://img.shields.io/badge/License-MIT-yellow.svg"
        desc = "https://choosealicense.com/licenses/mpl-2.0/"
    } else {
        img = ""
        desc = ""
    }

    return img
  }


///// FUNCTION TO GENERATE URL DIRECTIMG USER TO LICENSE INFO  //////

function generateDescription(license) {
    if (license == "Apache License 2.0") {
        desc = "https://choosealicense.com/licenses/apache-2.0/"
    } else if (license == "Boost Software License 1.0") {
        desc = "https://choosealicense.com/licenses/bsl-1.0/"
    } else if (license == "GNU General Public License v3.0") {
        desc = "https://choosealicense.com/licenses/agpl-3.0/"
    } else if (license == "MIT License") {
        desc = "https://choosealicense.com/licenses/mit/"
    } else if (license == "Mozilla Public License 2.0") {
        desc = "https://choosealicense.com/licenses/mpl-2.0/"
    } else {
        desc = ""
    }

    return desc
}


///// FUNCTION TO CREATE THE MARKDOWN BASED ON USER RESPONSE  //////

function generateMarkdown(response) {

const img = generateBadge(response.license)
const desc = generateDescription(response.license)

const page = 
(`# ${response.title}
\n![License](${img}) 
\n## Table of Contents
\n* [Description](#Description)
\n* [Installation](#Installation)
\n* [Usage](#Usage)
\n* [Contributors](#Contributors)
\n* [Tests](#Tests)
\n* [License](#License)
\n* [Questions](#Questions)
\n## Description
\n${response.description}
\n## Installation
\n${response.installation}
\n## Usage
\n${response.usage}
\n## Contributing
\n${response.contributing}
\n## Tests
\n${response.tests}
\n## License
\nThis application is licensed through [${response.license}](${desc}). Click link to view.
\n## Questions
\nIf you have any questions about this application:
\nPlease check out my repository at https://github.com/${response.github} or feel free to email me at ${response.email}
`)

  return page ;
}

///// FUNCTION INITIATING THE QUESTION PROMPT AND WRITING THE README FILE  //////


function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const markdown = generateMarkdown(response);
        fs.writeFile('TestREADMe.md', markdown, (err) =>
            err ? console.log(err) : console.log('Success'))
    })
}

init()
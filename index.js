const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
    type: 'input',
    message: "What is the title of your Project?",
    name: 'title',
  },
//   {
//     type: 'input',
//     message: "Please describe your project:",
//     name: "descrption",
//   },
//   {
//     type: 'input',
//     message: "Please include any installation requirements:",
//     name: 'installation',
//   },
//   {
//     type: 'input',
//     message: "Please descibe the projects usage:",
//     name: 'usage',
//   },
//   {
//     type: 'input',
//     message: "Please include any contributors here:",
//     name: 'contributing',
//   },
//   {
//     type: 'input',
//     message: "Please provide any tests run for your code here.",
//     name: 'tests',
//   },
  {
    type: 'list',
    message: "Please select the license that your application is covered under.",
    choices: ["Apache License 2.0", "Boost Software License 2.0", "GNU General Public License v3.0", "MIT License", "Mozilla Public License 2.0"],
    name: 'license',
  },
//   {
//     type: 'input',
//     message: "Please proivde contact information for users to contact you ",
//     name: 'questions',
//   },
  ];

  function gB(license) {

    if (license = "Apache License 2.0") {
        badge = "Apache%202.0-blue.svg"
    } else if (license = "Boost Software License 2.0") {
        badge = "Boost%202.0-lightblue.svg"
    } else if (license = "GNU General Public License v3.0") {
        badge = "GPLv3-blue.svg"    
    } else if (license = "MIT License") {
        badge = "MIT-yellow.svg"
    } else {
        badge = "MPL%202.0-brightgreen.svg"
    }

    return "https://img.shields.io/badge/License-" + badge
  }

// function generateLicenseUrl(license) {
//     let path;
    
//     switch (license) {
//       case "GNU AGPLv3":
//         path = "agpl-3.0";
//         break;
//       case "GNU GPLv3":
//         path = "gpl-3.0";
//         break;
//       case "GNU LGPLv3":
//         path = "lgpl-3.0";
//         break;
//       case "Mozilla Public License 2.0":
//         path = "mpl-2.0";
//         break;
//       case "Apache License 2.0":
//         path = "apache-2.0";
//         break;
//       case "MIT License":
//         path = "mit";
//         break;
//       case "Boost Software License 1.0":
//         path = "bsl-1.0";
//         break;
//       case "The Unlicense":
//         path = "unlicense";
//         break;
//     }
  
//     return `https://choosealicense.com/licenses/${path}/`;
//   }

  function generateMarkdown(response) {
    let img = gB(response.license)
    // var licenseUrl = generateLicenseUrl(response.license)
    var result = (`# ${response.title}
  \n![License](${img}) \n
  `)

  return result ;
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const markdown = generateMarkdown(response);
        fs.writeFile('ReadMe.md', markdown, (err) =>
            err ? console.log(err) : console.log('Success'))
    })
}

init()
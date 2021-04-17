const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the title of your Project?",
      name: 'Title',
    },
    {
      type: 'input',
      message: "Please describe your project:",
      name: "Description",
    },
    {
      type: 'input',
      message: "Please include any installation requirements:",
      name: 'Installation',
    },
    {
      type: 'input',
      message: "Please descibe the projects usage:",
      name: 'Usage',
    },
    {
      type: 'list',
      message: "Please select the license that your application is covered under.",
      choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0", "Boost Software License 2.0" ,"None"],
      name: 'License',
    },
    
    {
      type: 'input',
      message: "Please include any contributors here:",
      name: 'Contributing',
    },
  ])
  .then (response => {
    fs.writeFile("READMe.md", JSON.stringify(response, null, "\n").replace(/\"/g, ""), err => err ? console.log(err) : console.log ("success"))
  })
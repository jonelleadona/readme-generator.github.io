const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter title"
  }, 
  {
    type: "input",
    name: "description",
    message: "Please enter description"
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions"
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information"
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter contribution guidelines"
  },
  {
    type: "input",
    name: "test",
    message: "Please enter test instructions"
  },
  {
    type: "input",
    name: "username",
    message: "Please enter username"
  },
  {
    type: "input",
    name: "email",
    message: "Please enter email address "
  },
  {
    type: "list",
    name: "license",
    message: "Please select license",
    choices: ["Apache", "Boost","BSD"]
  }
];
 //console.log(questions);

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName,data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    writeToFile("README.md", generateMarkdown({...response}))
  })
}

// function call to initialize program
init();

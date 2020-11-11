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
  }
, 
  {
    type: "input",
    name: "description",
    message: "Please enter description"

  },

/*"Please enter installation instructions", 
"Please enter usage information", 
"Please enter contribution guidelines", 
"Please enter test instructions",
"Please enter username",
"Please enter email adress",*/
{
  type: "list",
  name: "license",
  message: "Please enter license",
  choices: ["Apache", "Boost","BSD"]
}
];
 console.log(questions);

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
//writeToFile("README.md", generateMarkdown({...Inquirer-Response}))
}

// function call to initialize program
init();

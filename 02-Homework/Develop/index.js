// TODO: Include packages needed for this application
var fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input for dot notation it is better to use single brackets could be used for phrases (name) declares varriable name
inquirer
  .prompt([
    {
      type: "input",
      name:"name",
      message: "What Is Your Project Name?"
    },
    {
      type: "input",
      name: "Description",
      message: "Brief Description Of The Application"
    },
    {
      type: "input",
      name: "usage",
      message: "Please Enter Usage Info"
    },
    {
      type: "input",
      name: "installation",
      message: "Enter Installation Instructions Here"
    },
    {
      type: "input",
      name:"contributions",
      message: "Any contribution Guidelines?"
    },
    {
      type: "input",
      name: "GitHub",
      message: "git"
    },
    {
      type: "input",
      name: "Email",
      message: "e-mail"
    },
    {
      type: "input",
      name: "Linkedin",
      message: "Enter Linkedin Profile Address."
    },
    {
      type: "input",
      name: "Test",
      message: "Enter Test Instructions Here."
    },
    {
      type: "list",
      name: "License",
      message: "What Liscence Did You Use",
      choices: [
        "GNU GPLv3, Mozilla Public License 2.0, Apache License 2.0, MIT License, Boost Software License 1.0, The Unlicense, BSD 3-Clause"
      ]
    }
  ])
  //function to write README file then passes in to the generate markdown
  .then((answers) => {
    const READMEcontent = generateMarkdown(answers);
    writeToFile(".output/README.md", READMEcontent);
  });

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
  // console.log( "Hello Please answner the following questions");
  promptUser(questions);
}
// Function call to initialize app
init();

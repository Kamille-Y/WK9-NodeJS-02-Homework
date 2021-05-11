// TODO: Include packages needed for this application
var fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input for dot notation it is better to use single brackets could be used for phrases (name) declares varriable name

  const questions=[
    {
      type: "input",
      name: "title",
      message: "What Is Your Project Name?"
    },
    {
      type: "input",
      name: "description",
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
      name: "contributions",
      message: "Any contribution Guidelines?"
    },
    {
      type: "input",
      name: "github",
      message: "GitHub link"
    },
    {
      type: "input",
      name: "email",
      message: "e-mail"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter Linkedin Profile Address."
    },
    {
      type: "input",
      name: "test",
      message: "Enter Test Instructions Here."
    },
    {
      type: "list",
      name: "license",
      message: "What Liscence Did You Use",
      choices: [
        "GNU GPLv3",
        "Mozilla Public License 2.0", 
        "Apache License 2.0", 
        "MIT License", 
        "Boost Software License 1.0",
         "The Unlicense", 
         "BSD 3-Clause",
      ]
    }
  ];
  function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
   }
  //function to write README file then passes in to the generate markdown
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses)=>{
    console.log("generateREADME");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  });
}
// Function call to initialize app
init();

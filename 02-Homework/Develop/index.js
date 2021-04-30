// TODO: Include packages needed for this application
var fs= require ("fs");
const inquirer = require("inquirer");
const utils= require("utils");
const generateMarkdown = require("./utils/generateMarkdown");

const generateREADME = (answers) =>

// TODO: Create an array of questions for user input
inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What Is Your Project Name?',
      },
       {
        type: 'input',
        name: 'Description',
        message: 'Brief Description Of The Application',
    },
    {
        type: 'input',
        name: 'Usage Info',
        message: 'Please Enter Usage Info',
      },
    {
        type: 'input',
        name: 'Installation Instructions',
        message: 'Enter Installation Instructions Here',
      },
      {
        type: 'input',
        name: 'Contributions Guidelines',
        message: 'Any contribution Guidelines?',
      },
      {
        type: 'input',
        name: 'GitHub Username',
        message: 'git',
      }, {
        type: 'input',
        name: 'Email',
        message: 'Enter your e-mail',
      },
      {
        type: 'input',
        name: 'Linkin Profile',
        message: 'Enter Linkin Profile Address.',
      },
      {
        type: 'input',
        name: 'Test Insttructions',
        message: 'Enter Test Instructions Here.',
      },
    {
        type: 'list',
        name: 'License',
        message: 'What Liscence Did You Use',
        choices: ['GNU GPLv3, Mozilla Public License 2.0, Apache License 2.0, MIT License, Boost Software License 1.0, The Unlicense, BSD 3-Clause'],
    }     

])
//function to write README file
function writeToFile(fileName, data){
  fs.writeFile(fileName, data, function(err){
    if (err){
      return console.log(err);
    }   
  })
}
// TODO: Create a function to initialize app
function init(){
  console.log( "Hello Please answner the following questions");
 promptUser(questions)
 .then(answers => {
   const READMEcontent= generateMarkdown(answers)
   writeToFile('.output/README.md', READMEcontent)
 });
}

// Function call to initialize app
init();

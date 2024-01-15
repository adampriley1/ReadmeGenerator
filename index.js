const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user //change and add content (see screenshot for how tickto did selector this week)
const questions = 
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter a short description of your project',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Are there any installation instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the application usage? ',
        },
        {
          type: 'input',
          name: 'credits',
          message: 'Enter project credits / creators ',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'What user testing is required?',
        },
        {
          type: 'list',
          name: 'licence',
          message: 'Select licence type',
          choices: ['MIT', 'Apache', 'GNU', 'Boost Software', 'Creative commons', 'Eclipse public'],

        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
        },
      
];


// function to write README file 
function writeToFile(answers) {
  const readmeContent = generateMarkdown(answers);
 
    fs.writeFile('APP_README.md',readmeContent, (err) =>
err ? console.error(err) : console.log('Successfully wrote README file!')
    )
};

// function to initialize program
function init() {
inquirer
  .prompt(questions)
  .then(writeToFile)
  .then(() => console.log('Successfully created README'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();


//from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under

//  * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README


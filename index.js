// All the dependency
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user to generate README.md
const questions = [

    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type:"input", 
        name:"github", 
        message:"what is your Github username?"
    },

    {
        type:"input",
        name:"email", 
        message: "what is your email?"
    },
    {
        type:"input",
        name:"description",
        message:"Describe about your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    },
    {
        type: "list",
        name: "questions",
        message: "What is your preferred method of communication?",
        choices: ['email', 'phone', 'telekinesis'],
      },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

// function call to initialize program
init();
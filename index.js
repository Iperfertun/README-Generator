const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user to generate README.md
const questions = [

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
        message:"what is name of your project:"
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

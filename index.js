// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = async () => {
    const data = await inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'projAuthor',
        //     message: 'Author of Project: ',
        // },
        // {
        //     type: 'input',
        //     name: 'projTitle',
        //     message: 'Title of Project: ',
        // },
        // {
        //     type: 'input',
        //     name: 'projDescription',
        //     message: 'Description of Project: ',
        // },
        // {
        //     //object
        //     type: 'checkbox',
        //     name: 'projInstallation',
        //     message: 'Softwares to Install:  ',
        //     choices: ["Google Chrome or Web Browser", "Node.js", "npm modules", "APIs"]
        // },
        // {
        //     type: 'input',
        //     name: 'npmInstall',
        //     message: 'Insert npm commands installed (separate by commas, if none type N/A): ',
        // },
        // {
        //     type: 'input',
        //     name: 'projUsage',
        //     message: 'Usage of Project: ',
        // },
        // {
        //     type: 'input',
        //     name: 'screenshotURL',
        //     message: 'Enter image URL for screenshot of Project (relative path): ',
        // },
        // {
        //     type: 'list',
        //     name: 'projLicense',
        //     message: 'List of Licenses your project has:  ',
        //     choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None', 'Drivers'],
        // },
        {
            type: 'confirm',
            name: 'projGuidelines',
            message: 'Add Guidelines for Contribution? ',
        },
        {
            type: 'confirm',
            name: 'projTesting',
            message: 'Add Testing Section? ',
        },
        // {
        //     type: 'input',
        //     name: 'projQuestion1',
        //     message: 'Enter GitHub Username: ',
        // },
        // {
        //     type: 'input',
        //     name: 'projQuestion2',
        //     message: 'Enter GitHub profile link: ',
        // },
        // {
        //     type: 'input',
        //     name: 'projQuestion3',
        //     message: 'Enter email address: ',
        // },
        // {
        //     type: 'checkbox',
        //     name: 'projContributors',
        //     message: 'Who contributed to this project?  ',
        //     choices: ['Ned', 'Spider-Man', 'Green-Goblin', 'Doc-Ock', 'Multiverse Me']
        // },
    ])
        .then((data) => { 

            writeToFile('test', data) 
        
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

//    const { projAuthor, projTitle, projDescription, projInstallation, npmInstall, projUsage, screenshotURL,
//          projLicense, projGuidelines, projTesting, projQuestion1, projQuestion2, Contributors
//          } = data;

     generateMarkdown(data);


    // fileName = 'READme.md'
    // let content = generateMarkdown(data)
    // fs.watchFile(fileName, content);
    // console.log("READme Created!")
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

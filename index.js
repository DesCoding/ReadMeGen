// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'Describe',
    message: 'How would you describe your project?',
},
{
    type: 'input',
    name: 'Install',
    message: 'How would clients install your page?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'How would clients use your page?',
},
{
    type: 'list',
    message: 'Please select the license you would like to add to your README.',
    name: 'Licesne',
    choices: [
    'Apache license 2.0',
    'Boost Software License 1.0',
    'BSD 2-clause "Simplified" license',
    'BSD 3-clause license',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 1.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Lesser General Public License v3.0',
    'MIT',
    'Mozilla Public License 2.0',
    'The Unlicense'],
},
{
    type: 'input',
    name: 'Contributors',
    message: 'Please list anyone who contributed to your page.',
},
{
    type: 'input',
    name: 'Test',
    message: 'Please describe how your page was tested.',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub profile name?',
},
{
    type: 'input',
    name: 'eMail',
    message: 'What is your e-mail address?',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("README.md", markdown(data));
})
}

// Function call to initialize app
init();


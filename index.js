// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'Describe',
    message: 'How would you describe your page?',
},
{
    type: 'input',
    name: 'Install',
    message: 'How would you install your page?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'How would you use your page?',
},
{
    type: 'list',
    message: 'What type of license do you prefer?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
},
{
    type: 'input',
    name: 'Contributors',
    message: 'Who contributed to your page?',
},
{
    type: 'input',
    name: 'Test',
    message: 'Who how was your page tested?',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub projile name?',
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

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
//tenary oppertor - if then type in E6 to make dry
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
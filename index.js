// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username (required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address (required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter a project title (required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a project title');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description (required)',
    validate: description => {
      if (description) {
        return true;
      } else {
        console.log('Please enter a description');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'liscense',
    choices: ['Choice A','Choice B','Choice C','Choice D']
  },
  {
    type: 'input',
    name: 'install',
    message: 'Describe how to install your project (required)',
    validate: installDesc => {
      if (installDesc) {
        return true;
      } else {
        console.log('Please describe how to install your project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of your app (required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please describe usage');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Describe how to contribute (required)',
    validate: contrInput => {
      if (contrInput) {
        return true;
      } else {
        console.log('Please describe how to contribute');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Describe test instructions (required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please add test instructions');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(readmeData => {
    return generateReadMe(readmeData);
  })
  .then(readmeMD => {
    console.log(readmeMD);
  });

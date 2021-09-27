// adds inquirer, template script and copy file script
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');
const { writeFile } = require('./utils/writeCopyFile.js')

// array of questions to be pulled by inquirere
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
    name: 'license',
    choices: ['GNU GPLv3 License','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','ISC License','The Unlicense','No License']
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

// starts inquirer and prompts all questions an return results object
function init() {
  return inquirer.prompt(questions);
}

// initiates the app
init()
  // takes the answers and send it to the readme-template and generates the page
  .then(readmeData => {
    return generateReadMe(readmeData);
  })
  // takes the generated page and copies it to the distribution folder
  .then(readmeMD => {
    return writeFile(readmeMD);
  })
  // takes the writeFile promise and displays if successful or failed
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  // logs the error if writeFile fails
  .catch(err => {
    console.log(err);
  });

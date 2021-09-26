const dedent = require('dedent');

const licenseBadge = licenseChoice => {
  switch (licenseChoice) {
    case 'Choice A':
      return `Choice A badge code`;
    case 'Choice B':
      return `Choice B badge code`;
    case 'Choice C':
      return `Choice C badge code`;
    case 'Choice D':
      return `Choice D badge code`;
    case 'No License':
      return '';
    default:
      console.log('An error has occured creating the license bade, none will be added');
      return '';
  }
}

const licenseLink = licenseChoice => {
  switch (licenseChoice) {
    case 'Choice A':
      return `Choice A link and desc code`;
    case 'Choice B':
      return `Choice B link and desc code`;
    case 'Choice C':
      return `Choice C link and desc code`;
    case 'Choice D':
      return `Choice D link and desc code`;
    case 'No License':
      return '';
    default:
      console.log('An error has occured creating the license link and description, none will be added');
      return '';
  }
}

module.exports = templateData => {
  // console.log(templateData);

  const {github, email, title, description, license, install, usage, contributing, test} = templateData

  return dedent`
  # ${title}
  ${licenseBadge(license)}
  ## Description
  - ${description}
  ## Table of Contents
  - [Go to Installation Instructions](#install-instructions)
  - [Go to Usage](#usage)
  - [Go to License section](#license)
  - [Go to Contribution](#contribution)
  - [Go to Test Instructions](#test-instructions)
  - [Go to Questions](#questions)
  ## Install Instructions
  - ${install}
  ## Usage
  - ${usage}
  ## License
  - ${licenseLink(license)}
  ## Contribution
  - ${contributing}
  ## Test Instructions
  ${test}
  ## Questions
  - [GitHub](https://github.com/${github})
  - [Email Me](mailto:${email})
  `;
};
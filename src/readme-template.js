const dedent = require('dedent');

var licenseObject = {
  'Choice A': {
    badge: `Choice A badge `,
    link: `Choice A link`
  },
  'Choice B': {
    badge: `Choice B badge `,
    link: `Choice B link`
  },
  'Choice C': {
    badge: `Choice C badge `,
    link: `Choice C link`
  },
  'Choice D': {
    badge: `Choice D badge `,
    link: `Choice D link`
  },
  'No License': {
    badge: `No License badge `,
    link: `No License link`
  }
}

module.exports = templateData => {
  // console.log(templateData);

  const {github, email, title, description, license, install, usage, contributing, test} = templateData;
  const licenseChoice = licenseObject[license];

  return dedent`
  # ${title}
  ${licenseChoice.badge}
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
  - ${licenseChoice.link}
  ## Contribution
  - ${contributing}
  ## Test Instructions
  ${test}
  ## Questions
  - [GitHub](https://github.com/${github})
  - [Email Me](mailto:${email})
  `;
};
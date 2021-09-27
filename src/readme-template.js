const dedent = require('dedent');

const licenseObject = {
  'GNU GPLv3': {
    badge: `https://img.shields.io/badge/License-GNU%20GPLv3-yellow`,
    link: `https://www.gnu.org/licenses/gpl-3.0.en.html`
  },
  'Mozilla Public License 2.0': {
    badge: `https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-yellow`,
    link: `https://www.mozilla.org/en-US/MPL/2.0/`
  },
  'Apache License 2.0': {
    badge: `https://img.shields.io/badge/License-Apache%20License%202.0-green`,
    link: `https://www.apache.org/licenses/LICENSE-2.0`
  },
  'MIT License': {
    badge: `https://img.shields.io/badge/License-MIT%20License-green`,
    link: `https://opensource.org/licenses/MIT`
  },
  'Boost Software License 1.0': {
    badge: `https://img.shields.io/badge/License-Boost%20Software%20License%201.0-green`,
    link: `https://www.boost.org/LICENSE_1_0.txt`
  },
  'ISC License': {
    badge: `https://img.shields.io/badge/License-ISC%20License-green`,
    link: `https://opensource.org/licenses/ISC`
  },
  'The Unlicense': {
    badge: `https://img.shields.io/badge/License-The%20Unlicense-brightgreen`,
    link: `https://unlicense.org/`
  },
  'No License': {
    badge: ``,
    link: ``
  }
};

const licenseSection = (license, licenseLink) => {
  if (license === "No License") {
    return`This project does not have a license associated with it`;
  } else {
    return`This application is coved under the ${license}, click [this link](${licenseLink}) to see more details.`;
  };
};

const licenseBadge = (license, licenseBadgeLink, licenseLink) => {
  if (license === "No License") {
    return``;
  } else {
    return`- [![${license}](${licenseBadgeLink})](${licenseLink})`
  };
};

module.exports = templateData => {

  const {github, email, title, description, license, install, usage, contributing, test} = templateData;
  const licenseChoiceObj = licenseObject[license];

  return dedent`
  # ${title}
  ${licenseBadge(license, licenseChoiceObj.badge, licenseChoiceObj.link)}
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
  - ${licenseSection(license, licenseChoiceObj.link)}
  ## Contribution
  - ${contributing}
  ## Test Instructions
  - ${test}
  ## Questions
  - [GitHub](https://github.com/${github})
  - [Email Me](mailto:${email})
  `;
};
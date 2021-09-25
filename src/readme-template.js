module.exports = templateData => {
  // console.log(templateData);

  const {github, email, title, description, liscense, install, usage, contributing, test} = templateData

  return`
  # ${title}
  ## Description
  - ${description}
  ## Install Instructions
  - ${install}
  ## Usage
  - ${usage}
  ## Contribution
  - ${contributing}
  ## Test Instructions
  ${test}
  ## Questions
  ${github}
  ${email}
  `;
};
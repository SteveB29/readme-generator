
const liscenseBadge = liscenseChoice => {
  switch (liscenseChoice) {
    case 'Choice A':
      return `Choice A badge code`;
    case 'Choice B':
      return `Choice B badge code`;
    case 'Choice C':
      return `Choice C badge code`;
    case 'Choice D':
      return `Choice D badge code`;
    case 'No Liscense':
      return '';
    default:
      console.log('An error has occured creating the liscense, none will be added');
      return '';
  }
}

const liscenseLink = liscenseChoice => {
  switch (liscenseChoice) {
    case 'Choice A':
      return `Choice A link and desc code`;
    case 'Choice B':
      return `Choice B link and desc code`;
    case 'Choice C':
      return `Choice C link and desc code`;
    case 'Choice D':
      return `Choice D link and desc code`;
    case 'No Liscense':
      return '';
    default:
      return '';
  }
}

module.exports = templateData => {
  // console.log(templateData);

  const {github, email, title, description, liscense, install, usage, contributing, test} = templateData

  return`
  # ${title}
  ${liscenseBadge(liscense)}
  ## Description
  - ${description}
  ## Install Instructions
  - ${install}
  ## Usage
  - ${usage}
  ## Liscense
  - ${liscenseLink(liscense)}
  ## Contribution
  - ${contributing}
  ## Test Instructions
  ${test}
  ## Questions
  ${github}
  ${email}
  `;
};
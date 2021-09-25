
const liscenseBadge = liscenseChoice => {
  switch (liscenseChoice) {
    case 'Choice A':
      return `Choice A badge code`
    case 'Choice B':
      return `Choice B badge code`
    case 'Choice C':
      return `Choice C badge code`
    case 'Choice D':
      return `Choice D badge code`
    default:
      break
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
  ## Contribution
  - ${contributing}
  ## Test Instructions
  ${test}
  ## Questions
  ${github}
  ${email}
  `;
};
//generates license badge based on user input
function licenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  };
};


//function to generate markdown for README
module.exports = function generateMarkdown(data) {
  const {title, description, installation, usage, license, contributing, tests, github} = data;
  return `
  # ${title}
  ${licenseBadge(license)}
  ## Contents
  [Description](#description)  
  [Usage](#usage)  
  [Installation](#installation)  
  [License](#license)  
  [Contribution](#contribution)  
  [Tests](#tests)  
  [Questions](#questions)  
  ## Description
  ${description}
  ## Usage
  ${usage}
  ## Installation
  ${installation}
  ### License
  ${license}
  ### Contribution
  ${contributing}
  ### Tests
  ${tests}
  ### Questions
  Submit questions to github.com/${github}  
`;
};


// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)


  ## Description

  ${data.description}

  ## Installation Instructions 
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;

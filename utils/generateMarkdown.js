// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ${data.title}

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

  ## License

  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)

`;
}

module.exports = generateMarkdown;

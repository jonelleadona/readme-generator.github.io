// function to generate markdown for README
function generateMarkdown(data) {
 
  
 
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)


  ## Description

  ${data.description}

  ## Installation Instructions 

  ${data.installation}

  ## Usage Information

  ${data.usage}

  ## Contribution Guidelines 

  ${data.contribution}

  ## Tests Instructions

  ${data.test}

  ## Questions

  GitHub Username: https://github.com/${data.username}

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;

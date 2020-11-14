function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)

  ## Table of Contents
  
  [Description](#description)  
  [Installation Instructions](#installation-instructions)  
  [Usage Information](#usage-information)  
  [Contribution Guidelines](#contribution-guidelines)  
  [Test Instructions](#test)  
  [Questions](#questions)  

  ## Description

  ${data.description}

  ## Installation Instructions 

  To install necessary dependencies, run the following command:  

  ${data.installation}

  ## Usage Information

  ${data.usage}

  ## License
  
  This project is licensed by ${data.license}

  ## Contribution Guidelines 

  ${data.contribution}

  ## Tests Instructions

  To run test, run the following commad:  

  ${data.test}

  ## Questions

  GitHub Username: https://github.com/${data.username}

  Email: ${data.email}  

  Please email me at the following email address with any question and feedback between the hours of 9AM - 5PM M-F
`;
}

module.exports = generateMarkdown;

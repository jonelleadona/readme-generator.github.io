// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## License

  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)

`;
}

module.exports = generateMarkdown;

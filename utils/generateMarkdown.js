// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.use}
  
  Website: ${data.link}

  ## Credits
  
  ${data.contribute}
  
  ## License
  
  ${data.license}
  
  
  ## Badges
  
  
  
  ## How to Contribute
  
  If you would like to contribute to my project, I have listed my repository URL and email below.  Please reach out with any questions.
  
  Name: ${data.name}
  Repository: ${data.repo}
  E-mail: ${data.email}
  
  ## Tests
  
  ${data.tests}
`;
}

module.exports = generateMarkdown;

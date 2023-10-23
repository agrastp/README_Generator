
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.renderLicenseBadge}
  ${data.description}


  You can visit the deployed site here: ${data.link}
  

----------------------
  ## Table of Contents 
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contribute](#contribute)
  - [Contact](#contact)



---------------------- 
  ## Installation
  ${data.install}
  



----------------------
  ## Usage
  ${data.use}
  
  Website: ${data.link}


----------------------
  ## Credits
  
  ${data.contribute}
  



----------------------
  ## License
  
  ${data.license}
  





----------------------
  ## Tests
  
  ${data.test}
  





----------------------
  ## Contribute
  
  To contribute to this application, create a pull request.
  Here are the steps:
  1. Fork the repo
  2. Create a feature branch (git checkout -b NAME-HERE)
  3. Commit your new feature (git commit -m 'Add some feature')
  4. Push your branch (git push)
  5. Create a new Pull Request

  Your code will be reviewed and merged.
  
-----------------------
  ##Contact 
  Name: ${data.name}
  Repository: ${data.repo}
  E-mail: ${data.email}
  
  
`;
}

module.exports = generateMarkdown;

// Returns a license badge based on which license is passed in

function renderLicenseBadge(value) {
  if (value === "GNU AGPL v3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (value === "GNU GPL v3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPL v3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost") {
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    value === null;
  } return "";
}

//Generates the README file once data is passed in and function init is initiated

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${renderLicenseBadge(data.license)} <br>
  ${data.description}<br>


  You can visit the deployed site here: ${data.link}
  

----------------------

  ## Table of Contents 
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)



---------------------- 

  ## Installation
  ${data.install}
  



----------------------

  ## Usage
  ${data.use}<br>
  
  Website: ${data.link}


----------------------

  ## Credits
  
  ${data.credits}
  



----------------------

  ## License
  
  This project is licensed under the terms of the ${data.license} license.  Click the badge at the top of the README to get more information about the license.
  





----------------------

  ## Tests
  
  ${data.test}
  





----------------------

  ## Contributing
  
  ${data.contributing}
  
-----------------------

  ## Questions

  Name: ${data.name}<br>
  Repository: ${data.repo}<br>
  Clone: ${data.clone}<br>
  E-mail: ${data.email}
  
  
`;
}

module.exports = generateMarkdown;

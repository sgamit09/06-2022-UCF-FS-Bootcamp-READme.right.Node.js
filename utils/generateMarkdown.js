// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } if (license === "None") {
        return `None`
    } if (license === "Drivers") {
        return `Beep Beep`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if (license !== "None") {
        return ` \n * {license}{#}`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `# License

          This project is licensed under ${license}.`
    } else {
        return "";
    }
}

function renderTestingSection(Testing){
    if (Testing === true) {
        return `1. Fork Code  
                2. Copy Code onto Local
                3. Install any npmlol 
                4. Run Code 
                5. Profit`
    } else {
        return "N/A";
    }
}

function renderGuidelinesSection(guidelines){
    if (guidelines === true) {
        return `If you have a suggestion that would make this better, please fork the repo and create a pull request. 
                You can also simply open an issue with the tag enhancement. Don't forget to give the project a star! 
                Thanks again!`
    } else {
        return "N/A";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let licenseSectionContent = renderLicenseSection(data.projLicense);
    let licenseSelectionBadge = renderLicenseBadge(data.projLicense);
    let licenseLinkBadge = renderLicenseLink(data.projLicense);
    let testingSection = renderTestingSection(data.projTesting);
    let guidelineSection = renderGuidelinesSection(data.projGuidelines);

    return `
# ${data.projTitle}

## Table of Contents 📚

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Licenses](#licenses)
5. [Testing](#testing)
6. [Contribution](#contribution)
7. [Questions](#questions)
8. [GitHub](#gitHub)
9. [Contributors](#contributors)

# Description 📖

${data.projDescription}


# Installation 🧰

## Softwares Needed 🔍

* ${data.projInstallation[0]}
* ${data.projInstallation[1]}
* ${data.projInstallation[2]}

# Usage 👨🏻‍💻

${data.projUsage}

![image](${data.screenshotURL})

${licenseSectionContent} 🗝

${licenseSelectionBadge}${licenseLinkBadge}

# Testing 🧮

${testingSection}

# Contribution 👨‍💻

${guidelineSection}

# Questions 🔮

* ${data.projAuthor} 🤴 -  ${data.projQuestion3} 📧 

# GitHub 💼

* ${data.projQuestion1} 🤴  - ${data.projQuestion2} 🔗

# Contributors ⚔️

* ${data.projContributors[0]}
* ${data.projContributors[1]}
* ${data.projContributors[2]}
* ${data.projContributors[3]}
* ${data.projContributors[4]}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    } if (license === "MIT license") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } if (license === "ISC License") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    } if (license === "None") {
        return `None`
    } if (license === "Drivers") {
        return `Beep Beep`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

    if (license === "Apache 2.0") {
        return `(https://opensource.org/licenses/Apache-2.0)`
    } if (license === "MIT license") {
        return `(https://opensource.org/licenses/MIT)`
    } if (license === "ISC License") {
        return `(https://opensource.org/licenses/ISC)`
    } if (license === "None") {
        return `None`
    } if (license === "Drivers") {
        return `Beep Beep`
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License
          
          This project is licensed under ${license}.`
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    projTestingContent = "1. Fork Code from Github 2. Copy Code onto Local 3. Install any npm 4. Run Code 5. Profit"
    projGuidelinesContent = "If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag enhancement. Don't forget to give the project a star! Thanks again!"

    //If statements to add Project Testing and Guidelines Information   
    if (data.projTesting === true && data.projGuidelines === true) {
        let projTesting = projTestingContent;
        let projGuidelines = projGuidelinesContent;
        return projGuidelines, projTesting;
    } else if (data.projTesting === true && data.projGuidelines === false) {
        let projTesting = projTestingContent
        let projGuidelines = "N/A";
        return projGuidelines, projTesting;
    } else if (data.projTesting === false && data.projGuidelines === true) {
        let projTesting = "N/A";
        let projGuidelines = projGuidelinesContent;
        return projGuidelines, projTesting;
    } else if (data.projTesting === false && data.projGuidelines === false) {
        let projTesting = "N/A";
        let projGuidelines = "N/A";
        return projGuidelines, projTesting;
    }

    let licenseSectionContent = renderLicenseSection(data.license);
    let licenseSelectionBadge = renderLicenseBadge(data.license);
    let licenseLinkBadge = renderLicenseBadge(data.license);



    return `
    # ${data.projTitle}

    # Table of Content

    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[profile](#profile)


    ##Description: 

    ${data.projDescription}


    ##Installation:

    Softwares Needed:

    * ${data.projInstallation[0]}
    * ${data.projInstallation[1]}
    * ${data.projInstallation[2]}
    * ${data.projInstallation[3]}


    ##Usage:

    ${data.projUsage}

    ![Project Screenshot] (${data.screenshotURL})


    ${licenseSectionContent}

    ${licenseSelectionBadge}${licenseLinkBadge}


    ##Testing:

    ${projTesting}


    ##Contribution:

    ${projGuidelines}


    ##Questions:
    For any questions,

    * ${data.projAuthor} -  ${data.projQuestion3}


    ##GitHub profile:
    * ${data.projQuestion1} - ${data.projQuestion2}

    ## Contributors:

    * ${data.projContributors[0]}
    * ${data.projContributors[1]}
    * ${data.projContributors[2]}
    * ${data.projContributors[3]}
    * ${data.projContributors[4]}
    `;
}


module.exports = generateMarkdown;

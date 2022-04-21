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
// this works!!!
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

  
##description: 

${data.projDescription}

    
##installation:

Softwares Needed:
* ${data.projInstallation[0]}
* ${data.projInstallation[1]}
* ${data.projInstallation[2]}
* ${data.projInstallation[3]}


##usage:

${data.projUsage}

![Project Screenshot] (${data.screenshotURL})

    
##licenses:

${data.projLicense}


##test:

//add if statement? if Y then add ... if not then add N/A
${data.projTesting}


##contribution:

//add if statement? if Y then add ... if not then add N/A
${data.projGuidelines}


##Questions:
For any questions,

* ${data.projAuthor} -  ${data.projQuestion3}


##GitHub profile:
* ${data.projQuestion1} - ${data.projQuestion2}

## Contributors:

* ${data.projContributors[0]}
* ${data.projContributors[0]}
* ${data.projContributors[0]}
`;
}


module.exports = generateMarkdown;

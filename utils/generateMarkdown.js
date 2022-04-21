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

if(data.projTesting === 'Yes' && data.projGuidelines === 'Yes'){
    let projTesting =  "Insert Project Testing";
    let projGuidelines = "Insert Project Guidelines";
    return projGuidelines, projTesting;  
}
console.log(projTesting);
console.log(projGuidelines);
// } else if (data.projTesting === 'Yes' && data.projGuidelines === 'No'){
//     let projTesting =  "Insert Project Testing";
//     let projGuidelines = "N/A";
//     console.log(projTesting);
//     console.log(projGuidelines);
//     return projGuidelines, projTesting; 
// } else if (data.projTesting === 'No' && data.projGuidelines === 'No') {
//     let projTesting =  "N/A";
//     let projGuidelines = "N/A";
//     console.log(projTesting);
//     console.log(projGuidelines);
//     return projGuidelines, projTesting;   
// }

// console.log(data.projTitle);
// console.log(data.projDescription);
// console.log(data.projInstallation);

// return `
// # ${data.projTitle}

// # Table of Content

// -[description](#description)
// -[installation](#installation)
// -[usage](#usage)
// -[licenses](#licenses)
// -[contribution](#contribution)
// -[test](#test)
// -[username](#username)
// -[profile](#profile)

  
// ##Description: 

// ${data.projDescription}

    
// ##Installation:

// Softwares Needed:

// * ${data.projInstallation[0]}
// * ${data.projInstallation[1]}
// * ${data.projInstallation[2]}
// * ${data.projInstallation[3]}


// ##Usage:

// ${data.projUsage}

// ![Project Screenshot] (${data.screenshotURL})

    
// ##Licenses:

// ${data.projLicense}


// ##Testing:

// ${projTesting}


// ##Contribution:

// ${projGuidelines}


// ##Questions:
// For any questions,

// * ${data.projAuthor} -  ${data.projQuestion3}


// ##GitHub profile:
// * ${data.projQuestion1} - ${data.projQuestion2}

// ## Contributors:

// * ${data.projContributors[0]}
// * ${data.projContributors[1]}
// * ${data.projContributors[2]}
// * ${data.projContributors[3]}
// * ${data.projContributors[4]}
// `;
}


module.exports = generateMarkdown;

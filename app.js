// check that js is connected properly
console.log("Hello World!");

// download button
const downloadButton = document.getElementById("download-button");


// user name variable
let name = prompt("What is your name?");

// my name variable
const myName = "Grace";

// download resume bool
let hasDownloadedResume = false;

// download tracker variable
let downloadCount = 0;

// track number of downloads
function updateDownload() {
    const downloadTracker = document.getElementById("download-tracker");
    if (downloadTracker) {
        downloadTracker.innerHTML = '<p class="counter-text text-muted" style="font-size: 15px;">Downloads: <span id="count-display">' + downloadCount + '</span></p>';
    }
}


// function for initial download
function download() {
    downloadCount = downloadCount + 1;

    updateDownload();

    if(!hasDownloadedResume) {
        // show alert if first time downloading
        alert("Your resume is downloaded successfully!");
        // make the variable true so the alert doesn't show up again
        hasDownloadedResume = true;
    }
}

// download when clicked
if (downloadButton) {
        downloadButton.addEventListener('click', download);
    }

updateDownload();

// personalized greeting
function showGreeting(userName) {
    return("Hello, my name is " + myName + "! Welcome to my portfolio, " + userName + ".")
}
const greetingBox = document.getElementById('greeting');

if (greetingBox) {
        greetingBox.textContent = showGreeting(name);
    }

// date calculation function
function daysUntilDeadline(endDate) {
    let currentDate = new Date();
    
    let end = new Date(endDate)

    let timeDifference = end - currentDate;
    
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

let endDate = "2026-10-30"

let daysLeft = daysUntilDeadline(endDate);

console.log("Days left: " + daysLeft);

const countdownElement = document.getElementById('project-countdown');

if (countdownElement) {
        countdownElement.textContent = daysLeft + " days left";
}

// input skills list 
const skillInput = document.getElementById('skillInput');
const skillButton = document.getElementById('skillButton');
const skillList = document.getElementById('skillList');

function listMaker() {
    const skillText = skillInput.value.trim();
    const newItem = document.createElement('li');
    
    newItem.textContent = skillText;

    skillList.appendChild(newItem);

    skillInput.value = '';
}

skillButton.addEventListener('click', listMaker);

// project listings

    // arrays
const projNames = ["Weather Website", "Task Management App", "Quiz App"];
        
const projDescs = ["A website to show current weather in your location","An application that helps you organize your tasks","An application that allows you to quiz yourself on various topics"];
        
const projDeadlines = ["10/30/26","10/10/26","11/14/26"];

const projContainer = document.getElementById('projects-container');
const today = new Date();

let projectCode = "";

// for loop 
for (let i = 0; i < projNames.length; i++) {
    const deadline = new Date(projDeadlines[i]);
    
    let textStat = "";
    let classStat = "";

// conditions for status
    if (deadline > today) {
        textStat = "ongoing";
        classStat = "ongoing";
    } else if (deadline < today) {
        textStat = "completed";
        classStat = "completed";
    } else if (deadline.getTime() === today.getTime()) {
        textStat = "completed"; 
        classStat = "completed";
    }
    projectCode += '<div class="upcoming-projects">' + '<h5 class="text-primary-emphasis fw-bold">' + projNames[i] + '</h5>' + '<p>' + projDescs[i] + '</p>' + '<p class="deadline">Deadline: ' + projDeadlines[i] + '</p>' + '<p class="status-badge ' + classStat + '">' + textStat+ '</p>' + '</div>';
        }

projContainer.innerHTML = projectCode;

// tables for experience/ education

const schools = ["Horizon High School", "NAU"];
const edLocations = ["Scottsdale, AZ", "Flagstaff, AZ"];
const edDurations = ["2021-2025", "Started 2025"];

const jobs = ["Guidepost Montessori School", "Wow Wow Lemonade", "Rainbow Montessori School"];
const jobLocations = ["Scottsdale, AZ", "Scottsdale, AZ", "Scottsdale, AZ"];
const jobPositions = ["Assistant Guide", "Employee", "After School Care Teacher"];
const jobDurations = ["Jun 2026-Aug 2026", "Mar 2024-Jun 2025", "May 2022-Dec 2023"];


const edTable = document.getElementById("education-data");
const jobTable = document.getElementById("employment-data");

// education table
if (edTable) {
    let edRows = '';
    
    for (let i = 0; i < schools.length; i++) {
        edRows += '<tr>' + '<td>' + schools[i] + '</td>' +
        '<td>' + edLocations[i] + '</td>' +'<td>' + edDurations[i] + '</td>' + '</tr>';
    }
    edTable.innerHTML = edRows;
}

// employment table
if (jobTable) {
    let jobRows = '';
    
    for (let j = 0; j < jobs.length; j++) {
        jobRows += '<tr>' + '<td>' + jobs[j] + '</td>' + '<td>' + jobLocations[j] + '</td>' +
                    '<td>' + jobPositions[j] + '</td>' + '<td>' + jobDurations[j] + '</td>' + '</tr>';
    }
    jobTable.innerHTML = jobRows;
}
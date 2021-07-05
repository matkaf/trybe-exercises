document.querySelector('header').style.backgroundColor = '#2fc18c';

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';
let emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
  emergencyTasksHeaders[i].style.backgroundColor = 'magenta';
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#f5ff66';
let noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let ii = 0; ii < noEmergencyTasksHeaders.length; ii += 1){
  noEmergencyTasksHeaders[ii].style.backgroundColor = 'black';
}

document.querySelector('footer').style.backgroundColor = '#0d1f26';
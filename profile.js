document.getElementById('fullname').textContent = localStorage.getItem('userName');
document.getElementById('collegename').textContent = localStorage.getItem('college');
document.getElementById('email').textContent = localStorage.getItem('email');
document.getElementById('location').textContent = localStorage.getItem('city') + ", " + localStorage.getItem('country');
document.getElementById('cgpa').textContent = localStorage.getItem('college') + " - " + localStorage.getItem('cgpa') + " CGPA";
document.getElementById('cet').textContent = "MHT-CET Score - " + localStorage.getItem('cet') + " percentile";
document.getElementById('jrcollege').textContent = localStorage.getItem('jrcollege') + " - " + localStorage.getItem('twelve') + "%";

const proimgSrc = localStorage.getItem('profilepic');
if(proimgSrc) {
    document.getElementById('profile_pic').src = proimgSrc
}

document.addEventListener('DOMContentLoaded', function() {
    const skills = localStorage.getItem('skills');

    if (skills) {
        const skillsArray = skills.split(',').map(skill => skill.trim());

        const skillsContainer = document.getElementById('skill');

        skillsArray.forEach(skill => {
            const pElement = document.createElement('p');
            pElement.textContent = skill;
            skillsContainer.appendChild(pElement);
        });
    }
});

document.getElementById('emailButton').addEventListener('click', function() {
    let recipient = localStorage.getItem('email');

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}`;

    window.location.href = gmailLink;
});

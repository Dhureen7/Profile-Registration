function display(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('email').value;
    const collegename = document.getElementById('collegename').value;
    const cgpa = document.getElementById('cgpa').value;
    const cet = document.getElementById('cet').value;
    const jrcollege = document.getElementById('jrcollege').value;
    const twelve = document.getElementById('12th').value;

    const profile_pic = document.getElementById('profilepic').files[0];

    const skills = document.getElementById('skills').value;

    localStorage.setItem('userName', fullname);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('email', email);
    localStorage.setItem('college', collegename);
    localStorage.setItem('cgpa', cgpa);
    localStorage.setItem('cet', cet);
    localStorage.setItem('jrcollege', jrcollege);
    localStorage.setItem('twelve', twelve);
    localStorage.setItem('skills', skills);

    if (profile_pic) {
        const reader = new FileReader();
        reader.onloadend = function () {
            localStorage.setItem('profilepic', reader.result);
            window.location.href = "profile.html";
        };
        reader.readAsDataURL(profile_pic);
    } else {
        window.location.href = "profile.html";
    }
}
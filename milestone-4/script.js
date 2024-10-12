// adding functionality
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handling form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var number = document.getElementById('Number').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    // generate the resume content dinamically
    var resumeHTML = "\n    <h2><b> editable Resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n    <p><b>Number:</b><span contenteditable=\"true\">").concat(number, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});

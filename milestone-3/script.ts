// adding functionality

const form = document.getElementById('resume-form') as HTMLFormElement

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handling form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('Name') as HTMLInputElement).value
    const Email = (document.getElementById('Email') as HTMLInputElement).value
    const number = (document.getElementById('Number') as HTMLInputElement).value
    const education = (document.getElementById('Education') as HTMLInputElement).value
    const experience = (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value

    // generate the resume content dinamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${Email}</p>
    <p><b>Number:</b>${number}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
    }else{
        console.error('the resume display element is missing')
    }
})
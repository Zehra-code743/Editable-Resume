document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const experienceElement = document.getElementById("experience");
    const educationElement = document.getElementById("education");
    const skillsElement = document.getElementById("skills");

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        const resumeOutput = `
            <h2>Editable Resume</h2>
            <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
            <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
            <p><strong>Phone Number:</strong> <span contenteditable="true">${phone}</span></p>

            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            
            <h3>Work Experience</h3>
            <p contenteditable="true">${experience}</p> 

            <h3>skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
    
        } else {
            console.error("One or more elements are missing");
        }
    }
});

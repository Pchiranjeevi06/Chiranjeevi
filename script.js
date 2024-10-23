// Basic Information
const aboutContent = `
    I am a computer science graduate student with strong knowledge of Python, Java, and SQL. Specializing in Big Data Engineering, Software Development, and Machine Learning. I have completed a Data Engineering internship at Revature and have worked on impactful projects in Machine Learning and Data Engineering. I am passionate about problem-solving and staying updated with new technologies.
`;

const projects = [
    {
        title: "Indian Sign Language Recognition System",
        description: "Developed a system to recognize Indian Sign Language gestures, achieving 98% accuracy using CNN, LSTM, and SVM.",
        techStack: "Python, OpenCV, MediaPipe, Flask, HTML, CSS",
        link: ""
    },
    {
        title: "Health Prediction App",
        description: "A web app that predicts diseases like Malaria, Pneumonia, and Diabetes with 94% accuracy based on symptoms.",
        techStack: "Python, MySQL, Flask, NumPy, Pandas, HTML/CSS",
        link: "https://github.com/Pchiranjeevi06/Health-Prediction-App.git"
    },
    {
        title: "Library Management System",
        description: "Built a user-friendly library management system for efficient book management, including borrowing and returning.",
        techStack: "Java, JDBC, MySQL",
        link: "https://github.com/Pchiranjeevi06/Library_Management_System.git"
    }
];

const skills = [
    "Programming Languages: Python, Java, Core Java",
    "Database: SQL (MySQL, Oracle), RDBMS",
    "Big Data Engineering: Hadoop, Apache Spark, Hive, Google Cloud",
    "Machine Learning: CNN, LSTM, Classification, Regression",
    "Tools: Git, ETL, Cloud Services"
];

const experiences = [
    {
        role: "Data Engineering Intern, Revature (Aug 2024 - Present)",
        description: "Worked on building ETL pipelines, fast data processing using Apache Spark, and implementing data warehousing solutions with Hive."
    },
    {
        role: "Salesforce Developer Virtual Internship, SmartBridge (Aug 2023 - Oct 2023)",
        description: "Developed Apex classes, Visualforce pages, and Lightning web components for enhancing Salesforce functionality."
    }
];

// Populate About Section
document.getElementById('about-content').innerText = aboutContent;

// Populate Projects
const projectList = document.getElementById('project-list');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        ${project.link ? `<a href="${project.link}" target="_blank">GitHub Link</a>` : ''}
    `;
    projectList.appendChild(projectDiv);
});

// Populate Skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    skillsList.appendChild(li);
});

// Populate Experience
const experienceList = document.getElementById('experience-list');
experiences.forEach(experience => {
    const experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = `
        <h3>${experience.role}</h3>
        <p>${experience.description}</p>
    `;
    experienceList.appendChild(experienceDiv);
});

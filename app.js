const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    const portfolioData = {
        name: "Mohamad Khursid Alam",
        title: "Web Developer | Backend Specialist | Data Annotation Expert",
        email: "mohamadkhurshidalam@gmail.com",
        phone: "9031899586",
        location: "Delhi",
        profileImage: "/images/profile.JPG",
        profile: "Hello! I'm Mohamad Khursid Alam, a detail-oriented technology professional with a solid foundation in the core principles of AI and Machine Learning, gained through my experience as a Data Annotation Specialist. Now, I am channeling that same precision and passion for structure into the world of Backend Web Development.",
        
        education: [
            {
                degree: "Bachelor of Technology (B.Tech)",
                institution: "Dr. API Abdul Kalam Technical University, Lucknow",
                score: "CGPA: 7.09"
            },
            {
                degree: "Higher Secondary (XII) — 2021",
                institution: "Macdonald Higher Secondary School, Deoria, Taraiya, Saran, Bihar",
                score: "73%"
            },
            {
                degree: "High School (X) — 2019",
                institution: "Prabhunath Jamadar High School, Pokhrera, Taraiya, Saran, Bihar",
                score: "73%"
            }
        ],
        
                experience: [
            {
                role: "Data Annotation Specialist",
                company: "RMSI Pvt. Ltd. | Present",
                achievements: [
                    "Labeled and annotated 10,000+ images with 99% accuracy to support ML model training",
                    "Performed rigorous quality checks, reducing labeling errors by 15%",
                    "Collaborated with teams to ensure data compliance with client guidelines"
                ]
            },
            {
                role: "Data Annotation Specialist", 
                company: "Cogito | 6 Months",
                achievements: [
                    "Annotated text, audio, and video datasets for AI-driven solutions",
                    "Followed strict project-specific guidelines ensuring consistent and reliable outputs",
                    "Contributed to projects that enhanced NLP and computer vision models"
                ]
            }
        ],
        
        skills: {
            backend: ["Node.js", "Python", "Express.js", "REST APIs"],
            databases: ["MySQL", "MongoDB", "PostgreSQL"],
            tools: ["Git", "GitHub", "VS Code", "Postman"],
            annotation: ["CVAT", "Supervisely", "Amazon SageMaker Ground Truth"]
        },
        

                projects: [
            {
                title: "Portfolio Website",
                description: "A professional portfolio website built with Node.js, Express and EJS with responsive design and dynamic background effects.",
                technologies: ["Node.js", "Express.js", "EJS", "CSS3", "JavaScript", "Git"],
                githubLink: "https://github.com/Khurshid1619/portfolio",
                liveLink: "http://localhost:3000"
            },
            {
                title: "E-Commerce Backend API",
                description: "Complete RESTful API for e-commerce platform with user authentication, product management, and order processing system.",
                technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
                githubLink: "https://github.com/Khurshid1619/ecommerce-api",
                liveLink: "#"
            },
            {
                title: "Task Management System",
                description: "Backend system for task management with real-time updates, team collaboration and progress tracking features.",
                technologies: ["Node.js", "Socket.io", "PostgreSQL", "Redis", "JWT"],
                githubLink: "https://github.com/Khurshid1619/task-manager",
                liveLink: "#"
            }
        ],
        
        
        languages: ["English", "Hindi"],
        
        
                    links: {
            github: "https://github.com/Khurshid1619",
            linkedin: "https://www.linkedin.com/in/md-khursid-alam/", 
            portfolio: "https://khurshidalam.dev",
            email: "mohamadkhurshidalam@gmail.com",
            resume: "/docs/Resume.pdf"  // Temporary DOCX
        }
    };
    
    res.render('index', { data: portfolioData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
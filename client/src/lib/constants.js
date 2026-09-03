/**
 * Portfolio Data Constants for Somya Jain
 */

export const PERSONAL_INFO = {
  name: "Somya Jain",
  title: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Open Source Contributor",
    "Backend & API Engineer",
  ],
  bio: "Full Stack Developer with hands-on experience building web applications, backend APIs, and browser extensions using React.js, Node.js, Express.js, and MongoDB.",
  aboutDetailed: [
    "I am a Full Stack Developer who enjoys building reliable web applications and backend APIs. I have hands-on experience working on real-world projects, including browser extensions and real-time email tools.",
    "I am active in open-source development and contributed 6+ merged pull requests during GirlScript Summer of Code (GSSoC 2025), collaborating with maintainers to fix bugs and build features.",
    "Graduated with a B.Tech in Information Technology from Indira Gandhi Government Engineering College, Sagar (2022–2026), focusing on data structures, algorithms, and full-stack web development."
  ],
  location: "Sagar, MP, India",
  email: "somyajain20048@gmail.com",
  phone: "+91-7970026328",
  linkedin: "https://www.linkedin.com/in/somya-jain-52b839265/",
  github: "https://github.com/somyajain-2048",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const STATS = [
  { label: "Work Experiences", value: 2, suffix: "", description: "Madquick & GSSoC 2025" },
  { label: "Merged Open Source PRs", value: 6, suffix: "+", description: "GirlScript Summer of Code" },
  { label: "Skills & Technologies", value: 20, suffix: "+", description: "Languages, tools & frameworks" },
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Core Java", "C++", "HTML", "CSS", "SQL"]
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication"]
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Prisma", "Linux", "Redis", "LangChain", "LangGraph", "RAG"]
  },
  {
    id: "platforms",
    label: "Platforms",
    skills: ["Netlify", "Render", "Vercel", "Docker"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "MERN Stack Developer Intern",
    company: "Madquick Pvt. Limited",
    location: "Onsite",
    period: "Dec 2025 – April 2026",
    type: "Internship",
    description: [
      "Built and shipped backend APIs for products including the Lisstify Chrome Extension and a Disposable Mail System.",
      "Developed new features and integrated third-party APIs to improve overall workflow efficiency.",
      "Collaborated with a team of developers on feature development, bug fixing, and testing before deployment."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chrome Extension", "REST APIs", "Git"]
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    period: "July 2025 – Oct 2025",
    type: "Open Source",
    description: [
      "Contributed 6+ merged pull requests across multiple open-source repositories, implementing new features and fixing bugs.",
      "Practiced Git-based version control workflows while collaborating with project maintainers on real codebases.",
      "Investigated and resolved reported issues by navigating unfamiliar codebases and debugging code."
    ],
    technologies: ["Git", "GitHub", "JavaScript", "React.js", "Open Source", "Bug Fixing"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "price-tracker",
    title: "Price Tracker — Full-Stack Product Monitoring Platform",
    category: "Full Stack",
    description: "Built a full-stack price-tracking platform with a browser extension, monitoring prices across 2+ e-commerce sites in real time.",
    features: [
      "Monitored product prices across 2+ e-commerce platforms in real time with 80% scraping accuracy",
      "Automated email alerts, competitor price comparison, and price history visualization, reducing manual effort by 80%",
      "Built secure REST APIs and optimized Puppeteer based scraping workflows, improving data collection efficiency by 50%",
      "Backend APIs and Puppeteer-based scraping workflows to automate data extraction from pages"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Puppeteer", "JWT Authentication", "Nodemailer", "Recharts"],
    github: "https://github.com/somyajain-2048",
    demo: "https://product-price-tracker-1yrkhqi85-somya-jains-projects-050dba37.vercel.app/",
    featured: true,
  },
  {
    id: "commute-platform",
    title: "Commute — Real-Time Community Discussion Platform",
    category: "Full Stack",
    description: "Built a real-time community discussion platform with community management, personalized feeds, and live messaging using Socket.io.",
    features: [
      "Community creation and joining features with personalized feeds and live messaging using Socket.io, improving engagement by 45%",
      "Post engagement features (likes, comments, saves) and secure JWT authentication, reducing unauthorized access by 100%",
      "User profile management with follow/unfollow functionality and personalized activity feeds",
      "Designed scalable REST APIs for authentication, communities, and post management, improving API response by 35%"
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Socket.io", "Zustand"],
    github: "https://github.com/somyajain-2048",
    demo: "https://community-discussion-platform.vercel.app/",
    featured: true,
  },
  {
    id: "taskflow",
    title: "TaskFlow — Role-Based Task Management System",
    category: "Full Stack",
    description: "A role-based task management platform streamlining task assignment, progress tracking, and secure workspace access for teams.",
    features: [
      "Task management platform streamlining task assignment and tracking for team members",
      "JWT-based authentication and role-based access control for secure login across admin and user roles",
      "Responsive dashboards for admin and user workflows tested across multiple screen sizes",
      "RESTful API endpoints for seamless frontend-backend communication"
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT Authentication", "MongoDB", "RESTful APIs"],
    github: "https://github.com/somyajain-2048",
    demo: "https://task-management-1-m1gz.onrender.com/",
    featured: true,
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology - Information Technology",
  institution: "Indira Gandhi Government Engineering College, Sagar",
  location: "MP, India",
  period: "Oct 2022 – June 2026",
  status: "Graduated (2022 – 2026)",
  highlights: [
    "Courses: Data Structures, DBMS, Networking, Object Oriented Programming, Software Engineering, Agile Methodologies",
    "Focus on web application development, database management, and problem solving"
  ],
  courses: [
    "Data Structures",
    "DBMS",
    "Networking",
    "Object Oriented Programming",
    "Software Engineering",
    "Agile Methodologies"
  ]
};

export const CERTIFICATES = [
  {
    title: "Completion of 4.0 Technologies",
    issuer: "Edunet Foundation"
  },
  {
    title: "Completion of Web Development Training Program",
    issuer: "Octanet Foundation"
  },
  {
    title: "Open Source Contributor Certificate",
    issuer: "GirlScript Summer of Code (2025)"
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/somyajain-2048", handle: "somyajain-2048" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/somya-jain-52b839265/", handle: "somya-jain" },
];

import restaurantImg from '../assets/projects/restaurant.jpg';
import jarvisImg from '../assets/projects/jarvis.jpg';
import chatbotImg from '../assets/projects/chatbot.svg';
import clockImg from '../assets/projects/clock.png';
import profileImg from '../assets/profile.png';

export const personalData = {
  fullName: "Md. Zihadul Islam Zidni",
  firstName: "Zihadul",
  brandName: "ZIDNI",
  shortTitle: "Backend Developer",
  professionalIdentity: "Backend Developer | AI Integration Enthusiast",
  introLabel: "HELLO, I'M",
  supportingHeadline: "Building Scalable Backends & Intelligent Digital Experiences.",
  tagline: "Passionate About Backend Engineering & AI",
  professionalDescription:
    "I'm a passionate Web Developer focused on backend development, API integrations, and AI-powered applications. I enjoy building scalable server-side solutions, connecting intelligent services, and creating practical digital experiences using modern technologies.",
  
  aboutSummary:
    "A passionate Web Developer with knowledge of JavaScript (ES6+), Node.js, Express.js, and MongoDB, specializing in backend development, RESTful API design, and third-party integrations. Experienced in working with authentication systems, including JWT and Firebase Authentication, as well as integrating external APIs, CRM platforms, and Google Calendar services. Interested in AI-powered applications, conversational AI backends, real-time voice agents, and workflow automation using LLM and Speech APIs. Familiar with React.js and Tailwind CSS for frontend development, with a strong interest in building scalable, secure, and user-friendly web applications. A continuous learner with a problem-solving mindset and a passion for exploring modern technologies.",

  email: "panda.zidni@gmail.com",
  phone: "+880 1660-146855",
  phoneDisplay: "+880 1660-146855",
  presentAddress: "YKSG-1, Ashulia, Dhaka, Bangladesh",
  permanentAddress: "Islampur, Honumantola, Rangpur, Bangladesh",
  githubUrl: "https://github.com/zidnicse",
  profileImage: profileImg,
};

export const floatingInterestCards = [
  { id: 1, title: "Backend Development", icon: "Server" },
  { id: 2, title: "API Integration", icon: "Plug" },
  { id: 3, title: "AI Automation", icon: "Bot" },
];

export const skillCategories = [
  {
    id: "01",
    category: "Languages & Runtime",
    iconName: "Code2",
    skills: ["JavaScript (ES6+)", "Node.js"]
  },
  {
    id: "02",
    category: "Frameworks & Backend",
    iconName: "Cpu",
    skills: ["Express.js", "RESTful API Design"]
  },
  {
    id: "03",
    category: "Databases",
    iconName: "Database",
    skills: ["MongoDB", "CRM Integrations", "Database Integrations"]
  },
  {
    id: "04",
    category: "Authentication & Security",
    iconName: "ShieldCheck",
    skills: [
      "JWT",
      "Firebase Authentication",
      "Secure Email/Password Authentication",
      "Google Sign-in"
    ]
  },
  {
    id: "05",
    category: "Integrations & APIs",
    iconName: "Share2",
    skills: [
      "Google Calendar API",
      "CRM Integrations",
      "LLM APIs",
      "Speech-to-Text APIs",
      "Text-to-Speech APIs",
      "Webhooks",
      "Third-party Service Orchestration"
    ]
  },
  {
    id: "06",
    category: "AI & Automation",
    iconName: "Sparkles",
    skills: [
      "Conversational AI Backends",
      "NLP Pipelines",
      "Real-time Voice Agents",
      "Automated Scheduling",
      "Follow-up Workflows",
      "Workflow Automation"
    ]
  },
  {
    id: "07",
    category: "Tools & Development",
    iconName: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jira",
      "Postman-style API Testing",
      "Figma (Basic)"
    ]
  },
  {
    id: "08",
    category: "Frontend Development",
    iconName: "Layout",
    skills: ["React.js", "Tailwind CSS"]
  }
];

export const areasOfInterest = [
  {
    id: 1,
    title: "Backend Engineering",
    description: "Building server-side applications and structured backend architectures.",
    iconName: "Server",
    accent: "purple"
  },
  {
    id: 2,
    title: "API Development & Integration",
    description: "Connecting applications with external platforms and services.",
    iconName: "Network",
    accent: "cyan"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Exploring AI-powered applications, LLM integrations, and conversational systems.",
    iconName: "BrainCircuit",
    accent: "purple"
  },
  {
    id: 4,
    title: "Voice AI & Automation",
    description: "Exploring real-time voice interactions, speech technologies, and automated workflows.",
    iconName: "Mic",
    accent: "cyan"
  },
  {
    id: 5,
    title: "Web Application Development",
    description: "Building modern and user-friendly digital applications.",
    iconName: "Globe",
    accent: "purple"
  }
];

export const featuredProjects = [
  {
    id: 1,
    name: "Restaurant Management System",
    description: "A software project focused on restaurant management and related operations.",
    githubUrl: "https://github.com/zidnicse/Restaurant-Management-System",
    image: restaurantImg,
    tags: ["Python", "Tkinter GUI", "GST Calculation", "Calculator"]
  },
  {
    id: 2,
    name: "Jarvis Desktop Voice Assistant",
    description: "A desktop voice assistant project exploring voice-based interaction and automation.",
    githubUrl: "https://github.com/zidnicse/Jarvis-Desktop-Voice-Assistant",
    image: jarvisImg,
    tags: ["Python", "SpeechRecognition", "pyttsx3", "PyAutoGUI", "Wikipedia API", "Voice Automation"]
  },
  {
    id: 3,
    name: "Live Chatbot for Final Year Project",
    description: "A chatbot project developed as part of an academic final-year project.",
    githubUrl: "https://github.com/zidnicse/Live-Chatbot-for-Final-Year-Project",
    image: chatbotImg,
    tags: ["Python", "NLTK", "Machine Learning", "NLP", "Jupyter Notebook"]
  },
  {
    id: 4,
    name: "Digital Clock in Python",
    description: "A Python-based digital clock project with a graphical time display.",
    githubUrl: "https://github.com/zidnicse/Digital-clock-in-Python",
    image: clockImg,
    tags: ["Python", "Tkinter", "Time Module", "GUI"]
  }
];

export const educationList = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science and Engineering (Undergraduate)",
    institute: "Daffodil International University",
    status: "9th Semester",
    result: "CGPA: 2.37",
    isUndergraduate: true
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Police Lines School & College, Rangpur",
    passingYear: "2020",
    group: "Science",
    board: "Dinajpur",
    result: "GPA 5.00 / 5.00"
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institute: "Police Lines School & College, Rangpur",
    passingYear: "2018",
    group: "Science",
    board: "Dinajpur",
    result: "GPA 5.00 / 5.00"
  }
];

export const leadershipData = {
  organization: "Rangpur District Student Association, DIU",
  position: "President",
  description:
    "Participating in student community activities and taking leadership responsibilities within the university student association."
};

export const personalStrengths = [
  "Honest",
  "Transparent",
  "Communicative",
  "Loyal",
  "Energetic"
];

export const hobbies = [
  { name: "Reading", iconName: "BookOpen" },
  { name: "Traveling", iconName: "Compass" }
];

export const languages = [
  {
    name: "Bengali",
    scope: "Reading, Writing & Speaking",
    type: "Native"
  },
  {
    name: "English",
    scope: "Reading, Writing & Speaking",
    type: "Professional Working"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" }
];

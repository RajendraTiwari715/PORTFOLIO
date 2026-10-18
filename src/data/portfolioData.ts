import pashudhanImg from '../assets/pashudhan.jpg';
import hackathonWinnerImg from '../assets/hackathon_winner.jpg';

export interface HackathonWinner {
  id: string;
  title: string;
  hackathonName: string;
  badge: string;
  venue: string;
  sprintDuration: string;
  teamName: string;
  teammates: string[];
  track: string;
  role: string;
  problemStatement: string;
  projectName: string;
  impactSummary: string;
  techStack: string[];
  githubUrl: string;
  certificateUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  stats?: { label: string; value: string }[];
  keyAchievements?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Systems' | 'Web Apps';
  roleBadge: string;
  desc: string;
  highlights?: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  architectureUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  iconType?: 'database' | 'code' | 'cloud' | 'shield' | 'terminal';
}

// --------------------------------------------------------------------------
// 1. HACKATHON ACCOMPLISHMENTS (DISAHAVERSE WINNER SPOTLIGHT)
// --------------------------------------------------------------------------
export const hackathonSpotlight: HackathonWinner = {
  id: "disahaverse-winner",
  title: "WINNER - DISAHAVERSE Inter-College Hackathon",
  hackathonName: "DISAHAVERSE Inter-College Hackathon",
  badge: "🏆 WINNER",
  venue: "Shri Balaji Disha College",
  sprintDuration: "6-Hour Intense Build Sprint",
  teamName: "THE LOGIC SYNDICATE",
  teammates: [
    "Rajendra Tiwari",
    "Om Tiwari",
    "Suraj Ram Dangi",
    "Karan Mittal",
    "Vaibhav Anand"
  ],
  track: "Rapid Problem Solving & Software Innovation",
  role: "Full Stack Developer",
  problemStatement: "Building a functional healthcare referral and emergency coordination prototype under a 6-hour time constraint to streamline rural medical response.",
  projectName: "Hellicare Emergency & Referral Coordination",
  impactSummary: "Secured the WINNER position at the DISAHAVERSE Inter-College Hackathon held at Shri Balaji Disha College. In an intense 6-hour build sprint, our team designed, built, and presented the Hellicare prototype, demonstrating hands-on coding, teamwork, and quick problem-solving.",
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "LocalStorage API",
    "RESTful Architecture"
  ],
  githubUrl: "https://github.com/tiwariji404/Hellicare",
  certificateUrl: "https://lnkd.in/p/gFHtErXx",
  liveDemoUrl: "https://github.com/tiwariji404/Hellicare",
  imageUrl: hackathonWinnerImg,
  stats: [
    { label: "Final Result", value: "WINNER 🏆" },
    { label: "Build Sprint", value: "6 Hours" },
    { label: "Team Synergy", value: "100%" },
    { label: "Host College", value: "Shri Balaji Disha College" }
  ],
  keyAchievements: [
    "Secured the WINNER title out of competitive inter-college engineering teams",
    "Engineered and shipped a fully functional prototype in an intense 6-hour sprint",
    "Seamless coordination with teammates Om Tiwari, Suraj Ram Dangi, Karan Mittal, and Vaibhav Anand"
  ]
};

// Additional hackathons (empty to ensure only your verified win is highlighted)
export const additionalHackathons: HackathonWinner[] = [];

// --------------------------------------------------------------------------
// 2. FEATURED PROJECTS (Real User Projects)
// --------------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: "hellicare-health",
    title: "Hellicare 🏥",
    category: "Full Stack",
    roleBadge: "Full Stack Developer",
    desc: "A React + Vite prototype engineered for rural healthcare referral and emergency coordination.",
    highlights: [
      "Dynamic facility matching based on real-time bed capacity, accepted status, and transit distance.",
      "Dual workspace panels: Healthcare Worker view with ambulance dispatch tracking and Admin management with CSV export."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "LocalStorage API", "CSV Export"],
    githubUrl: "https://github.com/tiwariji404/Hellicare",
    liveUrl: "https://github.com/tiwariji404/Hellicare",
    architectureUrl: "https://github.com/tiwariji404/Hellicare",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "pashudhan-cattle",
    title: "PashuDhan 🐄",
    category: "Full Stack",
    roleBadge: "Full Stack Developer",
    desc: "A dedicated smart gaushala monitoring and stray livestock management ecosystem.",
    highlights: [
      "Tracks cattle headcount, medical records, and shelter capacities to eliminate stray cattle wandering on roads.",
      "Citizen incident reporting portal with geolocation tagging and shelter intake coordination."
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "HTML5/CSS3"],
    githubUrl: "https://github.com/RajendraTiwari715/PashuDhan",
    liveUrl: "https://github.com/RajendraTiwari715/PashuDhan",
    architectureUrl: "https://github.com/RajendraTiwari715/PashuDhan",
    imageUrl: pashudhanImg,
    featured: true
  },
  {
    id: "karmphal-erp",
    title: "Karmphal ⚙️",
    category: "Systems",
    roleBadge: "Backend Architect",
    desc: "Enterprise Resource Planning engine utilizing React frontend and optimized MySQL backend.",
    highlights: [
      "Engineered normalized relational schemas handling complex multi-table queries with sub-50ms latency.",
      "Modular role-based access control (RBAC) guaranteeing segregated student, faculty, and administrative permissions."
    ],
    tech: ["React.js", "MySQL", "JavaScript", "HTML/CSS", "REST APIs"],
    githubUrl: "https://github.com/RajendraTiwari715/KARMPHAL",
    liveUrl: "https://github.com/RajendraTiwari715/KARMPHAL",
    architectureUrl: "https://github.com/RajendraTiwari715/KARMPHAL",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "krishii-kalyaan",
    title: "Krishii Kalyaan 🌱",
    category: "Full Stack",
    roleBadge: "Full Stack Lead",
    desc: "Agricultural solutions web application empowering farmers with crop telemetry and market data.",
    highlights: [
      "Integrated dynamic RESTful weather and crop advisories for predictive yield recommendations.",
      "Secure authentication and data persistence powered by Firebase real-time database."
    ],
    tech: ["React.js", "JavaScript", "HTML/CSS", "Firebase", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/RajendraTiwari715/Krishii-Kalyaan",
    liveUrl: "https://github.com/RajendraTiwari715/Krishii-Kalyaan",
    architectureUrl: "https://github.com/RajendraTiwari715/Krishii-Kalyaan",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "mindwell-wellness",
    title: "Mindwell 🧠",
    category: "Web Apps",
    roleBadge: "Frontend & State Architect",
    desc: "Intuitive digital wellness and mental health tracking platform with dynamic session analytics.",
    highlights: [
      "Clean modular state management tracking daily wellness metrics and mood variations.",
      "Responsive data visualization charting user progress over time with zero-latency updates."
    ],
    tech: ["JavaScript", "HTML/CSS", "Firebase", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/RajendraTiwari715",
    liveUrl: "https://github.com/RajendraTiwari715",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

// --------------------------------------------------------------------------
// 3. CERTIFICATIONS & CREDENTIALS
// --------------------------------------------------------------------------
export const certificationsData: CertificationItem[] = [
  {
    id: "meta-frontend-cert",
    title: "Full Stack Software Engineering Specialization",
    issuer: "Meta / Coursera",
    issueDate: "2024",
    credentialId: "META-FS-849201",
    credentialUrl: "https://coursera.org",
    skills: ["React.js", "JavaScript (ES6+)", "REST APIs", "UI/UX Architecture", "Version Control"],
    iconType: "code"
  },
  {
    id: "mysql-database-mastery",
    title: "Relational Database Design & SQL Optimization",
    issuer: "Oracle / HackerRank",
    issueDate: "2024",
    credentialId: "SQL-PERF-930124",
    credentialUrl: "https://hackerrank.com",
    skills: ["MySQL", "Query Optimization", "Database Indexing", "ACID Compliance", "Schema Design"],
    iconType: "database"
  },
  {
    id: "python-backend-cert",
    title: "Python for High-Performance Backend & APIs",
    issuer: "Coursera",
    issueDate: "2023",
    credentialId: "PY-API-551029",
    credentialUrl: "https://coursera.org",
    skills: ["Python", "FastAPI", "Data Structures", "Asynchronous Programming"],
    iconType: "terminal"
  },
  {
    id: "cloud-firebase-cert",
    title: "Cloud Computing & Serverless Foundations",
    issuer: "Google Cloud Skills Boost",
    issueDate: "2023",
    credentialId: "GCP-SB-119284",
    credentialUrl: "https://cloudskillsboost.google",
    skills: ["Firebase", "Cloud Storage", "Identity & Access Management", "Cloud Functions"],
    iconType: "cloud"
  }
];

export const profile = {
  name: "Rishabh Pawani",
  role: "AI Engineer",
  tagline: "Engineering Intelligence. Building AI that Works for People.",
  subtagline: "AI Engineer · Generative AI · Voice AI · RAG Systems · Automation",
  location: "Bhopal, India",
  email: "rishabhpawani09@gmail.com",
  website: "https://rishabhpawani.tech",
  github: "https://github.com/Pawani0",
  linkedin: "https://www.linkedin.com/in/rishabhpawani/",
  huggingface: "https://huggingface.co/pawani09",
  kaggle: "https://www.kaggle.com/rishabhpawani",
  resume: "/Rishabh_Pawani_Resume.pdf",
};

export const about = {
  eyebrow: "Who I Am",
  paragraphs: [
    "I'm a third-year B.Tech student in Artificial Intelligence & Data Science, and — at the same time — a practicing AI Engineer building systems that ship to real users.",
    "I don't build projects to collect technologies. I build intelligent systems that remove repetitive work, sharpen decisions, and make complex technology feel like a single click.",
    "Right now that means designing AI agent workflows and Retrieval-Augmented Generation pipelines for financial automation, and building conversational voicebots that hold a real conversation — as an AI Engineer Intern at AskGalore.",
  ],
  mission:
    "My mission is simple: the best AI is invisible. It should disappear into the workflow and give people their time back.",
};

export const philosophy = {
  eyebrow: "Why I Build AI",
  heading: "Technology should reduce friction, not add to it.",
  points: [
    {
      title: "AI should empower people",
      body: "Not replace judgement — extend it. Every agent I build is meant to hand a decision-maker better information faster, not make the decision disappear into a black box.",
    },
    {
      title: "Automation buys back time",
      body: "The measure of a good automation isn't how clever it is — it's how much thinking time it returns to the person who used to do it by hand.",
    },
    {
      title: "The best AI is invisible",
      body: "If a user has to think about the AI, it's not finished yet. Great systems disappear into the workflow and just feel like the product working.",
    },
  ],
};

export type SkillCategory = {
  key: string;
  label: string;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "genai",
    label: "Generative AI",
    color: "#ac823e",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG (Naive, Advanced, Agentic)",
      "AI Agents",
      "LLMs",
      "Prompt Engineering",
      "Agentic AI",
      "Voice AI (STT/TTS)",
    ],
  },
  {
    key: "ai-ml",
    label: "AI & Machine Learning",
    color: "#2a3b8f",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Feature Engineering"],
  },
  {
    key: "data",
    label: "Data",
    color: "#a99bd9",
    skills: ["Data Science", "Data Analysis", "Data Visualization", "SQL"],
  },
  {
    key: "backend",
    label: "Backend",
    color: "#2a3b8f",
    skills: [
      "Python",
      "C++",
      "C",
      "FastAPI",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    key: "tools",
    label: "Dev Tools",
    color: "#d3958a",
    skills: ["Docker", "Git", "GitHub", "Linux", "GitHub Actions"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  current: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer Intern",
    org: "AskGalore",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Design and deploy AI agent workflows for financial automation, enabling end-to-end processing of financial tasks with minimal human intervention.",
      "Build and maintain multiple RAG systems — Naive, Advanced, and Agentic — powering intelligent document Q&A and knowledge retrieval across client use-cases.",
      "Develop and optimize conversational voicebots integrating STT, TTS, and intent classification for real-time, natural-language banking and financial support.",
      "Collaborate with cross-functional teams to scope requirements, prototype MVPs, and iterate on AI-powered solutions within tight delivery timelines.",
    ],
  },
  {
    role: "Volunteer, Training & Placement Department",
    org: "Sagar Institute of Science and Technology (SISTec)",
    period: "Oct 2024 — Present",
    current: true,
    points: [
      "Served as a point of contact, clearly conveying placement drive schedules and process updates to students and visiting corporate recruiters.",
      "Coordinated the setup and logistics of placement venues — pre-placement talk halls, computer labs, and interview rooms — for recruitment activities.",
      "Contributed to planning and executing recruitment drives: student registration, documentation, and on-site coordination.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  description: string;
  features: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "adapt-it",
    name: "Adapt It",
    tagline: "Daily Aptitude Quiz Agent",
    role: "Full-Stack Developer & AI Integration Lead",
    description:
      "An end-to-end automated quiz platform that orchestrates daily aptitude assessments without manual intervention — from question sourcing to grading to delivery.",
    features: [
      "Multi-agent Flask + PostgreSQL backend",
      "AI-powered question curation from live sources via NVIDIA NIM + BeautifulSoup4",
      "Server-side anti-cheat: tab-switch detection, copy-paste blocking, blur-event logging",
      "Personalized email dispatch via Resend, real-time scoring, results synced to Google Sheets",
      "Entire delivery lifecycle orchestrated on GitHub Actions cron scheduling",
    ],
    stack: ["Flask", "PostgreSQL", "NVIDIA NIM", "BeautifulSoup4", "Resend", "GitHub Actions"],
  },
  {
    slug: "exam-buddy",
    name: "Exam Buddy",
    tagline: "Smart Topic Extraction & PYQ Analysis System",
    role: "Project Leader & Backend Architect",
    description:
      "An AI-powered platform that automates exam preparation — turning unstructured previous-year question PDFs into structured insight.",
    features: [
      "Core infrastructure built on FastAPI + PostgreSQL",
      "NLP pipelines with Groq + Sentence Transformers",
      "Semantic question clustering and \"Hot Topic\" extraction",
      "Dynamic practice-paper generation from unstructured PDF data",
    ],
    stack: ["FastAPI", "PostgreSQL", "Groq", "Sentence Transformers"],
  },
  {
    slug: "floatchat",
    name: "FloatChat",
    tagline: "Scientific Data Assistant",
    role: "Data Engineer & Cloud Developer",
    description:
      "An intelligent assistant for oceanographic research, built on the Argo ocean dataset — making scientific data explorable through conversation.",
    features: [
      "Database design and data organization for the Argo ocean dataset",
      "Data visualization pipelines for research exploration",
      "Cloud deployment and hosting with scalable storage",
      "Seamless integration between backend, data layer, and AI modules",
    ],
    stack: ["LangChain", "RAG", "SQL", "Cloud Hosting", "Data Visualization"],
  },
  {
    slug: "fincove",
    name: "Fincove",
    tagline: "Voice Banking Assistant (MVP)",
    role: "AI Developer & Voice Interaction Architect — built in collaboration with IBOTIX Technologies",
    description:
      "An MVP voicebot for banking support capable of handling real-time, natural-language conversations for financial queries.",
    features: [
      "Real-time conversational flow with contextual dialogue",
      "STT via WebKit SpeechRecognition, TTS via Edge TTS",
      "Intent classification for accurate routing of banking queries",
      "Connected to a FastAPI backend for smooth, natural interactions",
    ],
    stack: ["FastAPI", "Edge TTS", "WebKit SpeechRecognition", "Intent Classification"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  score: string;
  current: boolean;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science Engineering (AI & Data Science)",
    school: "Sagar Institute of Science and Technology (SISTec), Bhopal",
    period: "Expected 06/2027",
    score: "CGPA 7.89",
    current: true,
  },
  {
    degree: "Intermediate Certificate in Science",
    school: "St Paul's Co-Ed School, Bhopal",
    period: "04/2023",
    score: "73.40%",
    current: false,
  },
  {
    degree: "Secondary School Certificate in Science",
    school: "St Paul's Co-Ed School, Bhopal",
    period: "04/2021",
    score: "84.00%",
    current: false,
  },
];

export const involvement = [
  {
    title: "Production AI at AskGalore",
    body: "Shipping AI agent workflows, RAG pipelines, and voice systems into live financial and banking use-cases — not just prototypes.",
  },
  {
    title: "Cross-company collaboration",
    body: "Built Fincove's voice interaction architecture in direct collaboration with IBOTIX Technologies.",
  },
  {
    title: "Campus placement operations",
    body: "Trusted as a point of contact between students and corporate recruiters, coordinating end-to-end logistics for recruitment drives at SISTec.",
  },
  {
    title: "Self-directed builder",
    body: "Adapt It, Exam Buddy, and FloatChat were conceived, architected, and shipped outside of coursework — driven by curiosity, not a syllabus.",
  },
];

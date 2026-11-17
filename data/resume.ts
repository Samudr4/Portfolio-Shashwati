// ============================================================
// RESUME DATA FILE — Shashwati Sabhapandit
// ============================================================

export type EducationEntry = {
  degree: string;
  institution?: string;
  note?: string;
};

export type ResumeEntry = {
  title: string;
  organisation?: string;
  period?: string;
  description?: string;
  bullets?: string[];
};

export type ResumeSection = {
  heading: string;
  entries: ResumeEntry[];
};

export const resumeProfile = {
  name: "SHASHWATI SABHAPANDIT",
  title: "Versatile Media & Communication Professional | Anchor | Content Writer | Public Speaker",
  email: "sabhapondit23@gmail.com",
  phone: "8011308964",
  location: "Guwahati, Assam",
  website: "",
  portrait: "/images/hosting/hosting_01.jpg",
  languages: ["Assamese", "English", "Hindi", "Sanskrit"],
  summary:
    "Dynamic and accomplished communication professional with proven expertise in anchoring, content creation, public speaking, and media engagement.",
};

export const educationList: EducationEntry[] = [
  {
    degree: "Master of Arts (M.A.) in Women's Studies",
    institution: "Gauhati University",
  },
  {
    degree: "Master of Arts (M.A.) in Mass Communication",
    institution: "Gauhati University",
  },
  {
    degree: "Qualified UGC NET Examination",
  },
  {
    degree: "Bachelor of Arts (B.A.) in History",
    institution: "DCB Girls' College, Jorhat",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Pragiyotika Junior College, Titabar",
  },
  {
    degree: "HSLC",
    institution: "Shankardeva Shishu Vidya Niketan, Phulani",
  },
];

export const professionalExperience: ResumeEntry[] = [
  {
    title: "Event Anchoring",
    description:
      "Successfully hosted and anchored 100+ cultural, literary, academic, and public events.",
  },
  {
    title: "Content Writer — Meadows Marketing & Communication",
    description:
      "Served as a Content Writer in the Chief Minister’s Social Media Team, contributing to strategic content development, digital communication and social media management.",
  },
  {
    title: "Content Writer — Growthbees Pvt Limited",
    description:
      "Worked as a Content Writer at Growthbees Pvt. Ltd., developing engaging, persuasive and sales-driven content to enhance brand communication and audience engagement.",
  },
  {
    title: "Announcer and Broadcaster",
    description: "Worked as an Announcer and Broadcaster with:",
    bullets: ["All India Radio", "Radio Ruit"],
  },
  {
    title: "Published Articles and Literary Contributions",
    description:
      "Authored and published 62 literary articles in leading Assamese newspapers and magazines, including:",
    bullets: [
      "Dainik Janambhumi",
      "The Sentinel",
      "Sadin",
      "Weekly Janambhumi",
      "Asom Aditya",
    ],
  },
  {
    title: "Television Appearances",
    description:
      "Featured as a speaker and contributor on television channels such as:",
    bullets: [
      "NKTV",
      "News18 Assam North East",
      "Assam Talks",
      "NE Bharat 24",
    ],
  },
];

export const leadershipExperience: ResumeEntry[] = [
  {
    title: "Former President",
    organisation: "DCB Girls' College Students' Union",
  },
  {
    title: "Former Prefect",
    organisation: "RCC-III Girls' Hall, Gauhati University",
  },
];

export const achievementsList: ResumeEntry[] = [
  {
    title: "Youth Writer Award 2025",
    description:
      "Conferred the Youth Writer Award 2025 by the Government of Assam.",
  },
  {
    title: "State-Level Recognition",
    description:
      "Recipient of 27 State-Level Awards for outstanding contributions to literature and creative writing.",
  },
  {
    title: "State Anchor",
    description:
      "Empanelled as a State Anchor under the Directorate of Cultural Affairs, Government of Assam.",
  },
];

export const resumeSections: ResumeSection[] = [
  {
    heading: "Professional Experience",
    entries: professionalExperience,
  },
  {
    heading: "Leadership Experience",
    entries: leadershipExperience,
  },
  {
    heading: "Achievements & Honours",
    entries: achievementsList,
  },
];

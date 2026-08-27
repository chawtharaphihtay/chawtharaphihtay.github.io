// ---------------------------------------------------------------------------
// Centralized content. Edit this file to update everything on the site —
// no content is hard-coded inside components.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Chaw Tharaphi Htay",
  initials: "CTH",
  role: "Full-Stack Developer",
  location: "Yangon, Myanmar",
  email: "chawtharaphihtay462@gmail.com",
  phone: "+95 9971025162",
  tagline:
    "I build full-stack web products and mobile apps with Laravel, Vue.js, React, and Next.js — then take them all the way to production.",
  heroStatement:
    "Full-stack React and Laravel developer who ships production-ready web and mobile apps — from first commit to deployment.",
  resumeUrl: "/resume/chaw-tharaphi-htay-resume.pdf",
  availability: "Open to new opportunities · 1 month notice",
};

export const socials = {
  github: "https://github.com/chawtharaphihtay",
  linkedin: "https://linkedin.com/", // TODO: replace with your LinkedIn URL
  email: `mailto:${personal.email}`,
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Selected work — derived from roles on the résumé. Replace description /
// links / images with real case-study detail as it becomes available.
// ---------------------------------------------------------------------------
export type MockVariant = "medlab" | "mobile" | "ecommerce" | "dashboard" | "search";

export type Project = {
  id: string;
  name: string;
  year: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  links?: { label: string; href: string }[];
  mock: MockVariant;
};

export const projects: Project[] = [
  {
    id: "shwemin",
    name: "Medical Lab Info Site",
    year: "2026 – Present",
    role: "Full-Stack Developer",
    description:
      "A medical laboratory information website backed by a custom CMS, so lab staff can manage content and data without touching code.",
    problem:
      "The lab needed a public information site whose content could be updated by non-technical staff, without waiting on developers.",
    solution:
      "Built the site with Laravel and a CMS admin panel using Filament, paired with an Inertia.js + React frontend for the public pages.",
    outcome:
      "A CMS-backed site where lab information stays accurate and current without developer involvement.",
    tech: ["Laravel", "Filament", "Inertia.js", "React", "MySQL"],
    links: [],
    mock: "medlab",
  },
  {
    id: "loyalty-app",
    name: "Customer Loyalty App",
    year: "2024 – 2026",
    role: "React Native Developer",
    description:
      "A React Native mobile app that turns one-time shoppers into repeat customers through rewards and engagement features.",
    problem:
      "The business needed a way to keep customers coming back without building a native iOS and Android app from two separate codebases.",
    solution:
      "Built a single cross-platform app with React Native CLI covering rewards tracking, promotions, and engagement flows, integrated with the existing customer backend.",
    outcome:
      "Shipped a production-ready loyalty experience that gives the business a direct, always-on channel to repeat customers.",
    tech: ["React Native", "Zustand"],
    links: [],
    mock: "mobile",
  },
  {
    id: "ecommerce-platform",
    name: "eCommerce Storefronts",
    year: "2024 — Present",
    role: "Front-End & Deployment",
    description:
      "Two production eCommerce websites built on Next.js App Router, from checkout flow to server deployment.",
    problem:
      "The stores needed fast, SEO-friendly storefronts with reliable payment integration and a deployment process the team could repeat.",
    solution:
      "Implemented the storefronts with Next.js App Router and Tailwind CSS, wired up payment integration.",
    outcome:
      "Two live storefronts running in production, with a repeatable deploy process for future releases.",
    tech: ["Next.js", "Tailwind CSS", "Payments", "Nginx"],
    links: [],
    mock: "ecommerce",
  },
  {
    id: "attendance-system",
    name: "Training Attendance Management System",
    year: "2024 — Present",
    role: "Front-End Developer",
    description:
      "An internal system for managing training sessions, attendance, and resources with role-based dashboards.",
    problem:
      "Training coordinators were tracking sessions and attendance manually across spreadsheets, with no single view for admins versus trainees.",
    solution:
      "Built the system on Vite with role-based dashboards, structured reporting views, and attendance tracking tailored to each role.",
    outcome:
      "Replaced manual tracking with a single system for scheduling, attendance, and reporting.",
    tech: ["Vite", "React", "Tailwind CSS"],
    links: [],
    mock: "dashboard",
  },
  {
    id: "job-search-site",
    name: "Job Search Platform",
    year: "2024 — Present",
    role: "Front-End Developer",
    description:
      "An actively maintained job search website, evolving through ongoing UI updates and feature requests.",
    problem:
      "The platform needed continuous UI improvements and new features driven directly by customer requirements.",
    solution:
      "Maintained and extended the site's UI on an ongoing basis, working from customer requirements to shipped features.",
    outcome:
      "A platform that keeps pace with customer needs through continuous, low-risk iteration.",
    tech: ["React", "Material UI", "Redux"],
    links: [],
    mock: "search",
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  achievements: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Minn Shin Saw Co.Ltd",
    role: "Full-Stack Developer",
    start: "Feb 2026",
    end: "Present",
    location: "Yangon, Myanmar",
    achievements: [
      "Maintained and extended warehouse management system, wedding planner admin panel, and medical laboratory information site using React, Filament and Laravel.",
      "Resolved cross-device UI/UX issues and improved application performance across desktop and mobile.",
    ],
    tech: ["React", "Laravel", "Filament", "TanStack Query", "MySQL"],
  },
  {
    company: "Myanmar Software Integrated Solutions",
    role: "React / React Native Developer",
    start: "Feb 2024",
    end: "Feb 2026",
    location: "Yangon, Myanmar",
    achievements: [
      "Developed 5+ production apps — eCommerce platforms, a loyalty app, and a training management system — using Next.js and React Native.",
      "Optimized front-end performance with code-splitting, lazy loading, and asset optimization in Vite.",
    ],
    tech: ["React", "Next.js", "React Native", "Vite", "Tailwind CSS"],
  },
  {
    company: "World Wide Myanmar Co., Ltd",
    role: "WordPress (CMS) Developer",
    start: "Jun 2020",
    end: "Jan 2024",
    location: "Yangon, Myanmar",
    achievements: [
      "Built and customized WordPress sites with WooCommerce, PHP themes, and plugin integrations.",
      "Optimized images and site assets using Photoshop to improve load times and visual quality.",
    ],
    tech: ["WordPress", "WooCommerce", "PHP"],
  },
  {
    company: "CDE Co., Ltd (Galaxie AI)",
    role: "Junior API Engineer",
    start: "Sep 2019",
    end: "May 2020",
    location: "Yangon, Myanmar",
    achievements: [
      "Restructured and enhanced Golang APIs, shipping new features in collaboration with senior engineers.",
      "Documented API changes and service components for smooth knowledge transfer.",
    ],
    tech: ["Golang", "REST APIs"],
  },
  {
    company: "MTCS IT Solution Co., Ltd",
    role: "PHP Developer (Internship)",
    start: "May 2019",
    end: "Aug 2019",
    location: "Yangon, Myanmar",
    achievements: [
      "Implemented the setup module for a Point of Sale (POS) system from collected requirements.",
      "Built a Travel & Tour demo project with PHP, MySQL, and Bootstrap.",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "State & Data",
    skills: ["Zustand", "Redux", "TanStack Query"],
  },
  {
    label: "Backend",
    skills: ["Laravel", "Filament", "PHP", "MySQL"],
  },
];

// ---------------------------------------------------------------------------
// Education & certificates
// ---------------------------------------------------------------------------
export const education = {
  degree: "Bachelor of Computer Science (B.C.Sc.)",
  school: "University of Computer Studies, Meiktila",
  start: "2014",
  end: "2019",
};

export const certificates = [
  { name: "IT Passport Certificate", year: "2015" },
  { name: "Rockstar Developer Course", year: "2023" },
];

export const languages = ["English", "Myanmar"];

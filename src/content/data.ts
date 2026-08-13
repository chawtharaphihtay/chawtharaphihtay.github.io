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
  phone: "09971025162",
  tagline:
    "I build full-stack web products and mobile apps with Laravel, Vue.js, React, and Next.js — then take them all the way to production.",
  heroStatement:
    "Shipping web and mobile products end-to-end: from Laravel and Vue full-stack features to Nginx-deployed production builds. I care about stable, maintainable software that people actually enjoy using.",
  resumeUrl: "/resume/chaw-tharaphi-htay-resume.pdf",
  availability: "Open to new opportunities · 1 month notice",
};

export const socials = {
  github: "https://github.com/", // TODO: replace with your GitHub URL
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
};

export const projects: Project[] = [
  {
    id: "loyalty-app",
    name: "Customer Loyalty App",
    year: "2024 — Present",
    role: "React Native Developer",
    description:
      "A React Native mobile app that turns one-time shoppers into repeat customers through rewards and engagement features.",
    problem:
      "The business needed a way to keep customers coming back without building a native iOS and Android app from two separate codebases.",
    solution:
      "Built a single cross-platform app with React Native CLI covering rewards tracking, promotions, and engagement flows, integrated with the existing customer backend.",
    outcome:
      "Shipped a production-ready loyalty experience that gives the business a direct, always-on channel to repeat customers.",
    tech: ["React Native", "Redux", "REST APIs"],
    links: [],
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
      "Implemented the storefronts with Next.js App Router and Tailwind CSS, wired up payment integration, and configured Nginx as a reverse proxy for production builds and restarts.",
    outcome:
      "Two live storefronts running in production, with a repeatable deploy process for future releases.",
    tech: ["Next.js", "Tailwind CSS", "Payments", "Nginx"],
    links: [],
  },
  {
    id: "attendance-system",
    name: "Training Attendance Management System",
    year: "2024 — Present",
    role: "Full-Stack Developer",
    description:
      "An internal system for managing training sessions, attendance, and resources with role-based dashboards.",
    problem:
      "Training coordinators were tracking sessions and attendance manually across spreadsheets, with no single view for admins versus trainees.",
    solution:
      "Built the system on Vite with role-based dashboards, structured reporting views, and attendance tracking tailored to each role.",
    outcome:
      "Replaced manual tracking with a single system for scheduling, attendance, and reporting.",
    tech: ["Vite", "React", "Role-based access"],
    links: [],
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
    tech: ["Next.js", "React", "SEO"],
    links: [],
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
      "Developed end-to-end full-stack features using Laravel, Vue.js, Inertia.js, Filament, REST APIs, and relational databases, covering backend services, frontend interfaces, and administration.",
      "Designed and implemented reusable CRUD, CMS, reporting, filtering, pagination, and data-management modules for multiple business applications.",
      "Built and integrated RESTful APIs with frontend applications, implementing validation, business logic, file management, and error handling.",
      "Developed responsive web interfaces and resolved cross-device UI/UX and functional issues, ensuring consistent experiences across desktop and mobile.",
      "Managed features across multiple projects from backend implementation through frontend integration, testing, bug fixing, code quality improvements, and deployment.",
    ],
    tech: ["Laravel", "Vue.js", "Inertia.js", "Filament", "REST APIs", "MySQL"],
  },
  {
    company: "Myanmar Software Integrated Solutions",
    role: "React / React Native Developer",
    start: "Feb 2024",
    end: "Jan 2026",
    location: "Yangon, Myanmar",
    achievements: [
      "Built and maintained information-based websites using Next.js (App Router) with SEO-friendly structure and responsive UI.",
      "Developed a customer loyalty mobile application using React Native CLI, supporting rewards, promotions, and engagement.",
      "Maintained two eCommerce websites on Next.js (App Router), including payment integration.",
      "Built a Training Attendance Management System with role-based dashboards, reports, and attendance tracking, using Vite.",
      "Actively maintained a job search website, delivering UI updates and feature improvements based on customer requirements.",
      "Handled production deployment of Next.js websites, configuring Nginx reverse proxy and managing build updates and restarts.",
    ],
    tech: ["React", "Next.js", "React Native", "Vite", "Tailwind CSS", "Nginx"],
  },
  {
    company: "World Wide Myanmar Co., Ltd",
    role: "WordPress (CMS) Developer",
    start: "Jun 2020",
    end: "Jan 2024",
    location: "Yangon, Myanmar",
    achievements: [
      "Developed and customized WordPress websites under senior guidance, integrating WooCommerce and essential plugins.",
      "Customized PHP-based themes and templates to meet project requirements and improve functionality.",
      "Edited and optimized images for websites using Photoshop to improve visual appeal and performance.",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "Photoshop"],
  },
  {
    company: "CDE Co., Ltd (Galaxie AI)",
    role: "Junior API Engineer",
    start: "Sep 2019",
    end: "May 2020",
    location: "Yangon, Myanmar",
    achievements: [
      "Collaborated with the team to modify and enhance existing APIs built in Golang to meet project requirements.",
      "Restructured an application service API with Golang, working closely with senior engineers and a UI engineer to ship new features.",
      "Wrote clear technical documentation of API changes and service components for smooth knowledge transfer.",
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
      "Collected requirements and implemented the setup module for a Point of Sale (POS) system.",
      "Developed a Travel & Tour demo project using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
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
    skills: ["React.js", "Next.js (App Router)", "Vue.js", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "State & Data",
    skills: ["Redux", "Zustand", "React Context API", "Inertia.js", "REST APIs"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "React Native CLI"],
  },
  {
    label: "CMS & Server-Side",
    skills: ["Laravel", "Filament", "WordPress", "WooCommerce", "PHP"],
  },
  {
    label: "Tooling & Ops",
    skills: ["Git / GitHub", "Nginx", "Production Deployment", "Photoshop"],
  },
];

// ---------------------------------------------------------------------------
// Philosophy — a genuine sequence: how a piece of work moves from request to
// shipped feature, drawn from the deployment + iteration pattern on the résumé.
// ---------------------------------------------------------------------------
export const philosophy = [
  {
    step: "01",
    title: "Understand the request",
    description:
      "Start from what the customer or team actually needs, not the first technical solution that comes to mind.",
  },
  {
    step: "02",
    title: "Build with the team",
    description:
      "Work closely with leads and teammates, following shared practices so the codebase stays stable as it grows.",
  },
  {
    step: "03",
    title: "Ship it to production",
    description:
      "Take the feature all the way through deployment — build, restart, verify — not just to a pull request.",
  },
  {
    step: "04",
    title: "Maintain and iterate",
    description:
      "Keep improving based on real usage and feedback, the same way a site or app is maintained long after launch.",
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
  { name: "IT Passport", year: "2015" },
  { name: "Rockstar Developer Course", year: "2023" },
];

export const languages = ["English", "Myanmar"];

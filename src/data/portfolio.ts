import type {
  NavItem,
  HeroData,
  CaseStudy,
  ArchiveProject,
  TechCategory,
  AboutData,
  Testimonial,
  ContactData,
} from "../types";

/**
 * Single source of truth for all portfolio content.
 */

/* ─── Navigation ─── */
export const navItems: NavItem[] = [
  { label: "Home", sectionId: "hero" },
  { label: "Work", sectionId: "case-studies" },
  { label: "About", sectionId: "about" },
  { label: "Tech Stack", sectionId: "tech-stack" },
  { label: "Archive", sectionId: "archive" },
  { label: "Contact", sectionId: "contact" },
];

/* ─── Hero ─── */
export const heroData: HeroData = {
  animatedLines: [
    "Hello, I'm",
    "Jonathon Wilson",
    "Software Engineer",
  ],
  name: "Jonathon Wilson",
  title: "Senior Software Engineer",
  tagline:
    "Building reliable distributed systems at enterprise scale. " +
    "Design degree holder turned software engineer — I bring visual " +
    "intentionality to backend architecture.",
  stats: [
    { value: "6+", label: "Years Engineering" },
    { value: "10+", label: "Enterprise Platforms" },
    { value: "100K+", label: "Users Served" },
    /** TODO: Update these stats with accurate current numbers */
    { value: "99.9%", label: "Uptime SLA" },
  ],
};

/* ─── Case Studies ─── */
export const caseStudies: CaseStudy[] = [
  {
    id: "dora-metrics",
    title: "DORA Metrics Platform",
    subtitle: "Engineering Excellence Measurement",
    terminalCommand: "$ deploy --service dora-metrics --env production",
    description:
      "Go-based service that integrates ServiceNow change management with " +
      "GitHub Actions deployment data, piping metrics into BigQuery for " +
      "engineering leadership dashboards. Enabled data-driven decisions " +
      "around deployment frequency, lead time, and change failure rate.",
    impact: [
      "Reduced change failure rate tracking from manual to automated",
      "Provided real-time DORA metrics to engineering leadership",
      "Integrated across ServiceNow, GitHub Actions, and BigQuery",
    ],
    techStack: ["Go", "BigQuery", "ServiceNow API", "GitHub Actions", "Cloud Run"],
    /** TODO: Add GitHub URL if repo is public */
    /** TODO: Add screenshot once assets are provided */
  },
  {
    id: "voice-of-associate",
    title: "Voice of the Associate Survey Platform",
    subtitle: "Enterprise Feedback at Scale",
    terminalCommand: "$ yarn build && gcloud run deploy voa-platform",
    description:
      "React/TypeScript front-end integrated with Qualtrics survey engine, " +
      "serving tens of thousands of associates across the enterprise. " +
      "Focused on accessibility, internationalization, and seamless " +
      "survey-to-analytics pipeline.",
    impact: [
      "Scaled to support 100K+ associate survey responses",
      "Built accessible, internationalized UI meeting WCAG standards",
      "Streamlined survey-to-analytics pipeline with Qualtrics integration",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Qualtrics API",
      "GKE",
      "AlloyDB",
      "Cloud Run",
    ],
    /** TODO: Add GitHub URL if repo is public */
    /** TODO: Add screenshot once assets are provided */
  },
  {
    id: "distributed-systems",
    title: "Enterprise Cloud Infrastructure",
    subtitle: "Platform Engineering & Reliability",
    terminalCommand: "$ kubectl apply -f infra/ --namespace production",
    description:
      "Cross-team platform engineering across multiple GCP services — " +
      "designing and maintaining distributed systems on GKE, Cloud Run, " +
      "and AlloyDB. Focus on reliability, observability, and developer " +
      "experience for internal engineering teams.",
    impact: [
      "Architected multi-service deployments on GKE and Cloud Run",
      "Maintained 99.9% uptime SLA across production services",
      "Improved developer onboarding time through platform tooling",
    ],
    techStack: ["GKE", "Cloud Run", "AlloyDB", "Terraform", "Docker", "Go"],
    /** TODO: Add specifics once cleared for public sharing */
  },
];

/* ─── Archive (Legacy Personal Projects) ─── */
export const archiveProjects: ArchiveProject[] = [
  {
    id: "react-recipes",
    title: "React Recipes",
    description:
      "Full-stack MERN application using a 3rd-party recipe API. " +
      "Built during General Assembly bootcamp as a capstone project.",
    techStack: ["React", "MongoDB", "Express", "Node", "Materialize UI"],
    githubUrl: "https://github.com/theunsungdesigner/project-four-recipe",
    liveUrl: "https://react-recipes-project.herokuapp.com/",
    isLiveLinkBroken: true,
  },
  {
    id: "artisan-music",
    title: "Artisan Music",
    description: "Fully responsive landing page built with vanilla JavaScript and jQuery.",
    techStack: ["JavaScript", "jQuery", "HTML/CSS"],
    githubUrl: "https://github.com/theunsungdesigner/artisan-music",
    liveUrl: "https://aritsan-music.netlify.com/",
    isLiveLinkBroken: true,
  },
  {
    id: "mega-hangman",
    title: "Super Mega HangMan",
    description:
      "Dynamic vanilla JavaScript/jQuery game using nested iteration. " +
      "Mega Man themed hangman with animated sprites.",
    techStack: ["JavaScript", "jQuery", "CSS Animations"],
    githubUrl: "https://github.com/theunsungdesigner/project-one-hangman",
    liveUrl: "https://mega-hang-man.netlify.com/",
    isLiveLinkBroken: true,
  },
];

/* ─── Tech Stack ─── */
export const techCategories: TechCategory[] = [
  {
    category: "Backend",
    iconName: "Backend",
    items: [
      "Java / Spring Boot",
      "Go (Golang)",
      "Node.js / Express",
      "Python",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    category: "Frontend",
    iconName: "Frontend",
    items: [
      "React",
      "TypeScript / JavaScript",
      "HTML5 / CSS3",
      "MUI / Ant Design",
      "Highcharts",
      "Responsive Design",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    iconName: "Cloud",
    items: [
      "Google Cloud Platform (GCP)",
      "Kubernetes (GKE)",
      "Cloud Run",
      "Docker",
      "Terraform",
      "Helm Charts",
    ],
  },
  {
    category: "DevOps & CI/CD",
    iconName: "DevOps",
    items: [
      "GitHub Actions",
      "Spinnaker",
      "Jenkins",
      "CI/CD Pipelines",
      "Monorepo Structures",
      "Release Management",
    ],
  },
  {
    category: "Data & Analytics",
    iconName: "Data",
    items: [
      "PostgreSQL / AlloyDB",
      "BigQuery",
      "Redis",
      "GraphQL",
      "Cassandra / MongoDB",
      "Looker / Tableau",
    ],
  },
  {
    category: "Monitoring & Observability",
    iconName: "Monitoring",
    items: [
      "Grafana Dashboards",
      "DORA Metrics",
      "Code Climate",
      "Pendo Analytics",
      "Application Monitoring",
      "Alerting Systems",
    ],
  },
  {
    category: "Testing & Quality",
    iconName: "Testing",
    items: [
      "Jest",
      "React Testing Library",
      "Ginkgo",
      "Spock",
      "End-to-End Testing",
    ],
  },
  {
    category: "Architecture & Practices",
    iconName: "Architecture",
    items: [
      "Hexagonal Architecture",
      "Event-Driven Patterns",
      "Modular Monolith",
      "Agile / Scrum",
      "MVC Architecture",
      "System Design",
    ],
  },
];

/* ─── About ─── */
export const aboutData: AboutData = {
  heading: "From Pixels to Platforms",
  paragraphs: [
    "I started my career with a Graphic Design degree from Georgia Southern University, " +
      "spending years crafting visual systems and understanding how people interact with " +
      "designed experiences. That foundation in layout, hierarchy, and intentional design " +
      "followed me into software engineering.",
    "After completing General Assembly's Software Engineering Immersive, I transitioned " +
      "into full-stack development and quickly moved into enterprise-scale distributed " +
      "systems. Today I build and maintain platforms on GCP that serve hundreds of " +
      "thousands of users — with the same attention to craft I brought to design.",
    "I believe the best engineering is invisible: reliable systems, clear abstractions, " +
      "and code that communicates its intent. Whether I'm designing a BigQuery pipeline " +
      "or a React component tree, the goal is always the same — make complex things " +
      "feel simple.",
  ],
};

/* ─── Testimonials ─── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Jonathon is a very astute developer with a keen eye for detail. " +
      "Not only can he create beautiful applications, but their functionality " +
      "is through the roof. He is also a great team player and gives his all " +
      "on every project.",
    name: "Musa Sillah",
    role: "Senior Software Engineer",
  },
  {
    quote:
      "Jonathon has always been a dedicated individual who pushes himself " +
      "and the people around him to get the job done right. He's a fast " +
      "learner with incredible attention to detail, and isn't afraid to " +
      "step outside the box to look at a problem from a fresh angle.",
    name: "John Baker",
    role: "Staff Software Engineer",
  },
  /** TODO: Add more recent testimonials from enterprise colleagues */
];

/* ─── Contact ─── */
export const contactData: ContactData = {
  heading: "Let's Connect",
  subtext: "Open to conversations about platform engineering, system design, and new opportunities.",
  email: "jonathon.brandon.wilson@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/theunsungdesigner",
      iconName: "GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/jonathon-wilson-codes/",
      iconName: "LinkedIn",
    },
    {
      platform: "Email",
      url: "mailto:jonathon.brandon.wilson@gmail.com",
      iconName: "Email",
    },
  ],
};

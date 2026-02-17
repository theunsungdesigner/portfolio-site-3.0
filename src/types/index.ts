/**
 * Shared TypeScript interfaces for the portfolio site.
 *
 * All data shapes are defined here — components import from this file.
 * No `any` types. No loose assertions. Every field is explicit.
 */

/* ─── Navigation ─── */
export interface NavItem {
  label: string;
  sectionId: string;
}

/* ─── Hero / Stats ─── */
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  /** Lines rendered by the AnimatedText typing component */
  animatedLines: string[];
  /** Kept for SEO / meta tag use */
  name: string;
  title: string;
  tagline: string;
  stats: HeroStat[];
}

/* ─── Case Studies (Enterprise Work) ─── */
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  /** Terminal-style intro line shown as a visual hook */
  terminalCommand: string;
  description: string;
  impact: string[];
  techStack: string[];
  /** TODO: Add live links once projects are publicly accessible */
  githubUrl?: string;
  liveUrl?: string;
  /** TODO: Add screenshot/image path once assets are provided */
  imageUrl?: string;
}

/* ─── Archive (Legacy Personal Projects) ─── */
export interface ArchiveProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  /**
   * TODO: These links are currently broken (old Heroku/Netlify deploys).
   * Mark as broken in UI until redeployed.
   */
  liveUrl?: string;
  isLiveLinkBroken: boolean;
}

/* ─── Tech Stack ─── */
export type TechIconName =
  | "Backend"
  | "Frontend"
  | "Cloud"
  | "DevOps"
  | "Data"
  | "Monitoring"
  | "Testing"
  | "Architecture";

export interface TechCategory {
  category: string;
  iconName: TechIconName;
  items: string[];
}

/* ─── About ─── */
export interface AboutData {
  heading: string;
  paragraphs: string[];
}

/* ─── Testimonial ─── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/* ─── Contact / Social Links ─── */
export interface SocialLink {
  platform: string;
  url: string;
  /** MUI icon name — rendered dynamically in the component */
  iconName: "GitHub" | "LinkedIn" | "Email";
}

export interface ContactData {
  heading: string;
  subtext: string;
  email: string;
  socialLinks: SocialLink[];
}

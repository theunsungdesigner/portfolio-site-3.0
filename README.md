# Portfolio Site 3.0

A modern, professionally designed portfolio showcasing engineering expertise and case studies. Built with React, TypeScript, and cutting-edge animation libraries for an elegant, engaging user experience.

## Purpose

This portfolio site serves as a comprehensive showcase for Jonathon Wilson's software engineering work, featuring:

- **Hero Section** — Animated introduction with professional portrait
- **Case Studies** — Detailed projects demonstrating technical expertise and impact
- **Tech Stack** — Technologies and frameworks regularly used
- **About Section** — Engineering philosophy and professional testimonials
- **Archive** — Additional projects and contributions
- **Contact** — Connectivity for collaboration inquiries

## Technology Stack

### Frontend

- **React 19** — Modern UI library with concurrent rendering
- **TypeScript** — Type-safe component development
- **Vite 6** — Fast build tooling and dev server
- **Material-UI (MUI) 6** — Comprehensive component library and theming system
- **Framer Motion 11** — Smooth, production-grade animations

### Styling & Animation

- **Emotion** — CSS-in-JS for styled components
- **Framer Motion** — Complex motion graphics and transitions

### Development

- **ESLint** — Code quality and consistency
- **TypeScript Compiler** — Type checking

## Screen Shots ##
<img width="1210" height="760" alt="image" src="https://github.com/user-attachments/assets/87218e83-bffe-4c5f-9f5b-e479d6f268ca" />

<img width="1065" height="759" alt="image" src="https://github.com/user-attachments/assets/98f74d68-ec22-46af-80a3-270f18c087a0" />



## Project Structure

```
src/
├── components/      # React components organized by section
│   ├── Hero/
│   ├── About/
│   ├── CaseStudies/
│   ├── Archive/
│   ├── Contact/
│   ├── TechStack/
│   └── Layout/
├── data/           # Portfolio content (single source of truth)
├── theme/          # Design tokens and styling configuration
├── types/          # TypeScript interfaces and types
└── App.tsx         # Root component
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/theunsungdesigner/portfolio-site-3.0.git
cd portfolio-site-3.0
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module reloading.

### Build for Production

```bash
npm run build
```

Generates optimized bundle in the `dist/` directory.

### Lint Code

```bash
npm lint
```

## Design Philosophy

This portfolio emphasizes:

- **Elegant Motion** — Framer Motion animations create smooth, intentional transitions
- **Typography & Hierarchy** — Clear visual structure with Material-UI tokens
- **Responsive Design** — Mobile-first approach, optimized for all screen sizes
- **Content-Driven** — Centralized data file (`src/data/portfolio.ts`) separates content from component logic
- **Visual Richness** — Hero portrait as a statement of design intentionality

## Deployment

The site is optimized for deployment on modern cloud platforms. After building:

```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## Key Features

- **Animated Text Typing** — Engaging hero introduction
- **Synchronized Animations** — Text and portrait animations render in harmony
- **Fully Responsive** — Optimized experience from mobile to desktop
- **Type-Safe** — Full TypeScript coverage for reliability
- **Performance-Optimized** — Vite bundling and production builds

---

**Built with intentionality, designed for impact.**

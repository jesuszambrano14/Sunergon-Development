# Sunergon Development

**Responsive company website built with React for a construction and development business.**

This repository contains the frontend implementation of the Sunergon Development website. The project translates a visual design into a multi-page React application focused on presenting the company, its services, completed work, and customer contact/quote workflows.

## Project overview

The application includes dedicated experiences for core business content rather than functioning as a single static landing page. The source contains pages for company information, services, projects, contact, and quote requests, supported by reusable UI components and shared application state.

## Key areas

- Company/about experience
- Construction services presentation
- Project portfolio
- Contact experience
- Quote-request flow
- Reusable component-based UI
- Responsive frontend architecture
- Client-side routing
- Production build workflow

## Tech stack

- React 18
- JavaScript / JSX
- Vite
- React Router
- Radix UI component primitives
- React Hook Form
- Recharts
- Lucide icons
- Embla Carousel
- Flowbite
- Context-based application state

## Project structure

```text
src/
├── components/     Reusable UI components and page sections
├── contexts/       Shared React state
├── pages/          About, services, projects, contact and quote pages
├── styles/         Global styling and design tokens
└── main entry      Application bootstrap and routing
```

## Engineering focus

This project demonstrates frontend engineering around a real business website, including translating design requirements into reusable React components, organizing a multi-page application, implementing routing and shared state, and maintaining a production build workflow.

The project also reflects an important part of product development: software is not only about implementing components—it is about understanding what a business needs to communicate and turning those requirements into a usable digital experience.

## Local development

### Requirements

- Node.js 18+ (Node 20+ recommended)
- npm 9+

### Run locally

```bash
git clone https://github.com/jesuszambrano14/Sunergon-Development.git
cd Sunergon-Development
npm install
npm run dev
```

### Production build

```bash
npm run build
```

The production bundle is generated in `dist/`.

## Development workflow

Feature work can be developed on dedicated branches and reviewed through pull requests before merging into `main`.

```bash
git checkout -b feature/feature-name
# make changes
git add -A
git commit -m "feat: describe the change"
git push -u origin feature/feature-name
```

## Design origin

The application was developed from a Figma design and translated into a working React/Vite frontend.

## Why it matters in my portfolio

This project demonstrates my ability to take a business-facing design and turn it into an organized frontend codebase. It complements my more application- and data-oriented projects by showing UI implementation, component architecture, routing, responsive design, and business communication through software.

---

**Jesús Zambrano**  
B.S. Computer Science Candidate — University of North Texas, Fall 2026  
Software Engineering · Frontend Development · Product Engineering

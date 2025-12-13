export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export interface Skill {
  title: string;
  items: string[];
  delay?: number;
}

export const timelineData: TimelineItem[] = [
  {
    title: "Front-End Engineer",
    company: "Dadeh Kavan Pishro",
    period: "2023 – Present",
    type: "experience",
    description:
      "Working on enterprise-level financial applications with a focus on scalable React-based front-end architecture. Recently contributed to a Credit Scoring platform by implementing complex multi-step forms, advanced validation flows, and data-driven dashboards. Collaborated closely with backend and product teams to deliver performant, maintainable, and user-centered solutions.",
  },
  {
    title: "Front-End Developer",
    company: "Arena",
    period: "2022 – 2023",
    type: "experience",
    description:
      "Developed and maintained web applications across medical platforms, internal CRM systems, and real-time dashboards. Focused on building clean, reusable UI components, improving application performance, and delivering consistent user experiences within cross-functional teams.",
  },
  {
    title: "M.Sc. Remote Sensing & GIS",
    company: "Shahid Beheshti University",
    period: "2019 – 2022",
    description:
      "Thesis: Spatial analysis of urban heat islands using satellite imagery processing, geospatial data visualization.",
    type: "education",
  },
  {
    title: "B.Sc. Climatology",
    company: "University of Tabriz",
    period: "2013 – 2017",
    description:
      "Focused on meteorology, climate modeling, and environmental data analysis.",
    type: "education",
  },
];

export const skills: Skill[] = [
  {
    title: "Core Front-End",
    items: [
      "React",
      "TypeScript",
      "Modern JavaScript (ES6+)",
      "Component-Driven Architecture",
    ],
    delay: 0,
  },
  {
    title: "State & Data Management",
    items: [
      "Redux",
      "Zustand",
      "React Query / TanStack Query",
      "Server State Management",
    ],
    delay: 1,
  },
  {
    title: "Styling & UI Systems",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Design Systems",
      "Styled-components",
    ],
    delay: 2,
  },
  {
    title: "Performance & Quality",
    items: [
      "Performance Optimization",
      "Rendering Optimization",
      "Reusable UI Patterns",
      "Accessibility (a11y)",
    ],
    delay: 3,
  },
  {
    title: "Maps & Specialized Domains",
    items: ["Leaflet", "GIS-Based Interfaces", "Geospatial Data Visualization"],
    delay: 4,
  },
];

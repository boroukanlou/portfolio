export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export interface Skill {
  name: string;
  level: number;
}

export const timelineData: TimelineItem[] = [
  {
    title: "Front-End Developer (React 17 → 18)",
    company: "Dadeh Kavan Pishro",
    period: "Oct 2024 – Present",
    description:
      "Led migration from React 17 to 18, implemented React Query, optimized performance with lazy loading and code splitting, built enterprise dashboard with Material UI.",
    type: "experience",
  },
  {
    title: "Front-End Developer",
    company: "Arena Life Science",
    period: "Dec 2023 – Jul 2024",
    description:
      "Built medical representative management system with real-time Leaflet maps, dynamic forms, and responsive UI using Material UI.",
    type: "experience",
  },
  {
    title: "CRM Dashboard Developer",
    company: "Freelance Project",
    period: "Dec 2023 – Jul 2024",
    description:
      "Developed modern CRM using Vite + React + Styled Components. Implemented interactive visit tracking with Leaflet and real-time data sync.",
    type: "experience",
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
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Redux / Zustand", level: 92 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Material UI / shadcn", level: 94 },
  { name: "Leaflet / GIS", level: 88 },
  { name: "React Query / TanStack", level: 90 },
  { name: "Performance Optimization", level: 93 },
];

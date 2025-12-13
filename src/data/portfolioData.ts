export interface Project {
  id: number;
  title: string;
  description: string;
  category: "webapp" | "dashboard" | "map" | "mobile";
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dadeh Kavan Enterprise Portal",
    description:
      "Large-scale enterprise web application for managing business processes, users, and real-time analytics.",
    category: "dashboard",
    image: "omnifood.png",
    technologies: [
      "React 18",
      "Redux",
      "React Query",
      "Material UI",
      "Chart.js",
    ],
    liveUrl: "https://dadeh-kavan.ir",
    features: [
      "Migration from React 17 → 18 with zero downtime",
      "Advanced data caching with React Query",
      "Dynamic dashboards with real-time charts",
      "Lazy loading & code splitting for 3x faster load",
    ],
  },
  {
    id: 2,
    title: "Arena Life Science - Medical Rep System",
    description:
      "Platform for managing medical representatives with real-time location tracking and visit scheduling.",
    category: "map",
    image: "natours.png",
    technologies: ["React", "Material UI", "Leaflet", "Axios", "Redux"],
    features: [
      "Interactive Leaflet maps with real-time geolocation",
      "Dynamic doctor & pharmacy database",
      "Visit scheduling and ticketing system",
      "Fully responsive for field agents",
    ],
  },
  {
    id: 3,
    title: "Advanced CRM Dashboard",
    description:
      "Modern CRM with visit tracking, customer management and analytics using Vite + Styled Components.",
    category: "dashboard",
    image: "maze.png",
    technologies: [
      "Vite",
      "React",
      "Styled Components",
      "Leaflet",
      "React Router",
    ],
    githubUrl: "https://github.com/boroukanlou/crm-dashboard",
    features: [
      "Real-time visit registration with GPS",
      "Dynamic markers & clustering on map",
      "Beautiful animated UI with Styled Components",
      "Offline support with service workers",
    ],
  },
  {
    id: 4,
    title: "GeoVisit Tracker",
    description:
      "Mobile-first PWA for field agents to log visits with automatic location capture and photo upload.",
    category: "mobile",
    image: "ecoreserve.png",
    technologies: ["React", "PWA", "Leaflet", "Camera API", "IndexedDB"],
    liveUrl: "https://geovisit.app",
    features: [
      "Works offline in remote areas",
      "Auto GPS + photo capture",
      "Sync when back online",
      "Built as installable PWA",
    ],
  },
  {
    id: 5,
    title: "Admin Panel Pro",
    description:
      "Feature-rich admin template with dark mode, multi-language and role-based access control.",
    category: "webapp",
    image: "/assets/images/projects/admin-pro.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Zustand"],
    githubUrl: "https://github.com/boroukanlou/admin-pro",
    features: [
      "Full dark/light mode toggle",
      "Role-based permissions",
      "Internationalization (i18n)",
      "Built with App Router & Server Components",
    ],
  },
];

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
    title: "Omnifood",
    description: "Responsive food subscription landing page",
    category: "webapp",
    image: "omnifood.png",
    technologies: ["HTML5", "CSS3"],
    liveUrl: "https://omnifood-shahin.netlify.app/",
    githubUrl: "https://github.com/boroukanlou/omnifood",
    features: [
      "Fully responsive landing page built with semantic HTML and modern CSS",
      "Mobile-first layout using Flexbox and CSS Grid",
      "Optimized images and assets for better performance",
      "Clean and user-focused UI for a fictional food subscription service",
      "Deployed as a static website on Netlify",
    ],
  },
  {
    id: 2,
    title: "Natours",
    description: "Adventure tour landing page",
    category: "webapp",
    image: "natours.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://natours-shahin.netlify.app/",
    githubUrl: "https://github.com/boroukanlou/Natours",
    features: [
      "Responsive landing page for an adventure tour company",
      "Advanced CSS techniques including animations and transitions",
      "Interactive UI behaviors implemented with vanilla JavaScript",
      "Well-structured layout using modern CSS and reusable components",
      "Deployed as a static website on Netlify",
    ],
  },

  {
    id: 3,
    title: "Maze Game",
    description: "Interactive maze game with physics-based gameplay",
    category: "map",
    image: "maze.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Matter.js"],
    liveUrl: "https://maze-shahin.netlify.app/",
    githubUrl: "https://github.com/boroukanlou/javascript-basic-03-maze",
    features: [
      "Procedurally generated maze using depth-first search algorithm",
      "Physics-based gameplay powered by Matter.js",
      "Keyboard-controlled player movement with real-time collision detection",
      "Dynamic difficulty based on user-defined rows and columns",
      "Win condition with gravity and animated wall collapse effect",
    ],
  },

  {
    id: 4,
    title: "Personal Portfolio",
    description: "Modern developer portfolio website",
    category: "dashboard",
    image: "portfolio.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    liveUrl: "https://sboroukanlou.com",
    githubUrl: "https://github.com/boroukanlou/portfolio",
    features: [
      "Modern and responsive personal portfolio built with React and TypeScript",
      "Clean UI using Tailwind CSS and shadcn/ui components",
      "Smooth animations and transitions with Framer Motion",
      "Showcases projects, skills, and professional background",
    ],
  },
  {
    id: 5,
    title: "WorldWise",
    description: "Interactive travel tracking web app",
    category: "dashboard",
    image: "worldwise.png",
    technologies: [
      "React 18",
      "Vite",
      "JavaScript (ES6+)",
      "React Router",
      "Leaflet",
      "React Leaflet",
      "JSON Server",
    ],
    githubUrl: "https://github.com/boroukanlou/react-basic-07-worldwise",
    features: [
      "Single-page application built with React 18 and Vite",
      "Interactive map integration using Leaflet and React Leaflet",
      "Client-side routing with React Router",
      "CRUD operations with a mock REST API powered by JSON Server",
      "Date-based travel logging with city and location tracking",
    ],
  },
  {
    id: 6,
    title: "Anti-Money Laundering (AML) System",
    description: "Enterprise-grade AML monitoring platform for banking systems",
    category: "dashboard",
    image: "dmlco.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Axios",
      "Chart.js",
      "GoJS",
    ],
    features: [
      "Front-end development of an enterprise anti-money laundering (AML) system",
      "Implemented for two banking institutions as part of a production-grade platform",
      "Complex data visualization including charts, tables, and transaction flows",
      "Rule-based monitoring dashboards for suspicious activity detection",
      "Multi-language and RTL support tailored for Persian banking systems",
    ],
  },
  {
    id: 7,
    title: "CRM System",
    description: "Modern customer relationship management web application",
    category: "dashboard",
    image: "arena.png",
    technologies: [
      "React 18",
      "Vite",
      "Supabase",
      "React Query",
      "React Hook Form",
      "Styled Components",
      "Recharts",
      "Leaflet",
    ],
    githubUrl: "https://github.com/boroukanlou/crm",
    features: [
      "Full-featured CRM web application built with React 18 and Vite",
      "Authentication and data management using Supabase",
      "Server-state management with TanStack React Query",
      "Form handling and validation with React Hook Form",
      "Interactive dashboards with charts and customer analytics",
      "Map-based customer location visualization using Leaflet",
    ],
  },
  {
    id: 8,
    title: "Credit Scoring System",
    description: "Financial credit assessment and scoring web application",
    category: "dashboard",
    image: "creditscoring.png",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Framer Motion",
    ],
    features: [
      "Multi-step credit scoring form with complex validation logic",
      "Type-safe form handling using React Hook Form and Zod",
      "State management with Zustand for predictable data flow",
      "Interactive dashboards and score visualization with Recharts",
      "Accessible and animated UI built with Radix UI and Framer Motion",
    ],
  },
];

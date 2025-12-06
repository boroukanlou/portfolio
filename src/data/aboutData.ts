import { Palette, Code2, Smartphone, Camera } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: typeof Palette;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  date: string;
}

export const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Modern, pixel-perfect and fully responsive designs crafted with the latest trends and best UX practices.",
    icon: Palette,
  },
  {
    title: "Front-End Development",
    description:
      "High-performance, maintainable and scalable web applications built with React, TypeScript and modern tooling.",
    icon: Code2,
  },
  {
    title: "Mobile-First & PWA",
    description:
      "Progressive Web Apps and mobile-optimized experiences that work flawlessly across all devices.",
    icon: Smartphone,
  },
  {
    title: "Data Visualization & Maps",
    description:
      "Interactive dashboards, charts and geospatial applications using Leaflet, Chart.js and advanced React patterns.",
    icon: Camera,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amir Hosseini",
    role: "CTO at Dadeh Kavan Pishro",
    content:
      "Shahram played a key role in migrating our legacy React 17 app to React 18 with zero downtime. His attention to performance, code quality and best practices significantly improved both developer experience and app speed. Highly recommended!",
    avatar: "/assets/images/avatar-1.png",
    date: "November 2024",
  },
  {
    name: "Sara Ahmadi",
    role: "Product Manager at Arena Life Science",
    content:
      "Working with Shahram was an absolute pleasure. He delivered complex forms, real-time location tracking with Leaflet, and a beautiful responsive UI — all on time and with excellent communication. A true professional.",
    avatar: "/assets/images/avatar-2.png",
    date: "June 2024",
  },
  {
    name: "Mohammad Rezaei",
    role: "Lead Developer — CRM Project",
    content:
      "Shahram built our entire CRM dashboard from scratch using Vite + React + Styled Components. The interactive map feature for field visits works perfectly on mobile devices. Clean code, great performance, and super reliable.",
    avatar: "/assets/images/avatar-3.png",
    date: "May 2024",
  },
  {
    name: "Nima Karimi",
    role: "Freelance Client",
    content:
      "Needed a fast, modern portfolio with animations and dark mode. Shahram over-delivered — the site loads in under 1s, looks stunning, and ranks great on Lighthouse. Will definitely hire again!",
    avatar: "/assets/images/avatar-4.png",
    date: "March 2024",
  },
];

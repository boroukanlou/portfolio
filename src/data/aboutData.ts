import { Palette, Users, Gauge, FileText, LayoutDashboard } from "lucide-react";

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
    title: "Enterprise Front-End Development",
    description:
      "Building scalable and maintainable front-end architectures for complex enterprise and financial applications, with a strong focus on performance, reliability, and long-term maintainability.",
    icon: LayoutDashboard,
  },
  {
    title: "Data-Driven Interfaces & Complex Forms",
    description:
      "Designing and implementing multi-step forms, advanced validation flows, and data-heavy dashboards that transform complex user input and sensitive data into clear and trustworthy user experiences.",
    icon: FileText,
  },
  {
    title: "Performance, Architecture & UX",
    description:
      "Focusing on clean architecture, optimized rendering, and accessible UI patterns to deliver fast, consistent, and user-friendly interfaces across modern web applications.",
    icon: Gauge,
  },
  {
    title: "Product-Oriented Front-End Engineering",
    description:
      "Collaborating closely with product managers, designers, and backend teams to translate business requirements into well-structured, user-centered front-end solutions that support long-term product growth.",
    icon: Users,
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

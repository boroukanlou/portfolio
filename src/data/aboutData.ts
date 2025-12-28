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
    name: "John Doe",
    role: "CTO at Company",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    avatar: "Avatar2.png",
    date: "November 2024",
  },
  {
    name: "Alexis Hawkins",
    role: "Product Manager at Company",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    avatar: "Avatar1.png",
    date: "June 2024",
  },
  {
    name: "Raven Dixon",
    role: "Lead Developer — CRM Project",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    avatar: "Avatar3.png",
    date: "May 2024",
  },
  {
    name: "Parker McGee",
    role: "Freelance Client",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    avatar: "Avatar4.png",
    date: "March 2024",
  },
];

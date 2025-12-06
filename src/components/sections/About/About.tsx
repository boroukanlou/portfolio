import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialModal } from "./TestimonialModal";
import { services, testimonials } from "@/data/aboutData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function About() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  return (
    <section className="space-y-20 py-10">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-10">
          About Me
        </h2>

        <div className="space-y-7 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
          <p>
            Hi, I'm{" "}
            <span className="font-bold text-white">Shahram Boroukanlou</span> —
            a passionate{" "}
            <span className="text-primary font-semibold">
              Front-End Engineer
            </span>{" "}
            based in Tehran, Iran. I turn complex ideas into clean, fast, and
            beautiful web experiences.
          </p>

          <p>
            Currently working at <strong>Dadeh Kavan Pishro</strong>, where I've
            successfully migrated a large-scale enterprise React 17 application
            to React 18, implemented advanced state management with Redux +
            React Query, optimized performance through code splitting and lazy
            loading, and built reusable, accessible UI components with Material
            UI.
          </p>

          <p>
            Previously, I developed a medical representative management platform
            at <strong>Arena Life Science</strong> and a modern CRM dashboard
            using Vite + Styled Components — both featuring real-time Leaflet
            maps that capture field agents' locations directly from their mobile
            devices.
          </p>

          <p>
            With a Master's in <strong>Remote Sensing & GIS</strong> from Shahid
            Beheshti University, I have a unique edge in building data-rich,
            map-based, and visually intelligent applications.
          </p>

          <p>
            I care deeply about performance, accessibility, clean architecture,
            and writing code that not only works — but feels great to use.
          </p>

          <p className="text-xl font-medium text-primary pt-6">
            Let's build something exceptional together.
          </p>
        </div>
      </div>

      <div className="px-6">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
          What I Do
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="px-6">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
          Client Testimonials
        </h3>

        <ScrollArea className="w-full">
          <div className="flex gap-8 pb-8 px-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                onClick={() => setSelectedTestimonial(testimonial)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <TestimonialModal
        testimonial={selectedTestimonial}
        open={!!selectedTestimonial}
        onOpenChange={(open) => !open && setSelectedTestimonial(null)}
      />
    </section>
  );
}

import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialModal } from "./TestimonialModal";
import { services, testimonials } from "@/data/aboutData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

export function About() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  return (
    <Card className="bg-card/80 backdrop-blur-md border-border rounded-3xl p-3 md:p-10 shadow-2xl">
      <section className="w-full">
        <div className="max-w-3xl mx-auto space-y-10 text-base sm:text-lg leading-relaxed text-gray-300">
          <p>
            Hi, I'm{" "}
            <span className="font-bold text-white">Shahram Boroukanlou</span> —
            a dedicated{" "}
            <span className="text-primary font-semibold">
              Front-End Engineer
            </span>{" "}
            who enjoys turning complex problems into clean, intuitive and
            scalable user interfaces.
          </p>

          <p>
            I'm currently working at <strong>Dadeh Kavan Pishro</strong>, where
            I build and maintain enterprise-level web applications. My role
            involves migrating legacy systems to modern React-based
            architectures, improving performance in data-heavy dashboards, and
            designing reusable UI systems that scale across large products.
          </p>

          <p>
            One of my most recent and impactful projects has been a{" "}
            <strong>Credit Scoring platform</strong> designed for financial
            institutions. In this project, I worked on building complex
            multi-step forms, validation flows, scoring visualizations, and
            user-friendly dashboards for reviewing customer risk profiles. A
            strong focus was placed on performance, accuracy, and delivering a
            clear user experience for non-technical users working with sensitive
            financial data.
          </p>

          <p>
            Previously, I’ve been involved in developing a variety of products —
            from medical platforms and internal CRM dashboards to real-time
            geospatial and GIS-based applications. I’ve worked extensively with
            modern tooling such as Vite, component-driven UI architectures, and
            interactive map technologies like Leaflet.
          </p>

          <p>
            With an academic background in <strong>Remote Sensing & GIS</strong>
            , I bring a strong understanding of geospatial data and map-based
            interfaces. This allows me to bridge the gap between complex spatial
            data and user-friendly visual experiences.
          </p>

          <p>
            I care deeply about <strong>clean architecture</strong>,{" "}
            <strong>performance optimization</strong>, and{" "}
            <strong>accessibility</strong>. I believe great front-end
            engineering is not just about making things look good, but about
            building products that are fast, maintainable, and enjoyable to use
            — for both users and developers.
          </p>

          <p>
            I’m constantly learning, refining my skills, and preparing myself
            for challenging international teams where code quality,
            collaboration, and long-term thinking truly matter.
          </p>

          <p className="text-xl font-medium text-primary pt-4">
            Let’s build thoughtful, high-quality digital experiences together.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            What I Do
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Client Testimonials
          </h3>

          <ScrollArea className="w-full">
            <div className="flex gap-6 pb-6 whitespace-nowrap">
              {testimonials.map((t, index) => (
                <TestimonialCard
                  key={index}
                  {...t}
                  onClick={() => setSelectedTestimonial(t)}
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
    </Card>
  );
}

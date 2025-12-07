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
    <Card className="bg-card/80 backdrop-blur-md border-border rounded-3xl p-8 md:p-12 shadow-2xl">
      <section className="w-full overflow-hidden">
        <div className="max-w-4xl w-full mx-auto px-6 space-y-16">
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Hi, I'm{" "}
              <span className="font-bold text-white">Shahram Boroukanlou</span>{" "}
              — a passionate{" "}
              <span className="text-primary font-semibold">
                Front-End Engineer
              </span>{" "}
              based in Tehran, Iran.
            </p>
            <p>
              Currently working at <strong>Dadeh Kavan Pishro</strong>, where
              I've migrated enterprise React apps, optimized performance and
              built scalable UI systems.
            </p>
            <p>
              Previously, I built medical platforms, CRM dashboards and
              real-time GIS systems using Vite + Styled Components + Leaflet.
            </p>
            <p>
              With a background in <strong>Remote Sensing & GIS</strong>, I'm
              strong in geospatial and data-rich UI apps.
            </p>
            <p>
              I care about clean architecture, performance and accessibility.
            </p>
            <p className="text-xl font-medium text-primary pt-6">
              Let's build something exceptional together.
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            What I Do
          </h3>

          {/* مهم: 2 ستون در همه سایزهای بالا → از فشار افقی جلوگیری می‌کند */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-8 w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Client Testimonials
          </h3>

          <ScrollArea className="w-full overflow-x-auto">
            {/* مهم‌ترین بخش برای فعال شدن اسکرول */}
            <div className="flex gap-6 pb-8 whitespace-nowrap min-w-max">
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
    </Card>
  );
}

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/portfolioData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

type Category = "all" | "dashboard" | "webapp" | "map" | "mobile";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const [filter, setFilter] = useState<Category>("all");
  const [hovered, setHovered] = useState(false);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "dashboard", label: "Dashboards" },
    { value: "webapp", label: "Web Apps" },
    { value: "map", label: "Map-Based" },
  ];

  return (
    <div>
      <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
              className="rounded-full text-white"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <ScrollArea
          className="w-full"
          onWheel={(e) => {
            if (!hovered) e.preventDefault();
          }}
        >
          <div className="flex gap-8 pb-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </div>
  );
}

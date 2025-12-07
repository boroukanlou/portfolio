import { AutoScrollFrame } from "./AutoScrollFrame";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="flex-none w-96"
    >
      <div
        className="glass-card rounded-3xl overflow-hidden cursor-pointer group glow-hover"
        onClick={onClick}
      >
        <AutoScrollFrame
          image={project.image}
          title={project.title}
          liveUrl={project.liveUrl}
        />

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

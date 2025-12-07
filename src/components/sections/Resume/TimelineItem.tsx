import { motion } from "framer-motion";
import type { TimelineItem } from "@/data/resumeData";

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

export function TimelineItemComp({ item, index }: TimelineItemProps) {
  const isExperience = item.type === "experience";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12 pb-12 las:pb-0"
    >
      <div className="absolute left-0 top-2 w-5 h-5 bg-primary rounded-full ring-8 ring-background shadow-lg shadow-primary/40" />
      <div className="absolute left-2.5 top-8 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-40 last:hidden" />
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        <div className="felx items-center gap-3 mb-3">
          <div
            className={`w-3 h-3 rounded-full ${
              isExperience ? "bg-green-500" : "bg-blue-500"
            }`}
          />
          <span className="text-sm font-medium text-primary">
            {item.period}
          </span>
        </div>

        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
        <p className="text-primary font-medium mb-3">{item.company}</p>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

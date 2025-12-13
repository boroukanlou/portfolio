import { motion } from "framer-motion";

interface SkillBarProps {
  title: string;
  items: string[];
  delay?: number;
}

export function SkillBar({ title, items, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="bg-card/80 p-6 rounded-2xl shadow-lg border border-border"
    >
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-secondary/30 text-white text-sm rounded-full hover:bg-primary/70 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

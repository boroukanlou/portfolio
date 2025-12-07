import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>

      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: delay * 0.1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-lg shadow-primary/30"
        />
      </div>
    </div>
  );
}

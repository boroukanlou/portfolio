// import { motion } from "framer-motion";

// interface SkillBarProps {
//   name: string;
//   level: number;
//   delay?: number;
// }

// export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between text-sm">
//         <span className="font-medium text-white">{name}</span>
//         <span className="text-primary">{level}%</span>
//       </div>

//       <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: `${level}%` }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.5,
//             delay: delay * 0.1,
//             ease: "easeOut",
//           }}
//           className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-lg shadow-primary/30"
//         />
//       </div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// interface SkillBarProps {
//   name: string;
//   category?: string;
//   level?: "core" | "advanced" | "experienced";
//   delay?: number;
// }

// const levelLabelMap = {
//   core: "Core Skill",
//   advanced: "Advanced",
//   experienced: "Experienced",
// };

// const levelFillMap = {
//   core: "w-full",
//   advanced: "w-4/5",
//   experienced: "w-3/5",
// };

// export function SkillBar({
//   name,
//   category,
//   level = "advanced",
//   delay = 0,
// }: SkillBarProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex items-center justify-between text-sm">
//         <div className="flex flex-col">
//           <span className="font-medium text-white">{name}</span>
//           {category && (
//             <span className="text-xs text-muted-foreground">{category}</span>
//           )}
//         </div>

//         <span className="text-xs text-primary font-medium">
//           {levelLabelMap[level]}
//         </span>
//       </div>

//       <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: levelFillMap[level] }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.2,
//             delay: delay * 0.08,
//             ease: "easeOut",
//           }}
//           className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
//         />
//       </div>
//     </div>
//   );
// }

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

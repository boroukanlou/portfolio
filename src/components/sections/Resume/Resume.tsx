import { Card } from "@/components/ui/card";
import { TimelineItemComp } from "./TimelineItem";
import { SkillBar } from "./SkillBar";
import { timelineData, skills } from "@/data/resumeData";

export function Resume() {
  const experiences = timelineData.filter((item) => item.type === "experience");
  const education = timelineData.filter((item) => item.type === "education");

  return (
    <Card className="bg-card/80 backdrop-blur-md border-border rounded-3xl lg:p-8 p-3 md:p-12 shadow-2xl">
      <section className="mb-20">
        <h3 className="text-2xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-12">
          Experience
        </h3>
        <div className="relative">
          {experiences.map((item, i) => (
            <TimelineItemComp key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h3 className=" text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-12">
          Education
        </h3>
        <div className="relative">
          {education.map((item, i) => (
            <TimelineItemComp key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-12">
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {skills.map((group, i) => (
            <SkillBar
              key={i}
              title={group.title}
              items={group.items}
              delay={group.delay}
            />
          ))}
        </div>
      </section>
    </Card>
  );
}

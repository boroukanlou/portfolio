import { Card } from "@/components/ui/card";
import type { Service } from "@/data/aboutData";

export function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <Card
      className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm
  hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 w-full p-6"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0
      group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}

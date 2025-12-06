import { Card } from "@/components/ui/card";
import type { Service } from "@/data/aboutData";

export function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <Card
      className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm
    hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0
      group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="relative p-8 text-center">
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20
        to-orange-600/20 flex items-center justify-center "
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3s">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

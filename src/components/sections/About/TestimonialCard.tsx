import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/aboutData";

interface TestimonialCardProps extends Testimonial {
  onClick: () => void;
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  onClick,
}: TestimonialCardProps) {
  return (
    <Card
      className="relative w-64 sm:w-80 shrink-0 cursor-pointer overflow-hidden border-border
  bg-card/60 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 
  hover:shadow-2xl hover:shadow-primary/5"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0
      hover:opacity-100 transition-opacity"
      />
      <div className="relative p-8">
        <Avatar
          className="w-20 h-20 ring-4 ring-primary/20 ring-offset-4 ring-offset-background
        -mt-1 mx-auto"
        >
          <AvatarImage src={avatar} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <h4 className="text-lg font-bold text-white text-center mt-3">
          {name}
        </h4>
        <p className="text-sm text-primary text-center mb-4">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {content}
        </p>
      </div>
    </Card>
  );
}

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { X } from "lucide-react";
import type { Testimonial } from "@/data/aboutData";

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TestimonialModal({
  testimonial,
  open,
  onOpenChange,
}: TestimonialModalProps) {
  if (!testimonial) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-xl border-border">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        />

        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 ring-4 ring-primary/20">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback>
                {testimonial.name.split(" ")[0][0]}
              </AvatarFallback>
            </Avatar>
            <div className="w-12 h-12 mt-6 bg-gradient-to-br from-primary to-orange-500 rounded-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">
              {testimonial.name}
            </h3>
            <p className="text-primary mb-4">{testimonial.role}</p>
            <time className="text-sm text-muted-foreground">
              {testimonial.date}
            </time>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {testimonial.content}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

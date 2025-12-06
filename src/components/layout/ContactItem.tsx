// src/components/layout/ContactItem.tsx
import { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300 group">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block -mx-2 px-2 py-1 rounded-lg hover:bg-secondary/50 transition"
      >
        {content}
      </a>
    );
  }

  return content;
}

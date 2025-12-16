import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContactItem } from "./ContactItem";
import { Mail, Phone, Calendar, MapPin, Github, Linkedin } from "lucide-react";

interface SidebarContentProps {
  onNavigate?: () => void;
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  console.log(onNavigate);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/boroukanlou" },
    { Icon: Linkedin, href: "https://linkedin.com/in/boroukanlou" },
  ];

  return (
    <div className="h-[calc(100vh)]  bg-card border border-border rounded-2xl p-8 shadow-2xl flex flex-col items-center sticky top-8">
      <Avatar className="w-32 h-32 ring-4 ring-primary/20 ring-offset-8 ring-offset-background">
        <AvatarImage src="my-avatar.png" alt="shahram boroukanlou" />
        <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-blue-950 text-primary-forground">
          SB
        </AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold mt-6 text-white text-center leading-tight">
        Shahram Boroukanlou
      </h1>
      <p className="text-sm bg-primary/20 text-white px-5 py-2 rounded-full mt-3 font-medium">
        Web Developer
      </p>

      <div className="w-full mt-10 space-y-5">
        <ContactItem
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          value="s.boroukanlou@gmail.com"
          href="mailto:s.boroukanlou@gmail.com"
        />
        <ContactItem
          icon={<Phone className="w-5 h-5" />}
          label="Phone number"
          value="+98 996 420 9510"
          href="tel:+989964209510"
        />
        <ContactItem
          icon={<Calendar className="w-5 h-5" />}
          label="Birthday"
          value="23 jul 1995"
        />
        <ContactItem
          icon={<MapPin className="w-5 h-5" />}
          label="Location"
          value="Tehran, Iran"
        />
      </div>

      <div className="flex gap-5 mt-10">
        {socialLinks.map(({ Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            role="noopener noreferrer"
            className="text-gray-500 hover: text-primary transition-colors duration-300"
          >
            <div
              className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110
            transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

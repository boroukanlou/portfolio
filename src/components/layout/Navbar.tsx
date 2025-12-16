import { Button } from "@/components/ui/button";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useNavigationStore } from "@/store/useNavigationStore";
import { cn } from "@/lib/utils";

const navItems = [
  { page: "about" as const, label: "About", icon: Home },
  { page: "resume" as const, label: "Resume", icon: User },
  { page: "portfolio" as const, label: "Portfolio", icon: FolderOpen },
  { page: "contact" as const, label: "Contact", icon: Mail },
];

export function Navbar() {
  const { activePage, setActivePage } = useNavigationStore();

  return (
    <>
      <nav className="hidden lg:flex items-center gap-1 bg-card/70 backdrop-blur-xl border border-border/50 rounded-bl-3xl px-4 py-4 shadow-lg">
        {navItems.map(({ page, label, icon: Icon }) => {
          const isActive = activePage === page;
          return (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              className={cn(
                "relative px-5 py-2.5 rounded-xl text-base font-semibold transition-all",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActivePage(page)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-primary to-blue-950 rounded-full" />
              )}
            </Button>
          );
        })}
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border text-white bg-card/95 backdrop-blur-xl lg:hidden">
        <div className="flex justify-around py-3">
          {navItems.map(({ page, label, icon: Icon }) => (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col gap-1",
                activePage === page && "text-primary"
              )}
              onClick={() => setActivePage(page)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  BookOpen,
  Mail,
} from "lucide-react";
import { useNavigationStore } from "@/store/useNavigationStore";
import { cn } from "@/lib/utils";

const navItems = [
  { page: "about" as const, label: "About", icon: Home },
  { page: "resume" as const, label: "Resume", icon: User },
  { page: "portfolio" as const, label: "Portfolio", icon: FolderOpen },
  { page: "blog" as const, label: "Blog", icon: BookOpen },
  { page: "contact" as const, label: "Contact", icon: Mail },
];
export function Navbar() {
  const { activePage, setActivePage } = useNavigationStore();

  const handleNavClick = (page: typeof activePage) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-card/90 backdrop-blur-xl border-t border-border px-4 py-3">
          <div className="flex justify-around items-center">
            {navItems.map(({ page, label, icon: Icon }) => {
              const isActive = activePage === page;

              return (
                <Button
                  key={page}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 ronded-xl transition-all duration-300",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => handleNavClick(page)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{label}</span>
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="hidden lg:block fixed top-8 right-8 z-50  ">
        <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center gap-8">
            {navItems.map(({ page, label, icon: Icon }) => {
              const isActive = activePage === page;
              return (
                <Button
                  key={page}
                  variant="ghost"
                  className={cn(
                    "relative flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => handleNavClick(page)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                  {isActive && (
                    <div className="abslute -bottom-1 left-1/2 w-8 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

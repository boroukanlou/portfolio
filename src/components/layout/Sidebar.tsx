import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarContent } from "./SidebarContent";
import { useNavigationStore } from "@/store/useNavigationStore";

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useNavigationStore();

  return (
    <>
      <Sheet
        open={isSidebarOpen}
        onOpenChange={(open) => (open ? toggleSidebar() : closeSidebar())}
      >
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-6 left-6 z-50 lg:hidden bg-card/80 backdrop-blur border-border hover:border-primary/50"
          >
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-80 p-0 border-0">
          <SidebarContent onNavigate={closeSidebar} />
        </SheetContent>
      </Sheet>

      <aside className="hidden lg:block w-80">
        <SidebarContent />
      </aside>
    </>
  );
}

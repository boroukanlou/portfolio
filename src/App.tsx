// src/App.tsx
import { Sidebar } from "./components/layout/Sidebar";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About/About";
import { Resume } from "./components/sections/Resume/Resume";
import { Portfolio } from "./components/sections/Portfolio/Portfolio";
import { Contact } from "./components/sections/Contact/Contact";
import { useNavigationStore } from "./store/useNavigationStore";
import { Toaster } from "./components/ui/toaster";

const pageTitles: Record<string, string> = {
  about: "About Me",
  resume: "Resume",
  portfolio: "Portfolio",
  blog: "Blog",
  contact: "Contact",
};

export default function App() {
  const { activePage } = useNavigationStore();

  const title = pageTitles[activePage];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
        <Sidebar />

        <main className="flex-1 max-w-4xl w-full mx-auto">
          <article className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl shadow-2xl overflow-hidden">
            <header className="relative px-8 pt-8 pb-6 border-b border-border/50">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-10">
                {title}
              </h1>

              <div className="hidden lg:block absolute top-0 right-0">
                <Navbar />
              </div>
            </header>

            <div className="p-1 pt-0 lg:p-10  lg:pt-8">
              {activePage === "about" && <About />}
              {activePage === "resume" && <Resume />}
              {activePage === "portfolio" && <Portfolio />}
              {activePage === "contact" && <Contact />}
            </div>
          </article>
        </main>
      </div>

      <div className="lg:hidden">
        <Navbar />
      </div>
      <Toaster />
    </div>
  );
}

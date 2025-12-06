import { Sidebar } from "@/components/layout/Sidebar";
// import { Navbar } from "@/components/layout/Navbar";
// import { About } from "@/components/sections/About";
// import { Resume } from "@/components/sections/Resume";
// import { Portfolio } from "@/components/sections/Portfolio";
// import { Blog } from "@/components/sections/Blog";
// import { Contact } from "@/components/sections/Contact";
import { useNavigationStore } from "./store/useNavigationStore";

function App() {
  const { activePage } = useNavigationStore();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row gap-6 p-4 lg:p-8 max-w-7xl mx-auto">
      <Sidebar />

      {/* <main className="flex-1">
        <Navbar />

        <div className="space-y-16 mt-20 lg:mt-0">
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "portfolio" && <Portfolio />}
          {activePage === "blog" && <Blog />}
          {activePage === "contact" && <Contact />}
        </div>
      </main> */}
    </div>
  );
}

export default App;

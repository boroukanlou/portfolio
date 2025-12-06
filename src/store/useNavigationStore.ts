import { create } from "zustand";

type Page = "about" | "resume" | "portfolio" | "blog" | "contact";

interface NavigationState {
  activePage: Page;
  setActivePage: (page: Page) => void;

  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: "about",
  setActivePage: (page) => set({ activePage: page }),
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

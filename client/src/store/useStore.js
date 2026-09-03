import { create } from 'zustand';

// Helper to determine initial theme
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('somya_portfolio_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  }
  return 'dark'; // Default luxury dark theme
};

export const useStore = create((set) => ({
  // Theme state
  theme: getInitialTheme(),
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('somya_portfolio_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('somya_portfolio_theme', nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
      }
      return { theme: nextTheme };
    });
  },

  // Active navigation section
  activeSection: 'home',
  setActiveSection: (sectionId) => set({ activeSection: sectionId }),

  // Mobile menu open/close state
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  // Initial loading screen state
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (href: string, sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinkClasses = (sectionId: string) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      activeSection === sectionId 
        ? "text-foreground" 
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 text-foreground">
                <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Ram Surya CH
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href, item.href.replace('#', ''))}
                      className={navLinkClasses(item.href.replace('#', ''))}
                      aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  aria-pressed={theme === "dark"}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-300 min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
                  aria-label="Open menu"
                >
                  <Menu size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Ram Surya CH</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
              
              <nav className="flex-1">
                <ul className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.href, item.href.replace('#', ''))}
                        className="text-xl sm:text-2xl text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] touch-manipulation"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
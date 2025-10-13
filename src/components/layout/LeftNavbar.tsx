import { useEffect, useState } from "react";
import { navLinks } from "../../constants";

const LeftNavbar = () => {
  const [active, setActive] = useState<string | null>();

  useEffect(() => {
    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  // Icon mapping for navigation items
  const getIcon = (id: string) => {
    switch (id) {
      case "about":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "work":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "contact":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <nav className="fixed left-0 top-1/2 z-20 flex flex-col items-center justify-center -translate-y-1/2 ml-4">
      <div className="flex flex-col items-center gap-6 bg-black/20 backdrop-blur-sm rounded-full px-4 py-6 border border-accent/30">
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
              active === nav.id 
                ? "bg-accent text-black" 
                : "text-secondary hover:text-white hover:bg-accent/20"
            }`}
            title={nav.title}
          >
            {getIcon(nav.id)}
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {nav.title}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default LeftNavbar;


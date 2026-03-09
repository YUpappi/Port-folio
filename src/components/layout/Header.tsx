import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useUI } from "../../context/UIProvider";
// import { useTheme } from "../../context/ThemeProvider";

const sections = [
  "home",
  "about",
  "education",
  "skills",
  "services",
  "portfolio",
  "contact",
];

const Header = () => {
  const { activeSection, setActiveSection, scrollToSection } = useUI();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  // const toggleTheme = () => {
  //   if (theme === "light") setTheme("dark");
  //   else setTheme("light");
  // };

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/45 text-slate-100 shadow-lg backdrop-blur-xl transition-transform duration-300"
    >
      <nav className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-extrabold tracking-[0.28em] text-white"
          >
            ADELEKE
          </button>

          <ul className="hidden md:flex space-x-6">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`text-sm tracking-wide transition-colors ${
                    activeSection === sec
                      ? "text-violet-300"
                      : "text-slate-200/80 hover:text-white"
                  }`}
                >
                  {sec.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-slate-100">
            {/* <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button> */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 space-y-2 rounded-xl border border-white/10 bg-black/70 p-3 md:hidden animate-fadeIn">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec.toLowerCase())}
                  className="block w-full rounded-lg px-4 py-2 text-center text-sm tracking-wide text-slate-100 hover:bg-white/10 transition-colors"
                >
                  {sec.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

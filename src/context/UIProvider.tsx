import React, { createContext, useContext, useState } from "react";

interface UIContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (id: string) => void;
}

const UIContext = createContext<UIContextType | null>(null);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <UIContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        activeSection,
        setActiveSection,
        scrollToSection,
      }}
    >
      <div className={isDarkMode ? "dark" : ""}>{children}</div>
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
};

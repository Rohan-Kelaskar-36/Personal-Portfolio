import React, { createContext, useContext, useMemo, useState } from "react";

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleMotion = () =>
    setReducedMotion((prev) => !prev);

  const value = useMemo(
    () => ({
      theme,
      reducedMotion,
      toggleTheme,
      toggleMotion,
    }),
    [theme, reducedMotion]
  );

  return (
    <UIContext.Provider value={value}>
      <div
        className={
          theme === "dark"
            ? "dark bg-slate-950 text-slate-50 min-h-screen"
            : "bg-slate-50 text-slate-900 min-h-screen"
        }
      >
        {children}
      </div>
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};


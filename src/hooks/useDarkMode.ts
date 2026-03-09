import { useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  return { isDark, toggle: () => setIsDark((p) => !p) };
};

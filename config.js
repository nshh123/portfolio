/**
 * Site-wide defaults — edit values here only.
 */
window.SITE_CONFIG = {
  /** Default theme for desktop when no saved preference: "light" | "dark" */
  defaultTheme: "light",

  /** Default theme for mobile when no saved preference: "light" | "dark" */
  defaultThemeMobile: "dark",

  /** Breakpoint (in pixels) to determine mobile vs desktop */
  mobileBreakpoint: 900,
};

(function applyDefaultTheme() {
  const saved = localStorage.getItem("theme");

  // If user has a saved preference, use it
  if (saved === "light" || saved === "dark") {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(saved);
    return;
  }

  // Determine if viewing on mobile
  const isMobile = window.innerWidth <= window.SITE_CONFIG.mobileBreakpoint;

  // Apply appropriate default theme
  const theme = isMobile
    ? window.SITE_CONFIG.defaultThemeMobile
    : window.SITE_CONFIG.defaultTheme;

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
})();

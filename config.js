/**
 * Site-wide defaults — edit values here only.
 */
window.SITE_CONFIG = {
  defaultTheme: "dark",
  defaultThemeMobile: "dark",
  mobileBreakpoint: 900,
};

(function applyDefaultTheme() {
  const saved = localStorage.getItem("theme");
  const isMaintenancePage =
    window.location.pathname.endsWith("maintenance.html");

  // Force dark mode for the maintenance page, regardless of saved theme.
  if (isMaintenancePage) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add("dark");
    return;
  }

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

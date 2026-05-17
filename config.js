/**
 * Site-wide defaults — edit values here only.
 */
window.SITE_CONFIG = {
  /** Default theme when the user has no saved preference: "light" | "dark" */
  defaultTheme: "light",
};

(function applyDefaultTheme() {
  const saved = localStorage.getItem("theme");
  const theme =
    saved === "light" || saved === "dark"
      ? saved
      : window.SITE_CONFIG.defaultTheme;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
})();

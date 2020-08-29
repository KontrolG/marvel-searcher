// useEffect(() => {
//   const prefTheme = localStorage.getItem("theme") || defaultState.theme;
//   const prefLanguage =
//     localStorage.getItem("language") || defaultState.language;
//   setTheme(prefTheme);
//   setLanguage(prefLanguage);
// }, []);

// useEffect(() => {
//   localStorage.setItem("theme", theme);
//   const colorConfig = themeConfig[theme];
//   for (const [key, value] of Object.entries(colorConfig)) {
//     document.documentElement.style.setProperty(key, value);
//   }
// }, [theme]);

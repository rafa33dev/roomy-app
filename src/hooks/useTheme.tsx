import { useEffect, useState } from "react"

export const useTheme = () => {
  const [isDarkMode,setIsDarkMode] = useState(() =>{
    const storedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('theme')
    if (storedTheme)  return storedTheme === 'dark'
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    localStorage.setItem('theme',isDarkMode ? 'dark':'light')
  },[isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'
import { lightTheme } from './theme';

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>{(theme === lightTheme) ? "Switch to Dark Theme" : "Switch to Light Theme"}</button>
    </div>
  )
}

export default ThemeSwitcher

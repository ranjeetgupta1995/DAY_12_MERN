import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from './theme';

export const ThemeContext = createContext();



const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => ((prevTheme === lightTheme) ? darkTheme : lightTheme));
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

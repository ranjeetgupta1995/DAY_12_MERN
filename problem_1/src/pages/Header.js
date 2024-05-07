import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const Header = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <header style={{background: theme.background, color: theme.text}}>
      <h1>Header</h1>
    </header>
  )
}

export default Header

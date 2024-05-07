import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const Footer = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <footer style={{background: theme.background, color: theme.text}}>
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer

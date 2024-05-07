import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const Main = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <main style={{background: theme.background, color: theme.text}}>
      <p>Main</p>
    </main>
  )
}

export default Main


import { Navbar,Hero,Experience,Projects,About,Contact } from "./components"
import { useCallback, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import './App.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  //theme toggle function to be called by theme button
  const toggleTheme = () =>{
    let newTheme = theme==="dark" ? "light" : "dark";
    setTheme(newTheme);
  }


  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects/>
      <About/>
    </div>
  )
}

export default App

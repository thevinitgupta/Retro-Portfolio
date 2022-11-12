
import { Navbar,Hero,Experience,Projects,About,Contact } from "./components"
import { useCallback, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import './App.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [section, setSection] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  //theme toggle function to be called by theme button
  const toggleTheme = () =>{
    let newTheme = theme==="dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  const sections = ["her","exp"];

  const changeSection = () => {
    const currentSection = section;
      if(scrollDir==="down"){
        if(currentSection===sections.length-1) return;
        setSection(currentSection+1);
        scrollToSection(sections[currentSection+1]);
      }
      else {
        if(section===0) return;
        setSection(currentSection-1);
        scrollToSection(sections[currentSection-1]);
      }
  }

const scrollToSection = (sectionId) => {
   const nextSection = document.getElementById(sectionId);
   nextSection.scrollIntoView({behavior : "smooth",block : "start"});

}


  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
      changeSection();
    };
  
    window.addEventListener("scroll", onScroll);
    
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Hero />
      <Experience />
    </div>
  )
}

export default App

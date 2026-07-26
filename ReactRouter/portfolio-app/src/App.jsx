import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`app-container ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

    </div>
  )

}
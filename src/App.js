import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-main-dark">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

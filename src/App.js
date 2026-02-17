import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-nes-light">
    <div className="text-nes-dark text-xl font-bold animate-pulse">Loading...</div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="bg-main-dark">
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

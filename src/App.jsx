import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Interests } from './sections/Interests';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Activities } from './sections/Activities';
import { Languages } from './sections/Languages';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-primaryBg text-mainText min-h-screen selection:bg-primaryAccent/30 selection:text-white flex flex-col w-full overflow-x-hidden relative">
      {/* Sticky Modern Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Interests />
        <Projects />
        <Education />
        <Activities />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import LearningJourney from '../components/LearningJourney';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="animated-bg">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <LearningJourney />
      <Contact />
    </div>
  );
}

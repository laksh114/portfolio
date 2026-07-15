import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectList from '../components/ProjectList';
import Experience from '../components/Experience';
import LearningJourney from '../components/LearningJourney';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="animated-bg">
      {/* Sections revealing reveal animations */}
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <ProjectList />
      <Experience />
      <LearningJourney />
      <Contact />
    </div>
  );
}

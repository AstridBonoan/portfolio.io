import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="hero" className="min-h-screen flex items-center scroll-mt-16">
        <Hero />
      </section>

      <section id="skills" className="min-h-screen flex items-center scroll-mt-16">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center scroll-mt-16">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center scroll-mt-16">
        <Contact />
      </section>
    </div>
  )
}

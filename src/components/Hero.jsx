import React from 'react'
import profile from '../assets/profile.svg'

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 text-white">
        

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi, I'm <span className="text-white">Astrid Bonoan<span className="text-accent">.</span></span></h1>

          <p className="mt-5 text-gray-300 max-w-2xl">
            Over the past year, I focused on building full‑stack web applications and SaaS tools to
            enhance and modernize existing systems. I enjoy refining products and delivering practical improvements that increase reliability and user value.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-md shadow">GET IN TOUCH</a>
            <a href="#projects" className="inline-block border border-gray-700 text-gray-200 px-4 py-2 rounded-md">Projects</a>
          </div>
        </div>

        <div className="w-44 md:w-56 relative flex-shrink-0">
          <div className="absolute -right-6 -top-6 w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-accent/30 to-accent2/20 blur-2xl"></div>
          <div className="relative rounded-full overflow-hidden ring-4 ring-accent/60 ring-offset-2 ring-offset-transparent shadow-xl">
            <img src={profile} alt="Profile" className="w-full h-full object-cover block" />
          </div>
        </div>
      </div>
    </div>
  )
}

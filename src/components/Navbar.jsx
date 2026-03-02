import React, { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [lightOverlap, setLightOverlap] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const headerEl = headerRef.current
    if (!headerEl || typeof window === 'undefined') return

    const targets = Array.from(document.querySelectorAll('[data-nav-contrast]'))
    if (!targets.length) return

    const observer = new IntersectionObserver((entries) => {
      // If any target intersects the header root, we consider it overlapping
      const anyIntersecting = entries.some((e) => e.isIntersecting)
      setLightOverlap(anyIntersecting)
    }, { root: headerEl, threshold: 0 })

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 shadow-2xl border-b border-white/10 ${lightOverlap ? 'bg-white text-gray-900' : 'bg-panel text-white'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" aria-label="Home" className="inline-flex items-center gap-3">
              <span className="sr-only">Home</span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#5b21b6" />
                      <stop offset="1" stopColor="#3730a3" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="36" height="36" rx="8" fill="url(#g1)" opacity="0.95" />
                <path d="M10 24C12.5 18 16 15 18 15C20 15 23.5 18 26 24" stroke={lightOverlap ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.95)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="10" r="2" fill={lightOverlap ? '#0f172a' : '#f0f6ff'} />
              </svg>
              <span className={`font-semibold ${lightOverlap ? 'text-gray-900' : 'text-white'}`}>Portfolio</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#hero" className="text-sm text-gray-300 hover:text-white">Home</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-gradient-to-b from-transparent to-black/30">
          <div className="px-4 py-3 space-y-2 bg-panel/80 backdrop-blur-sm">
            <a href="#skills" onClick={() => setOpen(false)} className="block text-white">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-white">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

import React from 'react'
import p1 from '../assets/project1.svg'
import p2 from '../assets/project2.svg'
import p3 from '../assets/project3.svg'
import p4 from '../assets/project4.svg'
import p5 from '../assets/project5.svg'
import p6 from '../assets/project6.svg'

const projects = [
  { id: 1, title: 'Project One', img: p1, desc: 'A short description of project one.' },
  { id: 2, title: 'Project Two', img: p2, desc: 'A short description of project two.' },
  { id: 3, title: 'Project Three', img: p3, desc: 'A short description of project three.' },
  { id: 4, title: 'Project Four', img: p4, desc: 'A short description of project four.' },
  { id: 5, title: 'Project Five', img: p5, desc: 'A short description of project five.' },
  { id: 6, title: 'Project Six', img: p6, desc: 'A short description of project six.' },
]

export default function Projects() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <p className="text-gray-300 mt-2">Selected projects with quick actions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.id} className="rounded-lg overflow-hidden shadow-2xl panel-bg flex flex-col border border-transparent hover:border-accent/30 transition">
            <div className="w-full h-48 bg-gradient-to-br from-[#071528] to-[#071122]" data-nav-contrast>
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div>
                <h3 className="font-medium text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => alert('Coming Soon!')}
                  className="bg-accent text-white px-3 py-2 rounded-md text-sm"
                >
                  Try it out
                </button>

                <button
                  onClick={() => alert('Source coming soon!')}
                  className="border border-gray-700 text-gray-200 px-3 py-2 rounded-md text-sm"
                >
                  Source Code
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

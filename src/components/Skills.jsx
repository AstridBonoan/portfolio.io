import React from 'react'

const cards = [
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'], color: 'bg-indigo-600' },
  { title: 'Backend', items: ['Node.js', 'Express', 'Postgres', 'REST APIs'], color: 'bg-sky-500' },
  { title: 'Other', items: ['Git', 'Testing', 'CI/CD', 'Design Systems'], color: 'bg-emerald-500' },
]

export default function Skills() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white">My Skills</h2>
        <p className="text-gray-300 mt-2">A quick overview of tools and technologies I use.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg overflow-hidden shadow-xl panel-bg">
            <div className={`h-2 ${c.color}`}></div>
            <div className="p-6">
              <h3 className="font-medium text-lg text-white">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-600 inline-block" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks ${name || 'friend'}! Message received.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4 panel-bg p-6 rounded-lg shadow-2xl border border-transparent">
          <div>
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-700 bg-transparent text-white p-3" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-700 bg-transparent text-white p-3" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="mt-1 block w-full rounded-md border border-gray-700 bg-transparent text-white p-3" required />
          </div>

          <div className="flex items-center justify-end">
            <button type="submit" className="bg-accent text-white px-5 py-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

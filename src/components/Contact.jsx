import React, { useState, useMemo } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const errors = useMemo(() => {
    return {
      name: name.trim() ? '' : 'Name is required.',
      email: email.trim() ? (emailRegex.test(email) ? '' : 'Enter a valid email address.') : 'Email is required.',
      message: message.trim().length >= 10 ? '' : 'Message must be at least 10 characters.',
    }
  }, [name, email, message])

  const isValid = !errors.name && !errors.email && !errors.message

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) {
      setSubmitted(true)
      return
    }

    // Placeholder: replace with real submission (API call) as needed
    alert(`Thanks ${name}! Message received.`)
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(false)
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-4 panel-bg p-6 rounded-lg shadow-2xl border border-transparent">
          <div>
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full rounded-md border ${submitted && errors.name ? 'border-red-500' : 'border-gray-700'} bg-transparent text-white p-3`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              required
            />
            {submitted && errors.name && (
              <p className="mt-1 text-sm text-red-400" id="name-error">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full rounded-md border ${submitted && errors.email ? 'border-red-500' : 'border-gray-700'} bg-transparent text-white p-3`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              required
            />
            {submitted && errors.email && (
              <p className="mt-1 text-sm text-red-400" id="email-error">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className={`mt-1 block w-full rounded-md border ${submitted && errors.message ? 'border-red-500' : 'border-gray-700'} bg-transparent text-white p-3`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              required
            />
            {submitted && errors.message && (
              <p className="mt-1 text-sm text-red-400" id="message-error">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <button type="submit" disabled={!isValid} className={`px-5 py-2 rounded-md ${isValid ? 'bg-accent text-white' : 'bg-gray-700 text-gray-300 cursor-not-allowed'}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

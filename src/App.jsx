import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Home />
      </main>
    </div>
  )
}

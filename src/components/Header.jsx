import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-blue-600">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/logo.jpeg" alt="Seven Star Logo" className="h-20 w-20 object-contain" />
          <h1 className="text-xl font-bold text-blue-900">Seven Star Pre Primary School, Kasheli</h1>
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-24 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 md:opacity-100 md:visible md:translate-y-0'}`}>
          <li><a href="#home" className="text-blue-900 hover:text-blue-600 font-medium">Home</a></li>
          <li><a href="#about" className="text-blue-900 hover:text-blue-600 font-medium">About</a></li>
          <li><a href="#programs" className="text-blue-900 hover:text-blue-600 font-medium">Programs</a></li>
          <li><a href="#contact" className="text-blue-900 hover:text-blue-600 font-medium">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

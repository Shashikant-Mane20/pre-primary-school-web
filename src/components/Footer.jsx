import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">About School</h4>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Seven Star Pre Primary School - Nurturing young minds with quality education, personal attention, and a safe, joyful learning environment.</p>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white">Programs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Programs</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Play Group</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Nursery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Junior KG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Senior KG</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Follow Us</h4>
            <div className="flex space-x-3 md:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl md:text-2xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition duration-300 text-xl md:text-2xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-300 text-xl md:text-2xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl md:text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; {currentYear} Seven Star Pre Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

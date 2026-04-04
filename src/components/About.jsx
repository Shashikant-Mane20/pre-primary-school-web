export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-900">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-64 md:h-80 flex items-center justify-center border-4 border-blue-300">
              <span className="text-white text-center">
                <p className="text-5xl md:text-6xl mb-3 md:mb-4">⭐</p>
                <p className="text-xl md:text-2xl font-bold">Seven Star</p>
                <p className="text-base md:text-lg opacity-90">Pre Primary School</p>
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">About Seven Star Pre Primary School</h3>
            <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
              Seven Star Pre Primary School is committed to providing a nurturing, safe, and stimulating environment where young children can explore, learn, and grow. We believe every child is unique and special.
            </p>
            <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Our comprehensive programs are designed to support the overall development of children, combining play-based learning with structured activities that foster cognitive, physical, social, and emotional growth.
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start space-x-2 md:space-x-3">
                <span className="text-blue-600 font-bold text-lg md:text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm md:text-base">Experienced and certified teachers</p>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <span className="text-blue-600 font-bold text-lg md:text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm md:text-base">Safe and hygienic environment</p>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <span className="text-blue-600 font-bold text-lg md:text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm md:text-base">Play-based learning approach</p>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <span className="text-blue-600 font-bold text-lg md:text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm md:text-base">Activities for all developmental areas</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

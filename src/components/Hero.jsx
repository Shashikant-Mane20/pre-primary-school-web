export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Side - Poster Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img src="/images/main.jpeg" alt="Seven Star Pre Primary School - Admissions Open" className="w-full max-w-sm md:max-w-md rounded-lg shadow-xl" />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <div className="mb-6 md:mb-8">
              <img src="/images/logo.jpeg" alt="Seven Star Logo" className="h-24 md:h-32 w-24 md:w-32 mx-auto md:mx-0 mb-3 md:mb-4" />
              <h1 className="text-2xl md:text-5xl font-bold text-blue-900 mb-2">Seven Star Pre Primary School, Kasheli</h1>
              <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4">Nurturing Young Minds</p>
            </div>

            <div className="space-y-4 mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Welcome to Seven Star Pre Primary School, where we believe in nurturing every child with love, care, and quality education.
              </p>
              <div className="bg-red-600 text-white p-4 rounded-lg w-full">
                <p className="text-xl md:text-2xl font-bold">🎉 Admissions Open!</p>
                <p className="text-base md:text-lg">Limited Seats Available - Book Your Seat Now</p>
              </div>
            </div>

            <div className="space-y-3">
              <a href="tel:8369296915" className="block bg-yellow-400 text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-yellow-300 transition duration-300 text-base md:text-lg w-full text-center">
                📞 Call Now: 8369296915
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

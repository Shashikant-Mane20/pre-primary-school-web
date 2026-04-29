export default function CTA() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">Ready to Join Seven Star?</h2>
        <p className="text-sm md:text-lg mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Give your child the best start with our comprehensive pre-primary programs. Limited seats available for the current academic year!
        </p>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
          <a 
            href="tel:8369296915" 
            className="bg-yellow-400 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-yellow-300 transition duration-300 text-base md:text-lg w-full md:w-auto"
          >
            📞 Call Now: 8369296915
          </a>
          <div className="text-white text-sm md:text-lg font-semibold text-center md:text-left">
            <p>📍 Mahadev Ridhi Siddhi Complex</p>
            <p className="text-xs md:text-base">Building No.02 Kasheli, Behind Divine School</p>
          </div>
        </div>

        <p className="mt-6 md:mt-8 text-base md:text-lg opacity-75">
          ⏰ Monday - Friday: 8:00 AM - 6:00 PM
        </p>
      </div>
    </section>
  )
}

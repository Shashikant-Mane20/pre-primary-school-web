export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Get in touch with us for more information about our programs and admissions.
        </p>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Contact Information</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex space-x-3 md:space-x-4">
                <div className="text-blue-600 text-xl md:text-2xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm md:text-base">Address</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Mahadev Ridhi Siddhi Complex, Building No.02 Kasheli, Behind Divine School</p>
                </div>
              </div>

              <div className="flex space-x-3 md:space-x-4">
                <div className="text-blue-600 text-xl md:text-2xl flex-shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm md:text-base">Phone</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    <a href="tel:8369296915" className="hover:text-blue-600 font-semibold">8369296915</a>
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 md:space-x-4">
                <div className="text-blue-600 text-xl md:text-2xl flex-shrink-0">✉️</div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm md:text-base">Email</h4>
                  <p className="text-gray-600 text-xs md:text-sm">schoolofsevenstar@gmail.com</p>
                </div>
              </div>

              <div className="flex space-x-3 md:space-x-4">
                <div className="text-blue-600 text-xl md:text-2xl flex-shrink-0">🕐</div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm md:text-base">Hours</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

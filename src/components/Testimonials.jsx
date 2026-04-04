export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mrs. Priya Singh',
      role: 'Parent of Aditya (Play Group)',
      message: 'Seven Star has been the perfect choice for my son. The teachers are so caring and attentive. I can see noticeable improvement in his communication and social skills.',
      rating: 5
    },
    {
      name: 'Mr. Rajesh Sharma',
      role: 'Parent of Ananya (Nursery)',
      message: 'The welcoming environment and qualified staff make me feel confident leaving my daughter in their hands. The regular updates and progress reports are excellent.',
      rating: 5
    },
    {
      name: 'Mrs. Deepa Patel',
      role: 'Parent of Arjun (Junior KG)',
      message: 'My son eagerly waits to go to school every day! The play-based learning approach keeps him engaged and happy while learning.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">What Parents Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from parents who have seen their children grow at Seven Star Pre Primary School
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

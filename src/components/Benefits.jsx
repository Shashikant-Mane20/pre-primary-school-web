export default function Benefits() {
  const benefits = [
    {
      icon: '🧠',
      title: '90% Brain Development',
      description: 'Maximum brain development happens before age 6. Early education is critical for cognitive growth.',
      color: 'text-blue-600'
    },
    {
      icon: '👥',
      title: 'Social Skills',
      description: 'Children learn to interact, collaborate, and build meaningful relationships with peers.',
      color: 'text-blue-600'
    },
    {
      icon: '📚',
      title: 'Better Learning',
      description: 'Early learners show improved reading, writing, and math skills in later grades.',
      color: 'text-blue-600'
    },
    {
      icon: '😊',
      title: 'Emotional Growth',
      description: 'Development of confidence, curiosity, and positive behavior patterns.',
      color: 'text-blue-600'
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Why Early Learning Matters</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Research shows that children who attend quality pre-primary schools have better academic performance, social skills, and emotional development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition duration-300 text-center border-t-4 border-blue-600">
              <div className={`text-4xl md:text-5xl mb-3 md:mb-4`}>{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

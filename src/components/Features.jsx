export default function Features() {
  const features = [
    {
      icon: '❤️',
      title: 'Personal Attention',
      description: 'Each child receives personalized care and attention to nurture their unique potential',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👩‍🎓',
      title: 'Qualified Staff',
      description: 'Our experienced and certified teachers are dedicated to early childhood education',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🧩',
      title: 'Logical & Motor Skills',
      description: 'Development of cognitive abilities and fine and gross motor skills through engaging activities',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🛡️',
      title: 'Safe & Joyful Environment',
      description: 'A secure, hygienic, and cheerful environment where children can explore and learn freely',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <section id="features" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Why Choose Us</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          We provide a comprehensive learning environment focused on holistic development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`bg-gradient-to-br ${feature.color} text-white rounded-lg p-4 md:p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <div className="text-5xl md:text-6xl mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-xs md:text-sm leading-relaxed opacity-95">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

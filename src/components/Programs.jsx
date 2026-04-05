export default function Programs() {
  const programs = [
    {
      name: 'Play Group',
      age: '2 - 3 Years',
      description: 'Exploration through play and sensory activities',
      icon: '🎨',
      color: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Nursery',
      age: '3 - 4 Years',
      description: 'Foundational skills and social interaction',
      icon: '🌟',
      color: 'from-pink-400 to-pink-500'
    },
    {
      name: 'Junior KG',
      age: '4 - 5 Years',
      description: 'Letters, numbers, and creative expression',
      icon: '📖',
      color: 'from-green-400 to-green-500'
    },
    {
      name: 'Senior KG',
      age: '5 - 6 Years',
      description: 'Preparation for school readiness',
      icon: '🎓',
      color: 'from-orange-400 to-orange-500'
    }
  ]

  return (
    <section id="programs" className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Our Programs</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          We offer age-appropriate programs designed to nurture development at every stage of early childhood
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {programs.map((program, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${program.color} text-white rounded-lg p-4 md:p-6 hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer border-4 border-white`}>
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{program.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{program.name}</h3>
              <p className="font-semibold mb-2 md:mb-3 text-xs md:text-sm opacity-90">{program.age}</p>
              <p className="text-xs md:text-sm opacity-95">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

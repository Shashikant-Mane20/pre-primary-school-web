export default function Activities() {
  const activities = [
    {
      icon: '🎨',
      title: 'Art & Creativity',
      description: 'Creative expression through painting, drawing, craft, and imaginative play to foster artistic development.'
    },
    {
      icon: '🎭',
      title: 'Celebrations & Events',
      description: 'Annual day performances, festival celebrations, and special themed events where every child shines on stage.'
    },
    {
      icon: '🏃‍♂️',
      title: 'Physical Activities',
      description: 'Outdoor play, sports activities, and games to develop gross and fine motor skills.'
    },
    {
      icon: '📚',
      title: 'Learning & Exploration',
      description: 'Interactive learning activities, educational games, and discovery-based learning experiences.'
    },
    {
      icon: '🎓',
      title: 'Milestone Celebrations',
      description: 'Graduation ceremonies where children receive certificates marking their achievement in each class.'
    },
    {
      icon: '🌍',
      title: 'Life Skills',
      description: 'Teaching values, hygiene habits, social etiquette, and responsibility in a fun, interactive way.'
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Life at Seven Star</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Learning through play, fun, and meaningful experiences that make every day special for our children
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activities.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-600">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{activity.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{activity.title}</h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Gallery() {
  const images = [
    { id: 1, title: 'Classroom Activities' },
    { id: 2, title: 'Playtime Fun' },
    { id: 3, title: 'Art & Craft' },
    { id: 4, title: 'Learning Together' },
    { id: 5, title: 'Sports Activities' },
    { id: 6, title: 'School Events' }
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Photo Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg overflow-hidden h-60 flex items-center justify-center hover:shadow-lg transition duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-center">
                <p className="text-5xl mb-2">📷</p>
                <p className="text-white font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

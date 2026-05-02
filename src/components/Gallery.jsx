import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Array of 23 images from summer camp 2026
  const images = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    src: `/summer camp 2026/img${i + 1}.jpeg`,
    title: `Summer Camp Memory ${i + 1}`
  }))

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-blue-900">Photo Gallery</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm sm:text-base lg:text-lg">Moments from Summer Camp 2026</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-105 active:scale-95 group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-h-screen md:max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full max-h-80 sm:max-h-96 md:max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute -top-12 sm:top-4 right-0 sm:right-4 bg-white text-black rounded-full w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 transition active:bg-gray-300 text-lg sm:text-base"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <p className="text-white text-center mt-3 sm:mt-4 text-xs sm:text-lg font-semibold px-2">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

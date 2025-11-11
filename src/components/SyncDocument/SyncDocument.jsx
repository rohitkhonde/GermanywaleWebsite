import React, { useState, useEffect } from 'react'
import { MdDonutSmall } from 'react-icons/md'

// ✅ Lazy load the image
const SyncDocument = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [syncImage, setSyncImage] = useState(null)

  // ✅ Preload image on component mount
  useEffect(() => {
    import("../../assets/sync/newsync3.png")
      .then(module => {
        setSyncImage(module.default)
        // Preload the image
        const img = new Image()
        img.src = module.default
        img.onload = () => setImageLoaded(true)
      })
      .catch(error => {
        console.error('Failed to load sync image:', error)
      })
  }, [])

  // ✅ Feature list data for cleaner code
  const features = [
    "Discover universities and courses.",
    "Ask questions and interact with the community.",
    "Latest study abroad news and updates.",
    "Track applications and offers.",
    "And a lot more."
  ]

  return (
    <section className="px-8 sm:px-8 lg:px-8 xl:px-28 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto">
        
        {/* ✅ Text Content - Left Side */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent text-left"
              style={{ fontFamily: "Gilroy-Bold" }}>
            Sync All Documents In The Cloud
          </h3>
          
          {/* ✅ Features List */}
          <div className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </div>
        </div>

        {/* ✅ Image Content - Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {syncImage && (
              <img 
                src={syncImage} 
                alt="Sync documents in cloud" 
                className={`w-full h-auto transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
              />
            )}
            
            {/* ✅ Loading placeholder */}
            {!imageLoaded && (
              <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading image...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ✅ Extracted Feature Item Component for better performance
const FeatureItem = React.memo(({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="flex-shrink-0 mt-1">
      <MdDonutSmall className="text-[#ff9422] text-lg group-hover:scale-110 transition-transform" />
    </div>
    <p className="text-black text-sm text-left sm:text-base leading-relaxed group-hover:text-gray-900 transition-colors"
       style={{ fontFamily: "Gilroy-Medium" }}>
      {text}
    </p>
  </div>
))

export default React.memo(SyncDocument)
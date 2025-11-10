import React from 'react'
import playIcon from "../../assets/Updated-Testimonal/play.svg";

const Testicard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="bg-gradient-to-r from-[#fff4eb] via-[#ffdfd8] to-[#ffdfd8] rounded-t-lg flex flex-col h-80 sm:h-96 lg:h-[28rem] mx-2"> 
      {/* ✅ Responsive heights: mobile 320px → tablet 384px → desktop 448px */}
      
      {/* Text Content - Responsive with truncation */}
      <div className="flex-1 p-3 sm:p-4 lg:p-5 min-h-0 overflow-hidden">
        <div 
          className="text-left text-gray-800 overflow-hidden"
          style={{
            fontFamily: "Gilroy-Bold",
          
          }}
        >
          {/* ✅ Responsive text sizes */}
          <span className="text-xl sm:text-sm lg:text-xl leading-relaxed">
            {item.description}
          </span>
        </div>
      </div>

      {/* Name, course, university and student image - Responsive layout */}
      <div className="flex items-start justify-between px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4">
        <div className="flex-1 text-left min-w-0 "> {/* ✅ min-w-0 prevents flex overflow */}
          {/* ✅ Responsive name */}
          <div className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2" 
               style={{ fontFamily: "Gilroy-Medium" }}>
            {item.name}
          </div>
          
          {/* ✅ Responsive course */}
          <div className="text-gray-600 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 leading-tight" 
               style={{ fontFamily: "Gilroy-Regular" }}>
            {item.course}
          </div>
          
          {/* ✅ Responsive university logo */}
          <div className="mt-1 sm:mt-2">
            <img 
              src={item.university} 
              alt="university"
              className="w-24 sm:w-28 lg:w-32 h-6 sm:h-8 lg:h-10 object-contain" 
            />
          </div>
        </div>
        
        {/* ✅ Responsive student image */}
        <div className="flex-shrink-0 ml-3 sm:ml-4">
          <img 
            src={item.imageSrc} 
            alt="student"
            className="w-32 h-20 sm:w-32 sm:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain rounded-lg" 
          />
        </div>
      </div>

      {/* ✅ Responsive Watch Story Button */}
      <div
        className="bg-gradient-to-r from-[#ea7d06] via-[#DF3C19] to-[#DF3C19] text-white py-3 rounded-b-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => item.videoLink && item.videoLink !== "/" && window.open(item.videoLink, "_blank")}
      >
        <img src={playIcon} alt="playbtn" className="h-5 w-5 sm:h-10 sm:w-10 mr-2" />
        <h3
          className="text-sm sm:text-xl font-medium"
          style={{ fontFamily: "Gilroy-Medium" }}
        >
          Watch their story
        </h3>
      </div>
    </div>
  )
}

export default Testicard
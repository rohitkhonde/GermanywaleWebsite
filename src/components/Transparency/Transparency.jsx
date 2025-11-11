import React from 'react'
import transparency from "../../assets/Transparency/transparency4.png"

const Transparency = () => {
  return (
    <div className='container px-8'>
        <div className=''>
            <h3
            className="text-center text-2xl sm:text-xl  md:text-4xl mt-10 mb-1 bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
            style={{fontFamily:"Gilroy-Bold"}}
            >We Beleive In 100% Transparency </h3>
        </div>
        <div className='text-sm sm:text-xl mb-6'>
            <p
            className='text-sm sm:text-xl '
            style={{fontFamily:"Gilroy-Medium"}}
            >Simple, flexible, and powerful. Track all your applications with the
            convenience of your phone</p>
        </div>
        <div>
            <img src={transparency} className='object-contain h-auto'/>
        </div>

    </div>
  )
}

export default Transparency
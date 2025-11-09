import React from 'react'
import coverimage from "../../assets/hero/heroimage.svg"
import herobg from "../../assets/hero/herobg.png"
import t from "../../assets/hero/t.png"
import b from "../../assets/hero/b.png"
import a from "../../assets/hero/a.png"
import l from "../../assets/hero/l.png"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className='mb-8'
     style={{
            background: `url(${herobg})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",

         
           
        }}>
          {/* Container */}
          <div className='container flex flex-col items-center justify-between sm:pt-6   lg:flex-row '>
              {/* Hero-Text */}
              <div className='text-center lg:text-left px-8 sm:px-8 mt-24 '
              style={{
                fontFamily:"Gilroy-Bold"
              }}>
                <p className='text-2xl sm:text-3xl mb-3'>Empowering dreams of</p>
                <h2 className="text-2xl sm:text-3xl xl:text-3xl mb-3  bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">Studying in Germany</h2>
                <button className='bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] text-[#FFFFFF] rounded-xl px-3 py-2 sm:px-4 sm:py-1 lg:px-5 lg:py-2 font-semibold text-sm sm:text-md'>
                    <Link>Call for Free counselling</Link>
                </button>
               <div className='flex flex-col'> 
                <div>
                    <p className='pt-8'
               style={{
                fontFamily:"Gilroy"
               }}>Our students finished university to work at global offices of</p>
                </div>
               <div className='flex flex-wrap space-x-4  items-center justify-center lg:justify-start sm:gap-6'>
                <img
                src={t}
                alt="tesla"
                className="h-8 sm:h-10 w-7 md:h-12 object-contain"
              />
              <img
                src={b}
                alt="bmw"
                className=" h-9 sm:h-10 w-10 sm:w-10 md:w-14 object-contain"
              />
              <img
                src={a}
                alt="oodd"
                className="h-18 sm:h-14 w-12 sm:w-16 md:w-20 object-contain"
              />
             
              <img
                src={l}
                alt="lufthansa"
                className="h-18 sm:h-24 w-24 sm:w-32 md:w-40 object-contain"
              />
               </div>
               
               
               </div>

              </div>
              {/* Image */}
              <div className=''>
                <img src={coverimage}
                     alt='hero-image'
                     className='w-full lg:h-80 xl:h-96 object-fill'
                />
              </div>
          </div>
          
        
    </div>
       <a
            href="/chancekart"
            className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:text-white hover:bg-orange-50 px-6 py-2 rounded-md  transition-colors mt-2 mb-2"
          >
            ChanceKarte is live now
          </a>
          </>
  )
}

export default Hero
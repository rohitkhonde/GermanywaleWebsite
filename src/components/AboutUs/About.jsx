import React from 'react'
import abouthero from "../../assets/about/abouthero.jpg"
import lastabout2 from "../../assets/about/lastabout2.png"
const About = () => {
  return (
    <div className=''>
     <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='h-[400px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden'
             style={{
            background:`url(${abouthero})`,
             backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            
        }}>
          <div className='h-full flex items-center justify-center bg-opacity-40'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-white font-bold'
                        style={{
                            fontFamily: "Gilroy-Bold"
                        }}>About US</h1>
           </div>
            </div>


            <div className='flex flex-col'>
                {/* Our Obession */}
                <div className='mt-6 py-2'>
                    <h1 className='text-3xl sm:text-2xl lg:text-4xl bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent'
                    style={{
                        fontFamily:"Gilroy-Bold"
                    }}>OUR OBSESSION?</h1>
                </div>

                {/* TO MAKE YOUR JOURNEY HASSLE FREE */}

                <div className='text-center mb-8 sm:mb-12'>
                    <h1 className='text-3xl sm:text-2xl lg:text-4xl bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent'
                    style={{fontFamily:"Gilroy-Bold"}}>TO MAKE YOUR JOURNEY HASSLE FREE</h1>
                </div>

                {/* Our Mission */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-24 mb-8 sm:mb-12 lg:mb-16 px-8'>
                    <h2 className='text-black text-3xl sm:text-2xl lg:text-4xl'
                    style={{
                        fontFamily:"Gilroy",
                        fontWeight:"700"
                    }}>Our Mission</h2>
                    <p className='text-left text-md text-[#333] sm:text-lg md:text-xl lg:text-xl '
                    style={{
                        fontFamily:"Gilroy-Medium"
                    }}>At Germanywale, we empower aspiring minds with personalized support and expert guidance. We make studying in Germany seamless, fostering a community of ambitious individuals. Our mission is to turn academic dreams into reality. Together, we pave the way for a brighter future.</p>
                </div>
            </div>

            <div className='h-[400px] sm:h-[400px] lg:h-[400px] rounded-lg overflow-hidden mb-8 ' 
            style={{
                    backgroundImage:`url(${lastabout2})`,
             backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            
            // background:rgba(0, 0, 0, 0.7)

            }}>
                <div className='h-full flex flex-col lg:flex-row items-center justify-around px-8 gap-0 sm:gap-8 lg:gap-24'
                style={{
                    backgroundColor:"rgba(0, 0, 0, 0.7)",
                }}>
                    <div className='text-center'>
                    <h1 className='text-white text-3xl sm:text-2xl lg:text-4xl'
                    style={{
                        fontFamily:"Gilroy",
                        fontWeight:"700"
                    }}>Our Vision</h1>
                    </div>
                
                <div className='px-4 sm:px-1 lg:px-4'>
                    <p className='text-white text-left text-md text-[#333] sm:text-md md:text-xl lg:text-xl'
                    style={{
                        fontFamily:"Gilroy-Medium"
                    }}>Our vision at Germanywale is to bridge the gap between ambition and achievement, empowering students to pursue their dreams in Germany with ease. We're dedicated to delivering a seamless, supportive, and successful experience, from application to arrival. Your journey, simplified. Your future, empowered.</p>
                </div>

                </div>

            </div>



        </div>
    </div>
  )
}

export default About
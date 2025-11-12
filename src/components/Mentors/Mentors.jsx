import React, { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import {mentors} from "./mentorData"
import { Swiper, SwiperSlide } from 'swiper/react'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MentorCard from './MentorCard'
const Mentors = () => {
 const navigationNextRef = useRef(null);
   const navigationPrevRef = useRef(null);
 return (
   <div>
    <div>
        {/* Heading */}
        <div>
            <h1 className='text-2xl sm:text-4xl mt-8 mb-4 bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent'
            style={{
              fontFamily:"Gilroy-Bold"
            }}>World Class Mentors </h1>
        </div>
                

        

        {/* Mentor cards */}
        <div className='w-full container px-8 py-12 mb-4'>
          <Swiper
            modules = {[Navigation,Autoplay]}
            spaceBetween={48}
            slidesPerView={1}
              navigation = {{
              nextEl: navigationNextRef.current, // Fixed typo
              prevEl: navigationPrevRef.current, // Added prevEl
            }}
            autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
            breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 28,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 48,
                            },
                        }}
             onSwiper={(swiper) => {
                            // Delay navigation init for refs to be defined
                            setTimeout(() => {
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                            });
                        }}
          >
            {mentors.map((card,index)=>(
              <SwiperSlide key={index}>
                <MentorCard item={card}/>
              </SwiperSlide>
            ))}


          </Swiper>

        </div>

    </div>
   </div>
  )
}

export default Mentors
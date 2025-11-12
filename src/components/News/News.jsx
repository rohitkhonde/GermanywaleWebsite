import React from 'react'
import blog1 from "../../assets/news/blog1.svg"
import blog2 from "../../assets/news/blog2.svg"
import blog3 from "../../assets/news/blog3.svg"
import show from "../../assets/news/showmore.png"
import aeroplanebg from "../../assets/news/new_bg.png";
import aeroplane from "../../assets/news/new_aeroplane.png";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./News.css"
const News = () => {
     const hotelCards = [
    {
      image: blog1,
      title:
        "A Comprehensive Guide to Unravel the Mysteries of German Higher Education",
      description:
        "With its thriving culture, lengthy history, and prestigious educational institutions, Germany is a shining example of a country committed to higher education. Every year, thousands of students go to",
      blogLink:
        "https://www.quora.com/profile/Germanywale/Comprehensive-Guide-to-Unravel-the-Mysteries-of-Higher-Education-in-Germany-With-its-thriving-culture-lengthy-history",
    },
    {
      image: blog2,
      title:
        "From Campus to Cubicle: Navigating  Idiosyncratic Germany's Employment Scene",
      description:
        "Germany, known for its distinctive fusion of innovation and tradition, is an alluring environment for recent graduates making the move from college to the business sector. Germany’s employmen",
      blogLink:
        "https://www.quora.com/profile/Germanywale/From-Campus-to-Cubicle-Navigating-Germanys-Idiosyncratic-Employment-Scene-Ahoy-fresh-grads-Youve-come-to-the-corre",
    },
    {
      image: blog3,
      title:
        "Unveiling the Road to Success in Germany with a Post-Study Work Visa",
      description:
        "Amid the cobblestone streets and the whispers of history, are you lost and puzzled about how to find employment on the roads of Germany? Let me say - you are not ",
      blogLink:
        "https://www.quora.com/profile/Germanywale/Unveiling-the-Road-to-Success-in-Germany-with-a-Post-Study-Work-Visa-Amid-the-cobblestone-streets-and-the-whispers-of-h",
    },
  ];


  return (
    <div className='container px-8'>
        <div className="flex justify-center px-1 sm:px-8 lg:px-5">
              <h3
                className="text-2xl sm:text-4xl font-bold mt-4 mb-5 overflow-hidden bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                Latest News From Our Blog
              </h3>
              <button className="text-sm sm:text-md flex items-center">
                {" "}
                <img src={show} alt="text" height="18" width="18" />
                <span
                  className="ms-1  text-sx sm:text-sm bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Show More
                </span>
              </button>
            </div>
        <div>
            <Swiper
            modules = {[Navigation,Autoplay]}
            spaceBetween={48}
            slidesPerView={1}
            //   navigation = {{
            //   nextEl: navigationNextRef.current, // Fixed typo
            //   prevEl: navigationPrevRef.current, // Added prevEl
            // }}
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
                        }}>
            {hotelCards.map((card,index)=>(
                <SwiperSlide key={index}>
                     <div
                      className="shadow-xl cursor-pointer rounded-xl p-4"
                      key={index}
                      onClick={() => window.open(card.blogLink, "_blank")}
                    >
                      <div className="mb-2 rounded-xl">
                        <div className="border p-2 rounded-xl">
                          <img
                            src={card?.image}
                            alt="text"
                            className="h-full w-full object-fill"
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="text-left p-1 sm:p-3">
                          <p
                            className="text-sm underline mb-2"
                            style={{ fontFamily: "Gilroy-Medium" }}
                          >
                            {card?.title}
                          </p>
                          <p
                            className="text-xs text-[#10100F]"
                            style={{ fontFamily: "Gilroy-Regular" }}
                          >
                            {card?.description.slice(0, 150)}
                            <span
                              className="text-[#046196] border-b border-[#046196] ms-2 "
                              style={{
                                fontSize: "10px",
                                fontFamily: "Gilroy-Regular",
                              }}
                            >
                              Read More
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between items-center p-2 sm:p-3">
                          <div
                            className="text-sm"
                            style={{ fontFamily: "Gilroy-Regular" }}
                          >
                            PRESS RELEASE
                          </div>
                          <div className="flex flex-col text-[#C9CCC8]">
                            <h5
                              className="text-sm"
                              style={{ fontFamily: "Gilroy-Medium" }}
                            >
                              &nbsp;
                            </h5>
                            <p
                              className="text-sm"
                              style={{ fontFamily: "Gilroy-Regular" }}
                            >
                              28 April 2024
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
            ))}

            </Swiper>
        </div>
        <div className="relative overflow-hidden">
            <div className="flex">
              {Array.from({ length: 200 }).map((_, index) => (
                <img
                  key={index}
                  className="moving-image"
                  src={aeroplanebg}
                  // alt={images[index % images.length]} // Use modulus operator to repeat the array
                  alt="helo"
                />
              ))}
            </div>
            <div className="absolute top-0 sm:top-28 left-3 sm:left-24 z-20">
              <img
                src={aeroplane}
                alt="aeroplane"
                className="h-7 sm:h-full w-16 sm:w-40 transform"
              />
            </div>
          </div>
    </div>
  )
}

export default News
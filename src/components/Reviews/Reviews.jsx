import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function StarRating({ rating }) {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${index < rating ? "text-yellow-400" : "text-gray-300"
            } text-xl`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Utkarsh Singh Sikarwar",
      initial: "U",
      rating: 5,
      text: "I had a great experience with Germanywale team. The team was knowledgeable, responsive, and guided me through each step of the process, from university selection to document preparation and visa application.",
      backgroundColor: "bg-yellow-500",
    },
    {
      id: 2,
      name: "Derin Demir",
      initial: "D",
      rating: 5,
      text: "I really did enjoy my journey with Germanywale and felt comfortable talking about my goals. The communication was also good.",
      backgroundColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Sachin Ayyappasamy",
      initial: "S",
      rating: 5,
      text: "The entire process was smooth, and the team at Germanywale was incredibly supportive, helping me overcome every challenge I faced during the application process.",
      backgroundColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Aditi Sharma",
      initial: "A",
      rating: 5,
      text: "Germanywale provided excellent support, making my transition seamless. Highly recommend their services.",
      backgroundColor: "bg-blue-500",
    },
  ];
  return (
    <div className=''>
      <div className='mt-6'>



        {/* Heading */}
        <div className='text-2xl md:text-4xl'
          style={{
            color: "#D63715",
          }}>
          <h1
            style={{
              fontFamily: "Gilroy-Bold"
            }}>The Trust We’ve Earned</h1>
        </div>

        {/* Rating and Google image */}
        <div className='flex items-center justify-center mt-6 flex-col sm:flex-col lg:flex-row py-6'>
          <div className='flex items-center justify-center'>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
              alt="Google Logo"
              className="w-32"
            />
          </div>
          <div> <div><h2 className='text-xl md:text-2xl text-gray-600'>Google Rating</h2></div>
            <div className='flex items-center justify-center gap-2 text-2xl text-yellow-500'>
              <strong className="text-gray-900 text-4xl">4.7</strong>
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStarHalfAlt className="text-4xl" />
            </div>
            <div><p>See all our reviews (111)</p></div></div>
        </div>



        {/* Review Cards */}
        <div className='container'>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
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
                spaceBetween: 20,
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className='px-4'>
                  <div className="bg-white text-left rounded-lg  p-6 h-full flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${review.backgroundColor} rounded-full flex items-center justify-center text-white text-3xl font-semibold`}
                        style={{
                          fontFamily: "Gilroy-Medium",
                        }}
                      >
                        {review.initial}
                      </div>
                      <div className="ml-4">
                        <h3
                          className="text-xl"
                          style={{
                            fontFamily: "Gilroy-Bold",
                          }}
                        >
                          {review.name}
                        </h3>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                    <p
                      className="  mb-4"
                      style={{
                        fontFamily: "Gilroy-Medium",
                        fontWeight: "normal",
                      }}
                    >
                      {review.text}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="w-4 h-4 mr-2"
                      />
                      <span>Posted on Google</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>




      </div>


    </div>
  )
}

export default Reviews
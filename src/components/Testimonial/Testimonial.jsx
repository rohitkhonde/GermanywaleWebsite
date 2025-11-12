import React, { useRef, useState } from 'react'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



import purvanshi from "../../assets/studentimg/1_preview_rev_1.png";
import shagun from "../../assets/studentimg/ShagunShah_preview_rev_1 (1).png";
import ayush from "../../assets/studentimg/3_preview_rev_1.png";
import shweta from "../../assets/studentimg/6_preview_rev_1.png";
import abhay from "../../assets/studentimg/7_preview_rev_1.png";
import naveen from "../../assets/studentimg/naveen1.png";
import akansha from "../../assets/studentimg/AkankshaMourya_preview_rev_1.png";
import arshiya from "../../assets/studentimg/11_preview_rev_1.png";
import Taranjit from "../../assets/studentimg/Taranjeet (2)_preview_rev_1.png";
import kripal from "../../assets/studentimg/9_preview_rev_1.png";
import prasad from "../../assets/studentimg/prasad.png";
import antony from "../../assets/studentimg/5_preview_rev_1.png";
import shodhan from "../../assets/Updated-Testimonal/shodhanupdated.png";
import oonkar from "../../assets/studentimg/newtestimg1.png";
import ranveer from "../../assets/studentimg/newtestimg2.png";
import ruchi from "../../assets/studentimg/newtestimg3.png";
import yashas from "../../assets/studentimg/newtestimg4.png";
import namratha from "../../assets/studentimg/newtestimg5.png";

// university
import purvanshiuniversity from "../../assets/Updated-Testimonal/purvanshiuniversity.png";
import shagununiversity from "../../assets/Updated-Testimonal/shagununiversity.png";
import ayushuniversity from "../../assets/Updated-Testimonal/ayushuniversity.png";
import naveen_university from "../../assets/Updated-Testimonal/naveenuniversity.png";
import akanshauniversity from "../../assets/Updated-Testimonal/akanshauniversity.png";
import shwetaUniversity from "../../assets/Updated-Testimonal/shwetauniversity.png";
import kripaluniversity from "../../assets/Updated-Testimonal/kripaluniversity.gif";
import abhayuniversity from "../../assets/Updated-Testimonal/abhayuniversity.png";
import taranjituniversity from "../../assets/Updated-Testimonal/taranjituniversity.png";
import prasaduniversity from "../../assets/Updated-Testimonal/prasaduniversity.png";
import arshiyauniversity from "../../assets/Updated-Testimonal/arshiyauniversity.png";
import antonyuniversity from "../../assets/Updated-Testimonal/antonyuniversity.png";
import oonkaruniversity from "../../assets/Updated-Testimonal/newtestuniv1.png";
import ranveeruniversity from "../../assets/Updated-Testimonal/newtestuniv2.png";
import ruchiuniversity from "../../assets/Updated-Testimonal/newtestuniv3.png";
import yashasuniversity from "../../assets/Updated-Testimonal/newtestuniv4.png";
import namrathauniversity from "../../assets/Updated-Testimonal/newtestuniv5.png";
import Testicard from './Testicard';


const Testimonial = () => {
const sliderRef = useRef(null);
    const navigationNextRef = useRef(null);


 const hotelCards = [
    {
      imageSrc: purvanshi,
      name: "Purvanshi Sharma",
      description: "The best part about the Germanywale team is that they don't treat you as a customer.",
      videoLink: "https://www.instagram.com/p/CXsiGOVvMjI/?igsh=MTEyZ2E5b3Z5b2xqdA==",
      course: "MSc in Data Science",
      university: purvanshiuniversity,
      // class:"absolute bottom-0  right-0 w-32 h-20 sm:w-48 sm:h-32 lg:w-40 lg:h-32 xl:w-48 xl:h-36 object-cover rounded-lg"
    },
    {
      imageSrc: shagun,
      name: "Shagun Shah",
      description: "Won't lie. Was a little skeptical about Germanywale in the start. But it proved me wrong in every way possible.",
      videoLink: "https://www.youtube.com/@germanywale_official/featured",
      course: "MSc in Data Science",
      university: shagununiversity,
    },
    {
      imageSrc: ayush,
      name: "Ayush Baid",
      description: "The mentors are easy to reach and talk to, the process is simplified and their advice on writing SOPs and shortlisting universities.",
      videoLink: "https://www.instagram.com/p/CcpG3vktcIC/?igsh=MWVtazVtN2U3ODl1bA==",
      course: "Masters in Management",
      university: ayushuniversity,
    },
    {
      imageSrc: shweta,
      name: "Shweta Kumar",
      description: "Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine.",
      videoLink: "https://www.instagram.com/p/C1Gy9xuLP6J/?igsh=MXkybmt3cDloNjAyYg==",
      course: "Masters in Non-Financials Intensive",
      university: shwetaUniversity,
    },
    {
      imageSrc: abhay,
      name: "Abhay Ahuja",
      description: "The whole process was very transparent it marked my expectations. I was kept well informed about the ongoing developments.",
      videoLink: "https://youtube.com/shorts/znoo0fz9ioA?si=sCzDbJrLX5DXeDpR",
      university: abhayuniversity,
      course: "Masters in Agriculture, Ecology and Societies",
    },
    {
      imageSrc: naveen,
      name: "Naveen Verma",
      description: "My experience with Germanywale has been nothing short of my high expectations. Their flexibility with assigning mentors is excellent",
      videoLink: "https://youtu.be/dTmGfOmDpkk?si=PMdvZk4QSdaa98CH",
      university: naveen_university,
      course: "MSc in Biological Resources",
    },
    {
      imageSrc: akansha,
      name: "Akanksha Mourya",
      description: "Genuinely I was very worried about my application before joining Germanywale. Team always gives me confidence and assurance that I will get an admit.",
      videoLink: "https://youtu.be/yFigyCOADqQ?si=kV5zBjVhyc2_gG-v",
      university: akanshauniversity,
      course: "Master's in molecular life science",
    },
    {
      imageSrc: Taranjit,
      name: "Taranjit Kaur",
      description: "I would never forget the key role played by Team Germanywale in university shortlisting. They were available beyond the time, no matter what type of concern I have.",
      videoLink: "https://www.instagram.com/p/CkRB7KdLhTW/?igsh=bmw5aG56dG15emJu",
      university: taranjituniversity,
      course: "International Management and Leadership (MA)",
    },
    {
      imageSrc: kripal,
      name: "Kripal Kishor",
      description: "Whenever I had a doubt, the team was always there to help me out. The team gave me hope and proper guidance and motivated me a lot to go beyond.",
      videoLink: "https://youtu.be/3TiiJCuJHoE?si=xMHmDDw8e10lz9uc",
      university: kripaluniversity,
      course: "Masters in Intelligent Manufacturing",
    },
    {
      imageSrc: prasad,
      name: "Prasad Patil",
      description: "Germanywale provided exceptional support and engagement, promptly addressing all my questions and doubts. Their patience and reliability eased my journey.",
      videoLink: "https://youtube.com/shorts/Lo2OrJkqmR0?si=iPjX7u43FKzg6HKu",
      university: prasaduniversity,
      course: "Masters in Wind energy Engineering",
    },
    {
      imageSrc: arshiya,
      name: "Arshiya Sharma",
      description: "Saurabh and the entire team were in touch with me consistently the whole time & were always there if I had any doubts. I would highly recommend Germanywale to everyone.",
      videoLink: "https://youtu.be/kYGHHRW0JKA?si=CrF9YAbS6DXdlxu2",
      university: arshiyauniversity,
      course: "Master's in International Business- Focus on healthcare management",
    },
    {
      imageSrc: antony,
      name: "Antony Reddy",
      description: "My entire application process with Germanywale has been extremely smooth. Everyone in the team is exceptional and very helpful.",
      videoLink: "https://youtube.com/shorts/xVFs-veJimQ?si=Mndtadq8RinUXfCR",
      university: antonyuniversity,
      course: "Master of Business Administration",
    },
    {
      imageSrc: shodhan,
      name: "Shodhan",
      description: "Choosing Germanywale for my study abroad journey was the best decision I ever made, as their personalized guidance led me to my dream university with immense support.",
      videoLink: "https://www.instagram.com/p/C6lA9JeOWm_/?igsh=MWdybDB5N2N4YWV1dQ==",
      university: shagununiversity,
      course: "Master's in Electromobility",
    },
    {
      imageSrc: oonkar,
      name: "Oonkar",
      description: "After 6 years of work, I chose to pursue an MBA in Germany. Germanywale guided me through every step — from course selection, applications, and VISA to accommodation.",
      videoLink: "https://www.instagram.com/reel/DJUH_Kqz7N5/?igsh=MXY2emY4MmlpZmcxag==",
      university: oonkaruniversity,
      course: "Master's in General Management",
    },
    {
      imageSrc: ranveer,
      name: "Ranveer",
      description: "My experience with Germanywale has been nothing short of fabulous and extraordinary. I thoroughly enjoyed the entire process. The team is incredibly cooperative.",
      videoLink: "https://www.instagram.com/reel/DNlHnnZz59P/?igsh=MTB4djRtamxlZ2psNg==",
      university: ranveeruniversity,
      course: "Master's in Health Management",
    },
    {
      imageSrc: ruchi,
      name: "Ruchi",
      description: "I truly appreciated the team's dedication. Whenever there was a problem, someone was always there to help.",
      videoLink: "/",
      university: ruchiuniversity,
      course: "Master's in Economics",
    },
    {
      imageSrc: yashas,
      name: "Yashas",
      description: "Germanywale made everything so simple — they had it all covered. From paperwork to VISA to finding the right course, they handled it like pros.",
      videoLink: "https://www.instagram.com/reel/DJHYixxTeP1/?igsh=YmdhNnR6N2t3YmRn",
      university: yashasuniversity,
      course: "Master's in Applied Data Science and Analytics",
    },
    {
      imageSrc: namratha,
      name: "Namratha",
      description: "Starting late in my Germany journey felt stressful, but Germanywale's swift, clear, and constant support made it magical. I'm truly grateful and have already recommended them to friends!",
      videoLink: "https://www.instagram.com/reel/DI_Wj2jNe_8/?igsh=MXFmaW5rbGg0bnR2eA==",
      university: namrathauniversity,
      course: "Master's in Applied Data Science and Analytics",
    },
];

  return (
        <div className='container'>
            <div className='flex flex-col'>
                <div className='flex items-center justify-center'>
                    <div className='flex-1'></div>
                    <div className='text-center flex-1'>
                        <h3 className="text-2xl sm:text-lg md:text-4xl mt-4 mb-6 bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent"
                            style={{ fontFamily: "Gilroy-Bold" }}>
                            What our Student Speak
                        </h3>
                    </div>
                    <div className='flex flex-1 justify-end items-start'>
                        <button ref={navigationNextRef}>
                            <TbPlayerTrackNextFilled
                                color='#DB4A11' 
                                style={{ fontSize: "1.5rem" }}
                            />
                        </button>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className='w-full px-8'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation={{
                            nextEl: navigationNextRef.current,
                        }}
                       
                        autoplay={{
                            delay: 300000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        onSwiper={(swiper) => {
                            // Delay navigation init for refs to be defined
                            setTimeout(() => {
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        {hotelCards.map((card, index) => (
                            <SwiperSlide key={index}>
                             
                                <Testicard item={card} />
                               
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Testimonial
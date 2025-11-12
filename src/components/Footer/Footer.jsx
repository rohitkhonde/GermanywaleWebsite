import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri'
import logo from "../../assets/footer/footerlogo.png"
import germany from "../../assets/footer/germanylogo.png";
import india from "../../assets/footer/indialogo3.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black py-8'>
        <div className='container px-4 sm:px-6 lg:px-8 flex flex-col text-white'>

            {/* Upper Footer Items - Responsive grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-8'>
                
                {/* Programs */}
                <div className='text-center sm:text-left'>
                    <h4
                        className="text-xl sm:text-2xl mb-3 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                        style={{ fontFamily: "Gilroy-Bold" }}
                    >
                        Programs
                    </h4>
                    <ul
                        className="space-y-2 text-[#A2A1A1]"
                        style={{ fontFamily: "Gilroy-Medium" }}
                    >
                        <li>
                            <a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Bachelor in Germany</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Masters in Germany</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">PhD in Germany</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">MBA in Germany</a>
                        </li>
                    </ul>
                </div>

                {/* Services Section */}
                <div className="text-center sm:text-left">
                    <h4
                        className="text-xl sm:text-2xl mb-3 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                        style={{ fontFamily: "Gilroy-Bold" }}
                    >
                        Services
                    </h4>
                    <ul
                        className="space-y-2 text-[#A2A1A1]"
                        style={{ fontFamily: "Gilroy-Medium" }}
                    >
                        <li>
                            <a href="/visa" className="hover:text-white transition-colors text-sm sm:text-base">Study Visa</a>
                        </li>
                        <li>
                            <a href="/accomodation" className="hover:text-white transition-colors text-sm sm:text-base">Accommodation</a>
                        </li>
                        <li>
                            <a href="/study-germany" className="hover:text-white transition-colors text-sm sm:text-base">Service in Germany</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Service in India</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="text-center sm:text-left">
                    <h4
                        className="text-xl sm:text-2xl mb-3 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                        style={{ fontFamily: "Gilroy-Bold" }}
                    >
                        Contact
                    </h4>
                    <ul
                        className="space-y-2 text-[#A2A1A1]"
                        style={{ fontFamily: "Gilroy-Medium" }}
                    >
                        <li>
                            <a href="/about" className="hover:text-white transition-colors text-sm sm:text-base">About</a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-white transition-colors text-sm sm:text-base">Terms and Condition</a>
                        </li>
                        <li>
                            <a href="/privacyandrefund" className="hover:text-white transition-colors text-sm sm:text-base">Privacy Policies</a>
                        </li>
                        <li>
                            <a href="/privacyandrefund" className="hover:text-white transition-colors text-sm sm:text-base">Refund Policies</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="text-center sm:text-left m-auto mb-0">
                    
                    <div className="flex justify-center sm:justify-start space-x-4 text-[#969696]">
                        <a
                            href="https://www.instagram.com/germanywale_official/"
                            className="text-xl sm:text-2xl hover:text-white transition-colors transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/germanywale.official"
                            className="text-xl sm:text-2xl hover:text-white transition-colors transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/35885346/"
                            className="text-xl sm:text-2xl hover:text-white transition-colors transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.youtube.com/@germanywale_official"
                            className="text-xl sm:text-2xl hover:text-white transition-colors transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiYoutubeLine />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 mt-4 mb-6" />

            {/* Lower Footer Items */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Logo and Copyright */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <Link to="/" className="mb-3">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-12 sm:h-14 w-auto cursor-pointer"
                        />
                    </Link>
                    <div className="text-[#969696] text-sm sm:text-base" style={{ fontFamily: "Gilroy-Medium" }}>
                        Copyrights reserved Germanywale, All rights reserved
                        <a className="block text-transparent text-xs sm:text-sm mt-1" href="/europewale" target="_blank">
                            upcoming
                        </a>
                    </div>
                </div>

                {/* Addresses */}
                <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                    <div className="text-[#A2A1A1] flex flex-col gap-2">
                        {/* Germany Address */}
                        <div className="flex items-center  text-left">
                            <img src={germany} alt="German flag" className="h-4 me-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-left" style={{ fontFamily: "Gilroy-Medium" }}>
                                Neckarstrasse, Bensheim, Hessen, Germany
                            </span>
                        </div>

                        {/* India Address */}
                        <div className="flex items-center justify-center sm:justify-end">
                            <img src={india} alt="Indian flag" className="h-5 me-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-left" style={{ fontFamily: "Gilroy-Medium" }}>
                                Dalal Compound, Near MSEB office, Katol road, Nagpur
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
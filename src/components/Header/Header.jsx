import React from 'react'
import { IoIosCall } from "react-icons/io"
import whatsapp from "../../assets/header/whatsapp.png"
import germany from "../../assets/header/germany.svg"
import gmail from "../../assets/header/gmail.png"
import { Link } from 'react-router-dom'
import { RiYoutubeLine } from 'react-icons/ri'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div 
      className="sticky top-0 bg-white shadow-sm z-50 w-full py-3 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Gilroy, Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main container - flex on mobile, grid on larger screens */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:grid lg:grid-cols-3 lg:gap-4">
          
          {/* Contact Info - Left aligned */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 lg:gap-6 lg:col-span-2 lg:justify-start">
            {/* WhatsApp */}
            <ContactItem
              icon={<img src={whatsapp} alt="whatsapp" className="w-4 h-4 sm:w-5 sm:h-5 rounded" />}
              href="https://wa.me/8484977234"
              text="+91-8484977234"
            />
            
            {/* Germany Call */}
            <ContactItem
              icon={
                <>
                  <IoIosCall className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src={germany} alt="germany" className="w-4 h-4 sm:w-5 sm:h-5 rounded" />
                </>
              }
              href="tel:+4917655471593"
              text="+49-17655471593"
            />
            
            {/* Email */}
            <ContactItem
              icon={<img src={gmail} alt="gmail" className="w-4 h-4 sm:w-5 sm:h-5 rounded" />}
              href="mailto:saurabh@germanywale.com"
              text="saurabh@germanywale.com"
              className="hidden sm:flex" // Hide email on mobile, show on tablet+
            />
          </div>

          {/* Social Media - Right aligned */}
          <div className="flex justify-center sm:justify-end gap-3 lg:gap-4 lg:col-span-1">
            <SocialIcon 
              href="https://www.instagram.com/germanywale_official/"
              icon={<FaInstagram />}
              className="hover:text-pink-600"
            />
            <SocialIcon 
              href="https://www.facebook.com/germanywale.official"
              icon={<FaFacebook />}
              className="hover:text-blue-600"
            />
            <SocialIcon 
              href="https://www.linkedin.com/company/germanywale"
              icon={<FaLinkedin />}
              className="hover:text-blue-500"
            />
            <SocialIcon 
              href="https://www.youtube.com/@germanywale_official"
              icon={<RiYoutubeLine />}
              className="hover:text-red-600"
            />
          </div>
        </div>

        {/* Email for mobile only */}
        <div className="flex justify-center mt-2 sm:hidden">
          <ContactItem
            icon={<img src={gmail} alt="gmail" className="w-4 h-4 rounded" />}
            href="mailto:saurabh@germanywale.com"
            text="saurabh@germanywale.com"
          />
        </div>
      </div>
    </div>
  )
}

// Reusable Contact Item Component
const ContactItem = ({ icon, href, text, className = "" }) => (
  <div className={`flex items-center gap-2 text-sm ${className}`}>
    <Link 
      to={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:opacity-80 transition-opacity"
    >
      {icon}
    </Link>
    <span className="whitespace-nowrap text-xs sm:text-sm">{text}</span>
  </div>
)

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, className = "" }) => (
  <a
    href={href}
    className={`text-lg transition-colors duration-200 hover:scale-110 ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
)

export default Header
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
    <div className='hidden sm:flex items-center justify-between py-6 px-8'
    style={{fontFamily:"Gilroy"}}
    >
      <div className='sm:flex items-center justify-center gap-4'>
        <p className='flex items-center space-x-1 text-xs'>
         
          <Link
          to="https://wa.me/8484977234"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer">

          <img src={whatsapp}
           alt='whatsapp'
           height={10}
           width={20}/>
          </Link>
     
        <span>+91-8484977234</span>
        </p>
       <p className='flex items-center space-x-1 text-xs'>
          <Link to="tel:+4917655471593">
          <IoIosCall fontSize="1rem"/>
          </Link>
      <span>
          <img src={germany} 
          alt='germany'
          height={10}
          width={20}/>
        </span>
        <span> +49-17655471593 </span>
        </p>
      <p className='flex items-center space-x-1 text-xs'>
        <Link to="mailto:saurabh@germanywale.com">
        <img src={gmail} 
        alt="gmail"
        height={10}
        width={20}/>
        </Link>
        <span>
          saurabh@germanywale.com
        </span>
      </p>
      </div>
      <div className='sm:flex space-x-4 items-center'>
       <Link
          to="https://www.instagram.com/germanywale_official/"
          className="text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
         <Link
          to="https://www.instagram.com/germanywale_official/"
          className="text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaFacebook />
        </Link>
         <Link
          to="https://www.instagram.com/germanywale_official/"
          className="text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
         <Link
          to="https://www.instagram.com/germanywale_official/"
          className="text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
             <RiYoutubeLine />
        </Link>
      </div>
    </div>
  )
 
}

export default Header
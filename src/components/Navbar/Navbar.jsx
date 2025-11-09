import React, { useState } from 'react'
import logo from "../../assets/logo/logo.svg"
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import { IoIosCall, IoIosCamera } from 'react-icons/io';
import { FaBars } from 'react-icons/fa6';
// import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='bg-[#FFFFFF] text-black sticky top-0 shadow-md shadow-[#ff9422d3]'
      style={{
        fontFamily: "Gilroy-Bold"
      }}
    >

      <div className='container px-8 py-2 sm:py-1 flex justify-between items-center'>
        {/* logo */}
        <div>
          <Link>
            <img src={logo}
              alt='logo'
              className='h-12 sm:h-14 w-auto mr-4' />
          </Link>
        </div>
        {/* Navbar text */}
        <div className='hidden md:flex space-x-4 sm:space-x-14'>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/chancekart", label: "ChanceKart" },
            { path: "/contact", label: "Contact Us" }

          ].map((item, index) => (

            <Link to={item.path}
              className='hover:scale-120 hover:text-orange-600'
            >
              {item.label}
            </Link>
          ))}

        </div>
        <div className='md:hidden'>
          {isOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className='text-black text-xl sm:text-2xl' />
          ) : (
            <div className='flex space-x-4'>
              <Link>
                <IoIosCall className='text-black text-xl sm:text-2xl' />
              </Link>
              <FaBars
                onClick={toggleMenu}
                className="text-black text-xl sm:text-2xl cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-white py-2"
          style={{ fontFamily: "Gilroy-Bold" }}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/chancekart", label: "ChanceKart" },
            { path: "/contact", label: "Contact Us" }
          ].map((item, index) => (
            <Link
              to={item.path}
              className="block px-4 py-2 text-sm hover:text-orange-600 hover:scale-120"
              onClick={toggleMenu} // Close menu on click
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>

  )
}

export default Navbar
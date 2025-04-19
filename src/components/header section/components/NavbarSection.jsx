import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa";

function NavbarSection() {
  return (
    <div>
      <div className='w-10/12 mx-auto flex items-center justify-between border-t border-b border-gray-300 py-3'>
        <div className='flex items-center gap-6 bg-green-700 p-2 border-none rounded-[5px] text-white'>
            <CiMenuBurger className='text-[30px]' />
            <h2 className='text-lg font-semibold outline-none'>Shop By Categories</h2>
            <MdOutlineKeyboardArrowDown className="text-[30px]" />
        </div>

        <div className='flex items-center gap-8'>
            <Link to="/" className='text-xl font-semibold'>Home</Link>
            <Link to="/shop" className='text-xl font-semibold'>All Products</Link>
            <Link to="/FAQ" className='text-xl font-semibold'>FAQ</Link>
            <Link to="/about" className='text-xl font-semibold'>About Us</Link>
            <Link to="/contact" className='text-xl font-semibold'>Contact Us</Link>
            <Link to="/blog" className='text-xl font-semibold'>Blog</Link>
        </div>

        <div>
            <h2 className='text-lg font-semibold flex items-center gap-1'><FaPhoneVolume className='text-[20px]' />09678242404</h2>
            <h3 className='text-sm text-gray-700'>7 Days customer support</h3>
        </div>
      </div>
    </div>
  )
}

export default NavbarSection

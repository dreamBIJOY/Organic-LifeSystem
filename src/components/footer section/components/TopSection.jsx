import React from 'react'
import Logo from "../../../assets/Footer Image/Logo.png"
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Payment from "../../../assets/Footer Image/payWith.c26692f0d4e31374586b.jpg"

function TopSection() {
  return (
    <div className=' py-10'>
    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      
      {/* Logo & Brand Description */}
      <div>
        <img className='w-[120px] mb-4' src={Logo} alt="Organic LifeSystem Logo" />
        <p className='text-sm text-gray-700 leading-relaxed'>
          Organic LifeSystem is dedicated to nurturing a healthier, greener planet through organic innovation and sustainable living. Our brand stands for purity, wellness, and eco-conscious choices. Join us in creating a future where nature and lifestyle coexist in harmony—one organic step at a time.
        </p>
      </div>
  
      {/* Contact Us */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
        <div className='space-y-4 text-sm text-gray-700'>
          <div className='flex items-start gap-2'>
            <IoLocationSharp className='text-[40px] text-green-600 mt-1' />
            <p><span className='font-semibold text-green-700'>Address:</span> House: 29/31, Noor Tower, Block: A, Road: Main Road, Banasree, Rampura, Dhaka 1219</p>
          </div>
          <div className='flex items-center gap-2'>
            <BiSolidPhoneCall className='text-[25px] text-green-600' />
            <p><span className='font-semibold text-green-700'>Call Us:</span> +8809678242404</p>
          </div>
          <div className='flex items-center gap-2'>
            <MdEmail className='text-[20px] text-green-600' />
            <p><span className='font-semibold text-green-700'>E-mail:</span> hello@organiclifesystem.com</p>
          </div>
        </div>
      </div>
  
      {/* Company Links */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Company</h2>
        <div className='flex flex-col space-y-2 text-sm'>
          <Link className='font-medium hover:text-green-700'>Cookie Policy</Link>
          <Link className='font-medium hover:text-green-700'>Terms & Conditions</Link>
          <Link className='font-medium hover:text-green-700'>Returns & Exchanges</Link>
          <Link className='font-medium hover:text-green-700'>Shipping & Delivery</Link>
          <Link className='font-medium hover:text-green-700'>Privacy Policy</Link>
          <Link className='font-medium hover:text-green-700'>Certification</Link>
        </div>
      </div>
  
      {/* Info Links */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Information</h2>
        <div className='flex flex-col space-y-2 text-sm'>
          <Link className='font-medium hover:text-green-700'>Home</Link>
          <Link className='font-medium hover:text-green-700'>All Products</Link>
          <Link className='font-medium hover:text-green-700'>FAQ</Link>
          <Link className='font-medium hover:text-green-700'>About Us</Link>
          <Link className='font-medium hover:text-green-700'>Contact Us</Link>
          <Link className='font-medium hover:text-green-700'>Blog</Link>
        </div>
      </div>

      <div className='w-[1498px]'>
          <img src={Payment} alt="" />
      </div>

    </div>
  </div>
  
  )
}

export default TopSection



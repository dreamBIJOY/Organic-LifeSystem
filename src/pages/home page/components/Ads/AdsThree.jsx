import React from 'react'
import ImageOne from "../../../../assets/Home Page Image/Ads/Ads Three/1.jpg"
import ImageTwo from "../../../../assets/Home Page Image/Ads/Ads Three/2.jpg"
import ImageThree from "../../../../assets/Home Page Image/Ads/Ads Three/3.jpg"



function AdsThree() {
  return (
    <div className='py-10'>
       <div className='w-10/12 mx-auto flex items-center justify-center gap-10'>
  
  {/* First Image with Zoom */}
  <div className='w-[600px] h-[250px] overflow-hidden rounded-lg'>
    <img
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
      src={ImageOne}
      alt=""
    />
  </div>

  {/* Second Image */}
  <div className='w-[600px] h-[250px] overflow-hidden rounded-lg cursor-pointer'>
    <img
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
      src={ImageTwo}
      alt=""
    />
  </div>


  {/* Thard Image */}
  <div className='w-[600px] h-[250px] overflow-hidden rounded-lg cursor-pointer'>
    <img
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
      src={ImageThree}
      alt=""
    />
  </div>

</div>

    </div>
  )
}

export default AdsThree
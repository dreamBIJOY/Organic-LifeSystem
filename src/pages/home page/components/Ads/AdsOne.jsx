import React from 'react'
import ImageOne from "../../../../assets/Home Page Image/Ads/Ads One/1.jpg"
import ImageTwo from "../../../../assets/Home Page Image/Ads/Ads One/2.jpg"


function AdsOne() {
  return (
    <div className='py-10'>
       <div className='w-10/12 mx-auto flex items-center justify-center gap-10'>
  
  {/* First Image with Zoom */}
  <div className='w-[780px] h-[250px] overflow-hidden rounded-lg'>
    <img
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
      src={ImageOne}
      alt=""
    />
  </div>

  {/* Second Image */}
  <div className='w-[780px] h-[250px] overflow-hidden rounded-lg cursor-pointer'>
    <img
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
      src={ImageTwo}
      alt=""
    />
  </div>

</div>

    </div>
  )
}

export default AdsOne
import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function HeroSection() {
  return (
    <>
    <div className='flex w-10/12 mx-auto'>
        <LeftSection/>
        <RightSection/>
    </div>
    </>
  )
}

export default HeroSection
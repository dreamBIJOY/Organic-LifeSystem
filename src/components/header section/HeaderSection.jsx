import React from 'react'
import TopSection from './components/TopSection'
import MidSection from './components/MidSection'
import NavbarSection from './components/NavbarSection'

function HeaderSection() {
  return (
 <>
 <TopSection/>
 <MidSection/>
 <div className='sticky top-0 bg-white z-10'>
 <NavbarSection/>
 </div>
 
 </>
  )
}

export default HeaderSection

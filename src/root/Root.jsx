import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSection from '../components/header section/HeaderSection'
import FooterSection from '../components/footer section/FooterSection'


function Root() {
  return (
   <>
   

<HeaderSection/>
<Outlet/>
<FooterSection/>

   </>
  )
}

export default Root

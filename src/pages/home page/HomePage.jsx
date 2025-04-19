import React from 'react'
import HeroSection from './components/Hero Section/HeroSection'
import ShopByCategorie from './components/Shop By Categorie/ShopByCategorie'
import PopularProducts from './components/Popular Products/PopularProducts'
import AdsOne from './components/Ads/AdsOne'
import AdsTwo from './components/Ads/AdsTwo'
import NewArrivalProducts from './components/New Arrival Products/NewArrivalProducts'
import AdsThree from './components/Ads/AdsThree'
import FeaturedProducts from './components/Featured Products/FeaturedProducts'

function HomePage() {
  return (
   <>
   <HeroSection/>
   <ShopByCategorie/>
   <AdsOne/>
   <PopularProducts/>
   <AdsTwo/>
   <NewArrivalProducts/>
   <AdsThree/>
   <FeaturedProducts/>
   </>
  )
}

export default HomePage

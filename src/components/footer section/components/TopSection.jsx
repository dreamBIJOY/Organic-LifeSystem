import React from 'react'
import Logo from "../../../assets/Footer Image/Logo.png"

function TopSection() {
  return (
    <div>
      <div className='w-10/12 mx-auto flex justify-between'>
            <div className='w-[120px]'>
                <img className='w-full' src={Logo} alt="" />
            </div>

            <div>
                <h1 className='text-lg font-semibold'>Contact Us</h1>
                <div>
                    <h4>Address: House: 29/31, Noor Tower, Block: A, Road: Main Road, Banasree, Rampura , Dhaka 1219</h4>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TopSection

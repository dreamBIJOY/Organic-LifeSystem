import React from 'react'
import Logo from "../../../assets/Header Image/Logo.png"
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { IoBagOutline } from 'react-icons/io5';

function MidSection() {
  return (
    <div className='py-5'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>
            <div className='w-[120px]'>
                <img src={Logo} alt="" />
            </div>

            <div className='w-[600px] h-[50px] relative'>
                <input className=' w-full h-full border border-gray-200 rounded-sm px-5 outline-none' type="text" placeholder='Search products here...' />
                <p className='w-[50px] h-full bg-green-700 rounded-lg border-none absolute top-0 right-0 outline-none flex items-center justify-center place-items-center'><CiSearch className='text-[30px] text-white' /></p>
            </div>

            <div>
                  <div className="hidden lg:flex items-center">
                          <div className="flex justify-center gap-10">
                            <div
                              className="flex items-center gap-2  cursor-pointer"
                              tabIndex={0}
                              role=""
                            >
                              <FaUser className="text-[30px] text-gray-500" />
                              <div>
                                <p className="text-gray-500 text-sm">
                                  Account <br />{" "}
                                  <span className="font-extralight text-black">LOGIN</span>{" "}
                                </p>
                              </div>
                            </div>
                
                            <div to="/wishlist" className="flex items-center gap-2">
                              <FaRegHeart className="text-[30px] text-gray-500" />
                              <p className="text-gray-500 text-sm" tabIndex={0} role="">
                                Wishlist <br />{" "}
                                <span className="font-extralight text-black">0-ITEMS</span>{" "}
                              </p>
                            </div>
                
                            <div className="flex items-center gap-2">
                              <IoBagOutline className="text-[35px] text-gray-500" />
                              <p className="text-gray-500 text-sm" tabIndex={0} role="">
                                Cart <br />{" "}
                                <span className="font-extralight text-black">0-ITEMS</span>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default MidSection

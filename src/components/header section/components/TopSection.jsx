import React from "react";
import BdFlug from "../../../assets/Header Image/BD Flug.jpg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function TopSection() {
  return (
    <div>
      <p className="bg-green-700 py-1"></p>

      <div className="w-10/12 mx-auto flex items-center justify-between py-3">
        <h2 className="text-sm">Limited-Time Offers : Mid-Summer Season Sale On Selected Items - <span className="underline font-semibold text-green-700">SHOP NOW</span></h2>

        <div className="text-sm gap-4 flex items-center">
        <h2 className="border-r pr-3 border-gray-200">Help Center</h2>
        <h2 className="border-r pr-3 border-gray-200">Order Tracking</h2>
        <div className="flex items-center">
            <div className="flex items-center gap-2">
                <img className="w-[25px]" src={BdFlug} alt="" />
                <h2 className="flex items-center border-r pr-2 border-gray-200">BAN<MdOutlineKeyboardArrowDown className="text-sm" /></h2>
            </div>
            <div className="translate-x-4">
                <h2 className="flex items-center">BDT<MdOutlineKeyboardArrowDown className="text-sm" /></h2>
            </div>
        </div>
      </div>
      </div>

     
    </div>
  );
}

export default TopSection;

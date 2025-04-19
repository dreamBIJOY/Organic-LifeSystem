import React from "react";
import Hero1 from "../../../../assets/Home Page Image/Header Section/Hero-1.jpg";


function LeftSection() {
  return (
      <div className="w-7/10 h-[100px] py-10">
        <div className="relative w-full">
          <img className="rounded-lg w-full h-full object-cover"  src={Hero1} alt="" />
          <div className="absolute top-24 right-5">
            <p className="text-lg bg-green-700 rounded-2xl w-[330px] p-2 text-white font-bold">WELCOME TO ORGANIC LIFESYSTEM</p>
            <h1 className="text-5xl font-bold w-[400px] mt-6">Eat well, Stay Healthy.</h1>
            <p className="text-lg w-[400px] mt-4 font-semibold text-gray-700">Organic LifeSystem is dedicated to nurturing a healthier, greener planet through organic innovation and sustainable living.</p>
            <button className="btn p-6 text-lg font-semibold border-none bg-green-700 text-white rounded-lg mt-12">SHOP NOW</button>
          </div>
        </div>
      </div>
  );
}

export default LeftSection;

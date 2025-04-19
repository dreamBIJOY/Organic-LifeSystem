import React from "react";
import ImageOne from "../../../../assets/Home Page Image/Ads/Ads Two/1.jpg";

function AdsTwo() {
  return (
    <div className="py-10">
      <div className="w-10/12 h-[250px] mx-auto overflow-hidden rounded-lg ">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={ImageOne}
          alt=""
        />
      </div>
    </div>
  );
}

export default AdsTwo;

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function OurClients() {
  const scrollRef = useRef(null);
  const itemWidth = 450 + 16; // width + gap
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/Clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  useEffect(() => {
    if (scrollRef.current && clients.length > 0) {
      const container = scrollRef.current;
      container.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth"
      });
    }
  }, [currentIndex, clients.length, itemWidth]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-10">
      <div className="w-10/12 mx-auto pb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">What Our Clients Say</h1>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollLeft}
              className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group"
            >
              <IoIosArrowBack
                size={35}
                className="group-hover:text-white cursor-pointer"
              />
            </button>
            <button
              onClick={scrollRight}
              className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group"
            >
              <IoIosArrowForward
                size={35}
                className="group-hover:text-white cursor-pointer"
              />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <hr className="text-green-700 border-2 w-[250px]" />
          <hr className="text-gray-200" />
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-hidden mt-8 scroll-smooth snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-[450px] h-[350px] border border-gray-200 rounded-lg p-8 flex-shrink-0 snap-align-start"
            >
              <div className="flex items-center gap-5">
                <img
                  className="w-[100px] h-[100px] object-cover rounded-full"
                  src={client.image}
                  alt=""
                />

                <ul>
                  <h1 className="text-xl font-bold">{client.title}</h1>
                  <p className="text-lg mt-2 text-gray-800">{client.role}</p>
                  <p className="text-[18px] mt-2">
                    {"⭐".repeat(Math.round(client.review_rating))}
                  </p>
                </ul>
              </div>
              <h1 className="text-[23px] mt-7 text-gray-800">{client.review}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClients;
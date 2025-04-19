import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function ShopByCategorie() {
    const [categories, setCategories] = useState([]);
    const scrollRef = useRef(null);
    const itemWidth = 240 + 16;

    useEffect(() => {
        fetch("/Categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const newScrollPosition = container.scrollLeft - itemWidth;

            if (newScrollPosition >= 0) {
                container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const newScrollPosition = container.scrollLeft + itemWidth;
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (newScrollPosition < maxScroll) {
                container.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        
            else if (newScrollPosition >= maxScroll) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='bg-[#fbf7f2] py-10'>
            <div className='w-10/12 mx-auto pb-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Shop By Category</h1>
                <div className='flex items-center gap-6'>
                    <p onClick={scrollLeft} className='w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group'>
                        <IoIosArrowBack size={35} className='group-hover:text-white cursor-pointer' />
                    </p>
                    <p onClick={scrollRight} className='w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group'>
                        <IoIosArrowForward size={35} className='group-hover:text-white cursor-pointer' />
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <hr className='text-green-700 border-2 w-[250px]' />
                <hr className='text-gray-200' />
            </div>

            <div
                ref={scrollRef}
                className='flex gap-4 overflow-hidden mt-20 scroll-smooth justify-center'
            >
                {categories.filter((_, index) => index !== 0).map((category, index) => (
                    <div
                        key={index}
                        className='w-[240px] h-[160px] bg-gray-200 rounded-xl p-4 hover:bg-white hover:border-2 border-green-300 hover:shadow-xl group cursor-pointer flex-shrink-0'
                    >
                        <div className='flex justify-center'>
                            <img className='w-[70px] object-cover' src={category.icon} alt={category.title} />
                        </div>
                        <h1 className='text-[21px] font-semibold text-center mt-3 text-gray-800 group-hover:text-black'>
                            {category.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default ShopByCategorie;
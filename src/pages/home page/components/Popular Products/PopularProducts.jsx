import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

function PopularProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const itemWidth = 290; // প্রতিটি প্রোডাক্টের প্রস্থ
  const [categorieName, setCategorieName] = useState(null);

  useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((item) => setProducts(item));
  }, []);

  const handelCategorieName = (cName) => {
    setCategorieName(cName.title);
    // ক্যাটাগরি পরিবর্তন হলে স্ক্রলকে প্রথমে নিয়ে যাও
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      // যদি স্ক্রল শেষে থাকে, তাহলে প্রথমে ফিরে যান
      if (isScrollEnd) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // নাহলে পরবর্তী আইটেমে স্ক্রল করুন
        scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  };

  // স্ক্রল অবস্থা চেক করা
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      // স্ক্রল শেষে পৌঁছালে
      const endReached = scrollLeft + clientWidth >= scrollWidth - 10; // সামান্য টলারেন্স
      setIsScrollEnd(endReached);
      
      // স্ক্রল শুরুতে থাকলে
      const isStart = scrollLeft === 0;
      
      // শুধুমাত্র যখন প্রোডাক্ট ৬টির বেশি থাকে তখন বাটন দেখানো
      const shouldShowButtons = poularProducts.length > 6;
      setShowButtons(shouldShowButtons && (!endReached || !isStart));
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // প্রথম লোডে চেক করুন
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, [products, categories, categorieName]);

  const poularProducts = categorieName && categorieName != "All" 
    ? products.filter(
        (product) => product.featured === "Popular Products" && product.category === categorieName
      ) 
    : products.filter(product => product.featured === "Popular Products");

  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Popular Products</h1>
          </div>

          <div className="flex items-center gap-6">
            {categories.map((categorie, index) => (
              <div key={index} className="">
                <button 
                  onClick={() => handelCategorieName(categorie)} 
                  className="btn p-6 text-xl font-semibold hover:text-green-700 cursor-pointer"
                >
                  {categorie.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <hr className="text-green-700 border-2 w-[250px]" />
          <hr className="text-gray-200" />
        </div>

        {/* Products List */}
        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {poularProducts.map((product, index) => (
              <div
                key={index}
                className="w-[320px] h-[520px] border border-gray-200 rounded-xl p-6 flex flex-col justify-between flex-shrink-0"
              >
                <Link
                                  to={`/products-details/${product.id}`}
                                  className="relative group block"
                                >
                                  {/* পুরো কন্টেন্ট যেটি হোভারে ব্লার হবে */}
                                  <div className="group-hover:blur-sm transition-all duration-300">
                                    <div className="flex-1 overflow-hidden">
                                      <div className="w-[250px] h-[250px] object-cover mx-auto">
                                        <img
                                          className="w-full h-full object-cover rounded"
                                          src={product.image}
                                          alt={product.name}
                                        />
                                      </div>
                                      <p className="text-lg text-gray-800 mt-2">
                                        {product.category}
                                      </p>
                                      <h2 className="text-xl font-bold mt-2 truncate">
                                        {product.name}
                                      </h2>
                                      <p className="text-lg text-gray-800 mt-3 truncate">
                                        {product.description}
                                      </p>
                                      <p className="text-[18px] mt-2">
                                        {"⭐".repeat(Math.round(product.rating))}
                                      </p>
                                      <p className="text-xl font-bold text-red-700 mt-2">
                                        ${product.price}
                                      </p>
                                    </div>
                                  </div>
                
                                  {/* আইকন যা ব্লার হবে না */}
                                  <MdRemoveRedEye className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>

                <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Buttons - শুধুমাত্র যখন প্রোডাক্ট ৬টির বেশি থাকে */}
          {showButtons && (
            <>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                  className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer"
                  onClick={scrollLeft}
                >
                  <IoIosArrowBack size={35} className="group-hover:text-white" />
                </button>
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                  className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer"
                  onClick={scrollRight}
                >
                  <IoIosArrowForward size={35} className="group-hover:text-white" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
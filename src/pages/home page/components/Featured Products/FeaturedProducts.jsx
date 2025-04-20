import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const itemWidth = 320 + 16; // width + gap
  const [categoriName, setCategorieName] = useState("All");
  const [isLooping, setIsLooping] = useState(false);

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

  // Scroll to first product
  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handelCategorieName = (cName) => {
    setCategorieName(cName.title);
    scrollToStart(); // ক্যাটাগরি পরিবর্তন হলে প্রথমে স্ক্রল করবে
  };

  // ক্যাটাগরি বা প্রোডাক্ট পরিবর্তন হলে স্ক্রল রিসেট করুন
  useEffect(() => {
    scrollToStart();
  }, [categoriName, products]);

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const newScrollPos = container.scrollLeft - itemWidth;
      
      if (newScrollPos <= 0) {
        setIsLooping(true);
        container.scrollTo({
          left: container.scrollWidth - container.clientWidth,
          behavior: "auto"
        });
      } else {
        container.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const newScrollPos = container.scrollLeft + itemWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (newScrollPos >= maxScroll) {
        setIsLooping(true);
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  };

  const featuredProducts = categoriName && categoriName !== "All" 
    ? products.filter((product) => product.featured === "Featured Products" && product.category === categoriName)
    : products.filter((product) => product.featured === "Featured Products");

  // শর্ত: ৬টির কম বা সমান হলে বাটন লুকানো, ৭ বা বেশি হলে দেখা যাবে
  const shouldShowButtons = featuredProducts.length > 6;

  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Featured Products</h1>
          </div>

          <div className="flex items-center gap-6">
            {categories.map((categorie, index) => (
              <div key={index} className="">
                <button 
                  onClick={() => handelCategorieName(categorie)} 
                  className={`btn p-6 text-xl font-semibold hover:text-green-700 cursor-pointer ${
                    categoriName === categorie.title ? "text-green-700" : ""
                  }`}
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
            className="flex overflow-hidden gap-4 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="w-[320px] h-[520px] border border-gray-200 rounded-xl p-6 flex flex-col justify-between flex-shrink-0"
              >
              <Link to={`/products-details/${product.id}`}>
              <div>
                  <div className="w-[250px] h-[250px] object-cover mx-auto">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <p className="text-lg text-gray-800 mt-2">
                    {product.category}
                  </p>

                  <h2 className="text-xl truncate mt-2 font-bold">
                    {product.name}
                  </h2>

                  <p className="text-lg text-gray-800 truncate mt-3">{product.description}</p>

                  <p className="text-[18px] mt-">
                    {"⭐".repeat(Math.round(product.rating))}
                  </p>

                  <p className="text-xl font-bold text-red-700 mt-2">
                    ${product.price}
                  </p>
                </div></Link>

                <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Buttons (শুধুমাত্র যখন ৭ বা বেশি প্রোডাক্ট থাকে) */}
          {shouldShowButtons && (
            <>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                  className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer transition-colors"
                  onClick={scrollLeft}
                >
                  <IoIosArrowBack size={35} className="group-hover:text-white" />
                </button>
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                  className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer transition-colors"
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

export default FeaturedProducts;
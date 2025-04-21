import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

function NewArrivalProducts({handleProductClick}) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const itemWidth = 320; // প্রতিটি প্রোডাক্টের প্রস্থ + গ্যাপ
  const [categorieName, setCategorieName] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

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

  const handleCategoryClick = (cName) => {
    setCategorieName(cName.title);
    scrollToStart(); // ক্যাটাগরি ক্লিক করলে প্রথম প্রোডাক্টে স্ক্রল করবে
  };

  // স্ক্রল বাটন দেখানো হবে কিনা তা চেক করে
  useEffect(() => {
    if (newArrivalProducts.length > 6) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
    scrollToStart(); // ক্যাটাগরি বা প্রোডাক্ট পরিবর্তন হলে প্রথমে স্ক্রল করবে
  }, [categorieName, products]);

  // প্রথম প্রোডাক্টে স্ক্রল করবে
  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // শেষ প্রোডাক্টে স্ক্রল করবে (দ্রুত)
  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "auto"
      });
    }
  };

  // বামে স্ক্রল করবে (লুপ সহ)
  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      if (scrollLeft === 0) {
        scrollToEnd(); // প্রথমে থাকলে শেষে যাবে
      } else {
        scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }
    }
  };

  // ডানে স্ক্রল করবে (লুপ সহ)
  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollToStart(); // শেষে থাকলে প্রথমে যাবে
      } else {
        scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  };

  // ফিল্টার্ড প্রোডাক্ট লিস্ট
  const newArrivalProducts =
    categorieName && categorieName !== "All"
      ? products.filter(
          (product) =>
            product.featured === "New Products" && product.category === categorieName
        )
      : products.filter((product) => product.featured === "New Products");

  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">New Arrival Products</h1>
          </div>

          <div className="flex items-center gap-6">
            {categories.map((categorie, index) => (
              <div key={index}>
                <button
                  onClick={() => handleCategoryClick(categorie)}
                  className={`btn p-6 text-xl font-semibold hover:text-green-700 cursor-pointer ${
                    categorieName === categorie.title ? "text-green-700" : ""
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

        {/* প্রোডাক্ট লিস্ট */}
        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-4 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {newArrivalProducts.map((product, index) => (
              <div
                key={index}
                className="w-[320px] h-[520px] border border-gray-200 rounded-xl p-6 flex flex-col justify-between flex-shrink-0"
              >
                {/* প্রোডাক্ট ডিটেইলস */}
               <Link onClick={()=>handleProductClick()}
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
                                 <MdRemoveRedEye className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                               </Link>
                <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          {/* স্ক্রল বাটন (৬টির বেশি প্রোডাক্ট থাকলে দেখাবে) */}
          {showButtons && (
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

export default NewArrivalProducts;
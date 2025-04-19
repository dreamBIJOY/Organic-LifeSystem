import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function FeaturedProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const itemWidth = 290;
  const [categoriName, setCategorieName] = useState(null);

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
    
  }

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const featuredProducts = categoriName && categoriName !== "All" 
  ? products.filter((product) => product.featured === "Featured Products" && product.category === categoriName)
  : products.filter((product) => product.featured === "Featured Products");

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
                <button onClick={()=> handelCategorieName(categorie) } className="btn p-6 text-xl font-semibold hover:text-green-700  cursor-pointer">
                  {categorie.title}
                </button >
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
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="w-[320px] h-[520px] border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
              >
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
                </div>

                <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <p
              className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer"
              onClick={scrollLeft} // Scroll left action
            >
              <IoIosArrowBack size={35} className="group-hover:text-white" />
            </p>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <p
              className="w-[50px] h-[50px] bg-gray-200 rounded-lg hover:bg-green-700 flex items-center justify-center group cursor-pointer"
              onClick={scrollRight} // Scroll right action
            >
              <IoIosArrowForward size={35} className="group-hover:text-white" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;

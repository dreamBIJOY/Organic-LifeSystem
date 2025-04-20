import React, { useEffect, useState } from "react";
import Image1 from "../../assets/All Products Image Components/Ad 1.jpg";
import { Link } from "react-router-dom";

function AllProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data)); 
  }, []);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryName = (category) => {
    setCategoryName(category.title);
    setActiveFilter("All");
  };

  const handleFeaturedFilter = (filter) => {
    setActiveFilter(filter.title);
    setCategoryName("All");
  };

  const categoryByProducts = 
    activeFilter === "Popular Products" 
      ? products.filter(product => product.featured === "Popular Products")
      : activeFilter === "New Products" 
      ? products.filter(product => product.featured === "New Products")
      : activeFilter === "Featured Products" 
      ? products.filter(product => product.featured === "Featured Products")
      : categoryName === "All" 
      ? products 
      : products.filter(product => product.category === categoryName);

  const featuredProducts = [
    { id: 1, title: "Popular Products" },
    { id: 2, title: "New Products" },
    { id: 3, title: "Featured Products" }
  ];

  return (
   <div className="py-10">
    <p className="w-10/12 mx-auto">
      <span className="text-xl text-gray-600"><Link to="/">Home</Link>{" "}/ <span>All Products</span></span>
    </p>
     <div className="w-10/12 mx-auto flex gap-6 mt-20">
      {/* ক্যাটাগরি সাইডবার */}
      <div className="w-3/12">
        <div className="flex flex-col gap-5 w-[320px] p-8 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold">
            Categorie By Products
            <hr className="border-green-700 w-[100px]" />
            <hr className="border-gray-300 w-[225px]" />
          </h2>
          {categories.map((category, index) => (
            <div key={index}>
              <h1
                onClick={() => handleCategoryName(category)}
                className={`text-xl font-medium cursor-pointer ${
                  categoryName === category.title
                    ? "text-green-700 font-bold"
                    : "text-gray-700"
                } hover:text-green-700 transition-colors`}
              >
                {category.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <img className="rounded-lg" src={Image1} alt="Advertisement" />
        </div>

        <div className="flex flex-col gap-5 w-[320px] p-8 border border-gray-200 rounded-lg mt-10">
          <h2 className="text-xl font-semibold">
            Featured By Products
            <hr className="border-green-700 w-[100px]" />
            <hr className="border-gray-300 w-[225px]" />
          </h2>
          {featuredProducts.map((filter, index) => (
            <div key={index}>
              <h1
                onClick={() => handleFeaturedFilter(filter)}
                className={`text-xl font-medium cursor-pointer ${
                  activeFilter === filter.title
                    ? "text-green-700 font-bold"
                    : "text-gray-700"
                } hover:text-green-700 transition-colors`}
              >
                {filter.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* প্রোডাক্ট গ্রিড */}
      <div className="w-9/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryByProducts.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-[350px] h-[540px] border border-gray-200 rounded-xl p-6 mx-auto flex flex-col relative"
            >
              {product.featured && (
                <div className="absolute top-2 right-2 bg-green-700 text-white px-2 py-1 rounded text-sm font-medium">
                  {product.featured}
                </div>
              )}

              <div className="flex-1 overflow-hidden">
                <div className="w-[250px] h-[250px] object-cover mx-auto">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <p className="text-lg text-gray-800 mt-2">{product.category}</p>
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

              <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
}

export default AllProducts;
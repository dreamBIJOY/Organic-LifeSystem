import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LastSection from "../home page/components/Last Section/LastSection";
import BackToTopButton from "../home page/components/Back To Top Button/BackToTopButton";

function RelatedProducts({ id }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const currentProduct = data.find((item) => item.id === Number(id));
        if (currentProduct) {
          const related = data.filter(
            (item) =>
              item.category === currentProduct.category &&
              item.id !== currentProduct.id
          );
          setRelatedProducts(related);
        }
      });
  }, [id]);

  // প্রোডাক্ট ডিটেইলস পেজে যাওয়ার সময় স্ক্রল টপে নিয়ে যাওয়ার ফাংশন
  const handleProductClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // স্মুথ স্ক্রলিং এফেক্টের জন্য
    });
  };

  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div>
          <h1 className="text-3xl font-bold">Category Related Products</h1>
        </div>
        <div className="mt-4">
          <hr className="text-green-700 border-2 w-[250px]" />
          <hr className="text-gray-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="w-[320px] h-[520px] border border-gray-200 rounded-xl p-6 flex flex-col justify-between "
            >
              <Link 
                to={`/products-details/${item.id}`}
                onClick={handleProductClick} // এখানে onClick হ্যান্ডলার যোগ করুন
              >
                <div>
                  <div className="w-full h-[240px] object-cover mx-auto">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <p className="text-lg text-gray-800 mt-2">{item.category}</p>
                  <h2 className="text-xl truncate mt-2 font-bold">{item.name}</h2>
                  <p className="text-lg text-gray-800 truncate mt-3">
                    {item.description}
                  </p>
                  <p className="text-[18px] mt-2">
                    {"⭐".repeat(Math.round(item.rating))}
                  </p>
                  <p className="text-xl font-bold text-red-700 mt-2">
                    ${item.price}
                  </p>
                </div>
              </Link>
              <button className="btn w-full mt-4 py-3 text-lg font-semibold">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
      <LastSection/>
      <BackToTopButton/>
    </div>
  );
}

export default RelatedProducts;
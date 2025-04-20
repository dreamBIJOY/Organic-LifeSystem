import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Img1 from "../../assets/Products Detelis/4.png"
import Img2 from "../../assets/Products Detelis/2.png"
import Img3 from "../../assets/Products Detelis/1.png"
import RelatedProducts from "./RelatedProducts";


function ProductsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProduct = data.find(item => item.id === Number(id));
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          navigate("/not-found"); // যদি প্রোডাক্ট না পাওয়া যায়
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        navigate("/error"); // যদি ফেচিং এ এরর হয়
      });
  }, [id, navigate]); 

  useEffect(() => {

    if (!location.state?.fromRelated) {
      window.scrollTo(0, 0);
    }
  }, [location.state]);


  const [value, setValue] = useState(1); // 🔧 Quantity initial value fixed

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <p className="text-center text-3xl mt-10 text-green-700">
        Product Not Found
      </p>
    );
  }

  return (
  <div>
      <div className="w-10/12 mx-auto flex gap-40 py-20">
      <div className="w-4/10">
        <div className="w-[400px] h-[400px] p-8 border border-gray-200 rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt=""
          />
        </div>

        <div className="mt-5 flex items-center gap-10 justify-center -translate-x-[86px]">
        <img
            className="w-[90px] h-[90px] object-cover p-3 border border-gray-200"
            src={product.image}
            alt=""
          />
        <img
            className="w-[90px] h-[90px] object-cover p-3 border border-gray-200"
            src={product.image}
            alt=""
          />
        <img
            className="w-[90px] h-[90px] object-cover p-3 border border-gray-200"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="w-6/10">
        <div className="flex items-center gap-2">
          <p className="text-xl">{"⭐".repeat(Math.round(product.rating))}</p>
          <p className="text-xl">({product.rating})</p>
        </div>
        <h1 className="text-4xl font-bold text-black mt-5">{product.name}</h1>
        <p className="text-2xl text-gray-700 mt-5">{product.description}</p>
        <hr className="border-gray-200 w-full mt-3" />

        <h2 className="text-xl mt-5">Product Category: {product.category}</h2>

        {product.featured && (
          <h2 className="text-xl mt-3">Featured By: {product.featured}</h2>
        )}

        <h1 className="text-3xl text-black mt-10">
          Product Price:{" "}
          <span className="text-red-700 font-bold">${product.price}</span>
        </h1>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center w-[120px] h-[50px] border border-gray-300 rounded-lg text-center">
            <input
              type="text"
              value={value}
              readOnly
              className="w-8 text-2xl text-center outline-none"
            />
            <div className="flex flex-col translate-x-14">
              <button
                className="h-1/2 flex items-center justify-center rotate-180 hover:bg-gray-200"
                onClick={increment}
              >
                ▼
              </button>
              <button
                className="h-1/2 flex items-center justify-center hover:bg-gray-200"
                onClick={decrement}
              >
                ▼
              </button>
          </div>
            </div>
            <button className="btn px-10 text-xl py-6 bg-green-700 rounded-lg text-white">
              ADD TO CART
            </button>
        </div>

        <div>
          <div className="bg-[#cee08a] w-full px-5 py-3 rounded-lg mt-5 flex gap-2">
            <img src={Img1} alt="" />
              <p>
              <h1 className="text-xl">Security policy</h1>
              <p className="text-lg text-gray-800 mt-2">(edit with the Customer Reassurance module)</p>
              </p>
          </div>
          <div className="bg-[#cee08a] w-full px-5 py-3 rounded-lg mt-5 flex gap-2">
            <img src={Img3} alt="" />
              <p>
              <h1 className="text-xl">Delivery policy</h1>
              <p className="text-lg text-gray-800 mt-2">(edit with the Customer Reassurance module)</p>
              </p>
          </div>
          <div className="bg-[#cee08a] w-full px-5 py-3 rounded-lg mt-5 flex gap-2">
            <img src={Img2} alt="" />
              <p>
              <h1 className="text-xl">Return policy</h1>
              <p className="text-lg text-gray-800 mt-2">(edit with the Customer Reassurance module)</p>
              </p>
          </div>
          
        </div>
      </div>
    </div>
      <RelatedProducts id={id}/>
  </div>
  );
}

export default ProductsDetails;

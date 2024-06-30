import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
 

function ProductCard() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  const [magnifyState, setMagnifyState] = useState(
    Array(product.length).fill(false)
  );

  const [previewStyle, setPreviewStyle] = useState({
    display: "none",
    backgroundImage: "none",
    backgroundSize: "",
    backgroundPosition: "",
  });

  const handleMouseMove = (e, imageUrl, index) => {
    if (magnifyState[index]) {
      const x = 2; // Set the magnification ratio according to your requirement
      const y = 2; // Set the magnification ratio according to your requirement

      const posX = e.nativeEvent.offsetX;
      const posY = e.nativeEvent.offsetY;

      setPreviewStyle({
        display: "block",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${x * 100}% ${y * 100}%`,
        backgroundPosition: `-${posX * x}px -${posY * y}px`,
        left: `${e.target.offsetLeft}px`,
        top: `${e.target.offsetTop}px`,
      });
    }
  };

  const handleMouseLeave = () => {
    setPreviewStyle({
      display: "none",
      backgroundImage: "none",
      backgroundSize: "",
      backgroundPosition: "",
    });
  };

  const toggleMagnify = (index) => {
    const newState = [...magnifyState];
    newState[index] = !newState[index];
    setMagnifyState(newState);
  };

  return (
    <section className="text-gray-600 body-font">
    
      <div className="container px-5 py-8 md:py-16 mx-auto relative">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div class="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, 8)
            .map((item, index) => {
              const { title, price, description, imageUrl, id } = item;
              return (
                <div
                  key={index}
                  className="p-4 md:w-1/4 drop-shadow-lg"
                  style={{ position: "relative" }}
                >
                  <div
                    className="h-full border-2 relative"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                    onMouseMove={(e) => handleMouseMove(e, imageUrl, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      onClick={() => toggleMagnify(index)}
                      className="absolute top-2 right-2 cursor-pointer"
                      style={{
                        zIndex: "10",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => addCart(item)}
                        className="focus:outline-none bg-white hover:bg-gray-200 focus:bg-gray-200 focus:ring-4 focus:ring-purple-300 rounded-full text-pink-600 font-medium w-10 h-10 flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </button>
                      
                      <button className="focus:outline-none bg-white hover:bg-gray-200 focus:bg-gray-200 focus:ring-4 focus:ring-purple-300 rounded-full text-pink-600 font-medium w-10 h-10 mt-2 flex justify-center items-center">
                        M
                      </button>
                    </div>
                    <div
                      onClick={() =>
                        (window.location.href = `/productinfo/${id}`)
                      }
                      className="flex justify-center cursor-pointer"
                    >
                      <img
                        className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>

                    <div className=" flex justify-center">
                                                        <button type="button"
                                                            onClick={() => addCart(item)}
                                                            className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        
        <div
          className="zoom-preview"
          style={{
            ...previewStyle,
            position: "fixed",
            marginLeft: "30px",
            marginTop: "30px",
            width: "250px",
            height: "250px",
            border: "none",
            zIndex: "9999",
          }}
        ></div>
      </div>
      
    </section>
  );
}

export default ProductCard;

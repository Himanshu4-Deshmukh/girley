import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function Hoodies() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (id) => {
    window.location.href = `/productinfo/${id}`;
  };

  return (
    <Layout>
      <Filter />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product
              .filter((obj) => obj.category.toLowerCase() === 'hoodie')
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <div onClick={() => handleProductClick(id)} key={id} className="p-4 md:w-1/4 drop-shadow-lg cursor-pointer">
                    <div className={`h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                      <div className="flex justify-center">
                        <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out" src={imageUrl} alt={title} />
                      </div>
                      <div className="p-5 border-t-2">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">KRISHIKARE</h2>
                        <h1 className="title-font text-lg font-medium mb-3">{title}</h1>
                        <p className="leading-relaxed mb-3">₹{price}</p>
                        <div className="flex justify-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              addCart(item);
                            }}
                            className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                            aria-label={`Add ${title} to cart`}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Hoodies;

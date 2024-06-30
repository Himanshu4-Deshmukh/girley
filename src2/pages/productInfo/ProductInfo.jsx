import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Loader from '../../components/loader/Loader'; // Import your loader component

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const params = useParams();

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load product data');
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, [params.id]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader /> {/* Use your loader component here */}
                        </div>
                    ) : product ? (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt={product.title}
                                className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                                src={product.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    Product Name
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.title}
                                </h1>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.size}
                                </h1>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {product.description}
                                </p>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ₹{product.price}
                                    </span>
                                    <button onClick={() => addCart(product)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">Product not found</div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;

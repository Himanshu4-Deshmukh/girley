import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';
import Category from '../../components/category/Category';
import GoToTopButton from '../../components/gototop/GoToTopButton';

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className='bg-gray-300 px-5 py-2 rounded-xl hover:bg-gray-400 transition-colors duration-300'>
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
      <GoToTopButton />
    </Layout>
  );
}

export default Home;

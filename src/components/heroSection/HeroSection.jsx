import React from 'react'

function HeroSection() {
  return (
    <div>
        <img src="https://raw.githubusercontent.com/Himanshu4-Deshmukh/girley/main/src/assets/hero.jpg?token=GHSAT0AAAAAAB77DUJ26RP6OJC4HT2JYAVUZPYLEOQ" alt="" />
    </div>
  )
}

export default HeroSection






// import React, { useState, useEffect } from 'react';

// const Carousel = ({ interval = 3000 }) => {
//   const images = [
//  'https://www.redwolf.in/image/cache/catalog/sliders/Drop-cut-new-slider-1920-1920x450.jpg?m=1702356582',

//  'https://www.redwolf.in/image/cache/catalog/sliders/fullsleeves-slider-1920-1920x450.jpg?m=1699946779',
//  'https://www.redwolf.in/image/cache/catalog/sliders/oversized-tees-slider-1920-1920x450.jpg?m=1699517851',
//  'https://www.redwolf.in/image/cache/catalog/sliders/hoodies-slider-1920-1920x450.jpg?m=1699335455',


   
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId);
//   }, [currentIndex, images.length, interval]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full max-w-screen mx-auto overflow-hidden shadow-lg p-4 m-8 rounded-lg">
//       <div className="relative w-full">
//         <button
//           className="absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-white z-10"
//           onClick={prevSlide}
//         >
//           {/* &lt; */}
//         </button>
//         <img
//           className="w-full h-auto rounded-lg transition duration-500 ease-in-out"
//           src={images[currentIndex]}
//           alt={`slide-${currentIndex}`}
//         />
//         <button
//           className="absolute top-1/2 transform -translate-y-1/2 right-4 text-2xl text-white z-10"
//           onClick={nextSlide}
//         >
//           {/* &gt; */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

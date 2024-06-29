import React, { useState, useEffect } from 'react';
import scrollToTopIcon from '/src/assets/loki-go-to-top.webp'; // Import your background image

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  // Function to toggle the visibility of the button based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isVisible = scrollPosition > 300; // Show button after scrolling down 300px
    setIsVisible(isVisible);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="go-to-top-button"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '20px',
            width: '100px',
            height: '100px',
            backgroundImage: `url(${scrollToTopIcon})`,
            backgroundSize: 'cover',
            cursor: 'pointer',
            zIndex: '999',
          }}
        />
      )}
    </div>
  );
};

export default GoToTopButton;

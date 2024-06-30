import React from "react";

const FeaturedThemesCarousel = () => {
  // Function to handle click on a theme item and filter products
  const handleThemeClick = (category) => {
    // Here you can implement your filtering logic based on the clicked category
    console.log("Filter products based on category:", category);
  };

  <style jsx>{`
    @media screen and (max-width: 768px) {
      /* Adjust styles for screens smaller than 768px (typically mobile screens) */
      .owl-item {
        width: 100%; /* Ensure items take full width on smaller screens */
      }
    }
  `}</style>;

  return (
    <div
      id="featured-themes-carousel"
      className="owl-carousel owl-loaded owl-drag"
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <div className="owl-stage-outer">
        <div className="row mt-6">
          <br />
          <br />
          <h2 className="text-center text-4xl mb-8 carousel_title"><strong>Featured Themes</strong> </h2>
        </div>
        <div
          className="owl-stage"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {/* Add your carousel items here */}
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="/tshirt"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-anime-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="/hoodie"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-glow-in-dark-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>Hoodie</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-geek-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-cartoon-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          <div
            className="owl-item"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft:"5px",
              marginRight:"5px"
            }}
          >
            {" "}
            {/* Adjust the width as per your requirement */}
            <div className="item">
              <a
                href="#"
                onClick={() => handleThemeClick("SLOGAN")}
              >
                <img
                  src="https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531"
                  alt="SLOGAN"
                  className="custom-img-responsive featured-themes-carousel-img"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="featured_theme_title text-uppercase">
                <strong>TSHIRTS</strong>
                </span>
              </a>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedThemesCarousel;

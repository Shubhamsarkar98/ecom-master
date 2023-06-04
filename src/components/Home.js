import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { homeApi } from "../services/Service";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Home = () => {
  let [home, setHome] = useState(null);
  const [rerender, forceRerender] = useState(0);

  useEffect(() => {

    homeApi().then(data => { console.log(data); setHome(data); forceRerender(rerender + 1) })
  }, [])


  let bannerItems = null;

  if (home) {
    bannerItems = home.output.banners?.map((banner) => {
      return (
        <div
          key={banner.id}
          className="slider-height-6 d-flex align-items-start justify-content-start bg-img"
          style={{
            backgroundImage: `url(${banner.banner})`,
            // backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png)`,
          }}
        >
          <div className="container">
            <div className="slider-content-1 slider-animated-1 text-left">
              <span className="animated">{banner.title}</span>
              <h1 className="animated">
                {banner.caption} <br />
                {banner.type}
              </h1>
              <p className="animated">
                Free Shipping On Qualified Orders Over $35
              </p>
              <Link to='/shop' className="shop-btn animated">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      );
    });

  }




  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    item: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="slider-area">
        <OwlCarousel
          className="slider-active-3 owl-carousel slider-hm8 owl-dot-style owl-theme"
          {...options}
        >
          {bannerItems}
        </OwlCarousel>
      </div>
    </>
  );

}

export default Home;

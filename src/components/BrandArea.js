import React, { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../apiServices/api";
import { useCart } from "../context/CartContext";

export default function BrandArea() {



  const {brands,retriveBrand} = useCart()
  
  useEffect(() => {
    
    retriveBrand();
  }, []);
  console.log(brands);

  const brandItems = brands.map((brand) => {
    return (
      <div className="brand-slider-item" key={brand.id}>
        {brand.name}
        <a href="#">
          <img 
          src={brand.banner} 
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} 
          alt="" />
        </a>

      </div>
    );
  });

  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    item: 1,
    margin:10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  if (brands.length === 0)
    return null;
  else
    return (
      <>

        {/* Brand area start */}
        <div className="brand-area">
          <div className="container">
            <OwlCarousel className="brand-slider owl-carousel owl-nav-style owl-nav-style-2"
              {...options} nav >

              {brandItems}

            </OwlCarousel>
          </div>
        </div>

        {/* Brand area end */}
      </>
    );
}

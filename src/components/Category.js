import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useCart } from "../context/CartContext";

export default function Category() {
  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    item: 1,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const { categories } = useCart();
  console.log(categories);
  return (
    <div>
      {/* Category Area Start */}
      <section className="categorie-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Section Title */}
              <div className="section-title mt-res-sx-30px mt-res-md-30px">
                <h2>Popular Categories</h2>
                <p>Add Popular Categories to weekly line up</p>
              </div>
              {/* Section Title */}
            </div>
          </div>
          {/* Category Slider Start */}
          <div className="category-slider">
            <OwlCarousel
              className="category-slider owl-carousel owl-nav-style"
              {...options}
            >
              {/* Single item */}
              {categories?.map((cate, index) => {
                return (
                  <div className="category-item" key={cate.id}>
                    <div className="category-list mb-30px">
                      <div className="category-thumb">
                        <Link to="/shop" state={{ id: index, _id: cate.id }}>
                          <img
                            src={cate.banner ? cate.banner:"https://i.pinimg.com/originals/0e/13/c0/0e13c0a0c04befda2b72c1d5754a2368.jpg"}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="desc-listcategoreis">
                        <div className="name_categories">
                          <h4>{cate.name}</h4>
                        </div>
                        <span className="number_product"></span>
                        <Link to="/shop" state={{ id: index, _id: cate.id }}>
                          Shop Now{" "}
                          <i className="ion-android-arrow-dropright-circle" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* Category Area End  */}
    </div>
  );
}

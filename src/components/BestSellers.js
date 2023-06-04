import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import api from "../apiServices/api";
import { useCart } from "../context/CartContext";

export default function BestSellers() {
  const options = {
    autoplay: false,
    loop: false,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        loop: true,
      },
      360: {
        items: 1,
        autoplay: true,
        loop: true,
      },
      500: {
        items: 2,
        autoplay: true,
        loop: true,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };
  const {products,setProducts,getProducts} = useCart();
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getProducts();
    setData(products)
  },[])
  if (data.length === 0) return null;

  return (
    <div>
      {/* Best Sells Area Start */}
      <section className="best-sells-area mb-30px">
        <div className="container">
          {/* Section Title Start */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Best Sellers</h2>
                <p>Add bestselling products to weekly line up</p>
              </div>
            </div>
          </div>
          {/* Section Title End */}
          {/* Best Sell Slider Carousel Start */}
          <OwlCarousel
            className="best-sell-slider owl-carousel owl-nav-style"
            {...options}
          >
            {/* <div className="best-sell-slider owl-carousel owl-nav-style"> */}
            {/* Single Item */}
            {data.map((prod) => {
              return (
                <div key={prod.id}>
                  <article className="list-product" key={prod.id}>
                    <div className="img-block">
                      <Link
                        to={`/single-product`}
                        state={{ id: `${prod.id}`}}
                        className="thumbnail"
                      >
                        <img
                          className="first-img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                          alt=""
                        />
                      </Link>
                      <div className="quick-view">
                        <a
                          className="quick_view"
                          href="#"
                          data-link-action="quickview"
                          title="Quick view"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <ul className="product-flag">
                      <li className="new">New</li>
                    </ul>
                    <div className="product-decs">
                      <Link className="inner-link" to={`/single-product`}
                        state={{ id: `${prod.id}`}}>
                        <span>{prod.type}</span>
                      </Link>
                      <h2>
                        <Link to={`/single-product`}
                        state={{ id: `${prod.id}`}} className="product-link">
                        {prod.name}
                        </Link>
                      </h2>
                      <div className="rating-product">
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                      </div>
                      <div className="pricing-meta">
                        <ul>
                          <li className="old-price">₹{prod.product_variations[0].variations[0].sell_price_inc_tax}</li>
                          <li className="current-price">₹{prod.product_variations[0].variations[0].sell_price_inc_tax}</li>
                          <li className="discount-price">-5%</li>
                        </ul>
                      </div>
                    </div>
                    <div className="add-to-link">
                      <ul>
                        <li className="cart">
                          <a className="cart-btn" href="#">
                            ADD TO CART{" "}
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <i className="ion-android-favorite-outline" />
                          </a>
                        </li>
                        <li>
                          <a href="compare.html">
                            <i className="ion-ios-shuffle-strong" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              );
            })}


          </OwlCarousel>

          {/* Best Sells Carousel End */}
        </div>
      </section>
      {/* Best Sells Slider End */}
    </div>
  );
}

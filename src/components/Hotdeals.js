import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Hotdeals() {

  const options1 = {
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
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  return (
    <React.Fragment>
      <section className="hot-deal-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="row">
                <div className="col-md-12">
                  {/* Section Title */}
                  <div className="section-title">
                    <h2>Hot Deals</h2>
                    <p>Add hot products to weekly line up</p>
                  </div>
                  {/* Section Title End*/}
                </div>
              </div>
              {/* Hot Deal Slider Start */}
              
              {/* <div className="hot-deal owl-carousel owl-nav-style"> */}
                <OwlCarousel className="best-sell-slider owl-carousel owl-nav-style" {...options1}>
                {/*  Single item */}
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-16.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-16.jpg"
                        alt=""
                      />
                    </a>
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
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Originals Kaval Windbreaker Winter Jacket 2
                      </a>
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
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
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
                  </div>
                  <div className="in-stock">
                    Availability: <span>300 In Stock</span>
                  </div>
                  {/* <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31" />
                  </div> */}
                  <div className="clockdiv">
                                        <div className="title_countdown">Hurry Up! Offers ends in:</div>
                                        <div data-countdown="2021/12/31"><span className="cdown day">0 <p>Days</p></span> <span className="cdown hour">0 <p>Hours</p></span> <span className="cdown minutes">00 <p>Mins</p></span> <span className="cdown second">00 <p>Sec</p></span></div>
                                    </div>
                </article>
                {/*  Single item */}
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-11.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-12.jpg"
                        alt=""
                      />
                    </a>
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
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Originals Kaval Windbreaker Winter Jacket
                      </a>
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
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
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
                  </div>
                  <div className="in-stock">
                    Availability: <span>300 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31" />
                  </div>
                </article>
                {/*  Single item */}
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-15.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-2.jpg"
                        alt=""
                      />
                    </a>
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
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        New Balance Fresh Foam Kaymin
                      </a>
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
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
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
                  </div>
                  <div className="in-stock">
                    Availability: <span>299 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31" />
                  </div>
                </article>
                {/*  Single item */}
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-14.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-14.jpg"
                        alt=""
                      />
                    </a>
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
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Madden by Steve Madden Cale 6
                      </a>
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
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
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
                  </div>
                  <div className="in-stock">
                    Availability: <span>299 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31" />
                  </div>
                </article>
                {/*  Single item */}
              </OwlCarousel>
              {/* </div> */}
              {/* Hot Deal Slider End */}
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8">
              <div className="row">
                <div className="col-md-12">
                  {/* Section Title */}
                  <div className="section-title ml-0px mt-res-sx-30px">
                    <h2>New Arrivals</h2>
                    <p>Add new products to weekly line up</p>
                  </div>
                  {/* Section Title */}
                </div>
              </div>
              {/* New Product Slider Start */}
              <OwlCarousel className="new-product-slider owl-carousel owl-nav-style" {...options}>
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-16.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-16.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Originals Kaval Windbr...
                        </a>
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
                          <li className="old-price">€23.90</li>
                          <li className="current-price">€21.51</li>
                          <li className="discount-price">-10%</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-15.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-2.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Juicy Quil...
                        </a>
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
                          <li className="old-price">€35.90</li>
                          <li className="current-price">€34.11</li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-4.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-13.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>GRAPHIC CORNER</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Brixton Patrol All Terr...
                        </a>
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
                          <li className="old-price not-cut">€29.90</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-10.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-10.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Luxury Men's Slim...
                        </a>
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
                          <li className="old-price not-cut">€29.90</li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-11.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-12.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Originals Kaval Windbr...
                        </a>
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
                          <li className="old-price">€35.90</li>
                          <li className="current-price">€34.11</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-1.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-1.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Juicy Quil...
                        </a>
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
                          <li className="old-price">€35.90</li>
                          <li className="current-price">€34.11</li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-14.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-14.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Madden by Steve Madd...
                        </a>
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
                          <li className="old-price">€11.90</li>
                          <li className="current-price">€10.12</li>
                          <li className="discount-price">-15%</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-17.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-16.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Trans-Weight Hooded...
                        </a>
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
                          <li className="old-price not-cut">€19.90</li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-9.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-9.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Water and Wind Resist...
                        </a>
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
                          <li className="old-price not-cut">€11.90</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-2.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-15.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Balance Fresh Foa...
                        </a>
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
                          <li className="old-price">€18.90</li>
                          <li className="current-price">€15.11</li>
                          <li className="discount-price">-20%</li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-18.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-18.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Solid Slee...
                        </a>
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
                          <li className="old-price not-cut">€18.90</li>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-19.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-20.jpg"
                          alt=""
                        />
                      </a>
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
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Balance Fresh Foa...
                        </a>
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
                          <li className="old-price not-cut">€18.90</li>
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
              </OwlCarousel>
              {/* Product Slider End */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

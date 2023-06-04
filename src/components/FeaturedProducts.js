import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Hotdeals() {
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
        items: 4,
      },
    },
  };
  return (
    <React.Fragment>
      <section className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Section Title */}
              <div className="section-title">
                <h2>Featured Products</h2>
                <p>Add products to weekly line up</p>
              </div>
              {/* Section Title */}
            </div>
          </div>
          {/* Feature Slider Start */}
          <OwlCarousel className="feature-slider owl-carousel owl-nav-style" {...options} nav>
            {/* Single Item */}
            <div className="feature-slider-item">
              <article className="list-product">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Solid...
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Balance Fresh...
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
              </article>
            </div>
            {/* Single Item */}
            {/* <div className="feature-slider-item">
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
                      src="assets/images/product-image/organic/product-17.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Originals Kaval Win...
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
                    </ul>
                  </div>
                </div>
              </article>
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Originals Kaval Win...
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
                    </ul>
                  </div>
                </div>
              </article>
            </div> */}
            {/* Single Item */}
            <div className="feature-slider-item">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy...
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
                    </ul>
                  </div>
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy...
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
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
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
                      src="assets/images/product-image/organic/product-23.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Balance Fresh...
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
                      <li className="current-price">€15.12</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Balance Fresh...
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
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-5.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-5.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPHIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Trico...
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
                      <li className="old-price not-cut">€9.90</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-7.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-8.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPHIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Fila Locker Room V...
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
                      <li className="old-price not-cut">€9.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Trans-Weight Hood...
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
                    </ul>
                  </div>
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Luxury Men's...
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
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-22.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPHIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Calvin Klein Jeans...
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
              </article>
              <article className="list-product">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Water and Wind R...
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
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Madden by Steve...
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
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-4.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-3.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Brixton Patrol All T...
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
              </article>
            </div>
            {/* Single Item */}
            <div className="feature-slider-item">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy...
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
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* Single Item */}
          </OwlCarousel>
          {/* Feature Slider End */}
        </div>
      </section>
      {/* Feature Area End */}
    </React.Fragment>
  );
}

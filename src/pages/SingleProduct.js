import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import api from "../apiServices/api";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const SingleProduct = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const { id } = location.state;
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  useEffect(() => {
    const getProductDetails = async (id) => {
      const res = await api.post(`/products/${id}`);
      setProduct(res.data.output);
    };
    getProductDetails(id);
  }, []);

  if (product === "") return null;
  console.log(product);
  const request = {
    discount_amount: "null",
    cart_amount:
      product.product_variations[0].variations[0].sell_price_inc_tax * count,
    cart_discount_amount: "null",
    cart_discount_type: "null",
    cart_discount_rate: "null",
    cart_coupon: "null",
    product_id: product.id,
    discount_rate: "null",
    discount_type: "null",
    quantity: count,
    amount:
      product.product_variations[0].variations[0].sell_price_inc_tax * count,
    coupon: "null",
    variation_id:
      product.product_variations[0].variations[0].product_variation_id,
  };

  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-content">
                <h1 className="breadcrumb-hrading">Single Product Page</h1>
                <ul className="breadcrumb-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Single Product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* Shop details Area start */}
      <section className="product-details-area mtb-60px">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="product-details-img product-details-tab">
                <div className="zoompro-wrap zoompro-2">
                  <div className="zoompro-border zoompro-span">
                    <img
                      className="zoompro"
                      // src={product.image_url}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      data-zoom-image="assets/images/product-image/organic/zoom/1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                {/* <OwlCarousel id="gallery" className="product-dec-slider-2">
                  <a
                    className="active"
                    data-image="assets/images/product-image/organic/display/1.jpg"
                    data-zoom-image="assets/images/product-image/organic/zoom/1.jpg"
                  >
                    <img height={100} width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                  </a>
                  <a
                    data-image="assets/images/product-image/organic/display/2.jpg"
                    data-zoom-image="assets/images/product-image/organic/zoom/2.jpg"
                  >
                    <img height={100} width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                  </a>
                  <a
                    data-image="assets/images/product-image/organic/display/3.jpg"
                    data-zoom-image="assets/images/product-image/organic/zoom/3.jpg"
                  >
                    <img src={product.image_url} alt="" />
                  </a>
                  <a
                    data-image="assets/images/product-image/organic/display/4.jpg"
                    data-zoom-image="assets/images/product-image/organic/zoom/4.jpg"
                  >
                    <img
                      src="assets/images/product-image/organic/product-19.jpg"
                      alt=""
                    />
                  </a>
                </OwlCarousel> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="product-details-content">
                <h2>{product.name}</h2>
                <p className="reference">
                  Origin:<span> {product.origin}</span>
                </p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review">
                    <a className="reviews" href="#">
                      Read reviews (1)
                    </a>
                  </span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">
                      ₹
                      {
                        product.product_variations[0].variations[0]
                          .sell_price_inc_tax
                      }
                    </li>
                  </ul>
                </div>
                {/* <{product.product_description}/> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.product_description,
                  }}
                ></div>
                {/* <div className="pro-details-list">
                  <ul>
                    <li>- 0.5 mm Dail</li>
                    <li>- Inspired vector icons</li>
                    <li>- Very modern style</li>
                  </ul>
                </div> */}
                <div className="pro-details-quality mt-0px">
                  <div className="cart-plus-minus">
                    <div
                      className="dec qtybutton"
                      onClick={() => {
                        setCount(count > 1 ? count - 1 : 1);
                      }}
                    >
                      -
                    </div>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      name="qtybutton"
                      value={count}
                      onChange={(e) => {
                        setCount(e.target.value);
                      }}
                    />
                    <div
                      className="inc qtybutton"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </div>
                  </div>

                  <div className="pro-details-cart btn-hover">
                    <Link
                      to="/cart"
                      className="pro-details-cart btn-hover"
                      onClick={() => addToCart(request)}
                    >
                      {" "}
                      + Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href="#">
                      <i className="ion-android-favorite-outline" />
                      Add to wishlist
                    </a>
                  </div>
                  <div className="pro-details-compare">
                    <a href="#">
                      <i className="ion-ios-shuffle-strong" />
                      Add to compare
                    </a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-google" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-details-policy">
                  <ul>
                    <li>
                      <img src="assets/images/icons/policy.png" alt="" />
                      <span>
                        Security Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img src="assets/images/icons/policy-2.png" alt="" />
                      <span>
                        Delivery Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img src="assets/images/icons/policy-3.png" alt="" />
                      <span>
                        Return Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop details Area End */}
      {/* product details description area start */}
      <div className="description-review-area mb-60px">
        <div className="container">
          <div className="description-review-wrapper">
            <div className="description-review-topbar nav">
              <a data-bs-toggle="tab" href="#des-details1">
                Description
              </a>
              <a className="active" data-bs-toggle="tab" href="#des-details2">
                Product Details
              </a>
              <a data-bs-toggle="tab" href="#des-details3">
                Reviews (2)
              </a>
            </div>
            <div className="tab-content description-review-bottom">
              <div id="des-details2" className="tab-pane active">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </div>
              <div id="des-details1" className="tab-pane">
                <div className="product-description-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commo consequat. Duis aute irure dolor in reprehend in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
              <div id="des-details3" className="tab-pane">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src="assets/images/testimonial-image/1.png"
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src="assets/images/testimonial-image/2.png"
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Sus pen disse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="rating-product">
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

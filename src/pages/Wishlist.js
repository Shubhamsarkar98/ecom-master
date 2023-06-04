import React from "react";

export default function Wishlist() {
  return (
    <>
      <div>
        {/* Breadcrumb Area start */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Wishlist Page</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Area End */}
        {/* cart area start */}
        <div className="cart-main-area mtb-60px">
          <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>Add To Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product-image/mini-cart/1.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Product Name</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$60.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$70.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product-image/mini-cart/2.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Product Name</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$50.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$80.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product-image/mini-cart/3.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Product Name</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">$70.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                defaultValue={1}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">$90.00</td>
                          <td className="product-wishlist-cart">
                            <a href="#">add to cart</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

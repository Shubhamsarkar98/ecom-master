import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Cart() {
  // const [cartItems,setCartItems]=useState([]);
  const { cart, getCartDetails, deleteItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (user === "") {
      navigate("/login");
    }
    getCartDetails(user.api_token);
  }, []);
  let item = null;
  if (cart?.cart.length > 0) item = cart.cart[0].details;
  if (cart?.cart.length === 0)
    return (
      <>
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Your cart is Empty</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to="/"> Shop Now </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );

  return (
    <>
      <div>
        {/* Breadcrumb Area start */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Cart Page</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Cart</li>
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
                          <th>Unit Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.map((prod) => {
                          return (
                            <tr key={prod.id}>
                              <td className="product-thumbnail">
                                <a href="#">
                                  <img height={100} width={100}
                                    // src={prod.product.image}
                                    src={
                                      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                                    }
                                    alt="image"
                                  />
                                </a>
                              </td>
                              <td className="product-name">
                                <a href="#">{prod.product.name}</a>
                              </td>
                              <td className="product-price-cart">
                                <span className="amount">
                                  ₹{prod.variation.sell_price_inc_tax}
                                </span>
                              </td>
                              <td className="product-quantity">
                                <div className="cart-plus-minus">
                                  <button
                                    className="dec qtybutton"
                                    style={{ border: "none" }}
                                    onClick={(e)=>e.preventDefault()}
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="number"
                                    name="qtybutton"
                                    value={prod.quantity}
                                    readOnly
                                  />
                                  <button
                                    className="inc qtybutton"
                                    style={{ border: "none" }}
                                    onClick={(e)=>e.preventDefault()}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-subtotal">
                                ₹{prod.amount}
                              </td>
                              <td className="product-remove">
                                <div>
                                  <i
                                    className="fa fa-times"
                                    onClick={() => deleteItem(prod.id)}
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                          <Link to="/">Continue Shopping</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Estimate Shipping And Tax
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          Enter your destination to get a shipping estimate.
                        </p>
                        <div className="tax-select-wrapper">
                          <div className="tax-select">
                            <label>* Country</label>
                            <select className="nice-select email s-email s-wid open">
                              <option>India</option>
                              <option>Bangladesh</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select">
                            <label>* Region / State</label>
                            <select className="nice-select email s-email s-wid open">
                              <option>Noida</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select mb-25px">
                            <label>* Zip/Postal Code</label>
                            <input type="text" />
                          </div>
                          <button className="cart-btn-2" type="submit">
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required name="name" />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products <span>₹{cart?.cart[0].amount}</span>
                      </h5>
                      <div className="total-shipping">
                        <h5>Total shipping</h5>
                        <ul>
                          <li>
                            <input type="checkbox" /> Standard{" "}
                            <span>₹0.00</span>
                          </li>
                          <li>
                            <input type="checkbox" /> Express <span>₹0.00</span>
                          </li>
                        </ul>
                      </div>
                      <h4 className="grand-totall-title">
                        Grand Total <span>₹{cart?.cart[0].amount}</span>
                      </h4>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cart area end */}
      </div>
    </>
  );
}

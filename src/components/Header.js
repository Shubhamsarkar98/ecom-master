import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
// import OffCanvas from 'react-aria-offcanvas';
import { categoryApi } from "../services/Service";
import api from "../apiServices/api";

export default function Header() {
  const { cart, setCart, getCartDetails, categories, getCategories } =
    useCart();
  const { user, setUser, apiToken } = useUser();
  const [name, setName] = useState("Guest");
  const [amount, setAmount] = useState(0);
  const [no_of_items_in_cart, setNo_of_items_in_cart] = useState(0);

  useEffect(() => {
    if (cart?.cart.length > 0) {
      setAmount(cart.cart[0].amount);
      setNo_of_items_in_cart(cart.cart[0].details.length);
    }
    if (cart?.cart.length === 0) {
      setAmount(0);
      setNo_of_items_in_cart(0);
    }
  }, [cart]);

  // let amount=0,no_of_items_in_cart=0;
  // if(cart?.cart.length>0){
  //   amount =cart.cart[0].amount
  //   no_of_items_in_cart =cart.cart[0].details.length
  // }
  useEffect(() => {
    if (user !== "") setName(user.name);
    else setName("Guest");
  }, [user]);
  const logout = () => {
    // api.post('/logout',{headers: { Authorization: `Bearer ${apiToken}`}});
    setAmount(0);
    setNo_of_items_in_cart(0);
    setUser("");
    localStorage.setItem("user", "");
    setCart(null);
  };
  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <React.Fragment>
      {/* Header Start */}
      <header className="main-header">
        {/* Header Top Start */}
        <div className="header-top-nav">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/*Left Start*/}
              <div className="col-lg-4 col-md-12">
                <div className="text-lg-start text-center">
                  <p className="color-white">Welcome you to Ecolife store!</p>
                </div>
              </div>
              {/*Left End*/}
              {/*Right Start*/}
              <div className="col-8 d-lg-block d-none">
                <div className="header-right-nav hover-style-default">
                  <ul>
                    <li>
                      <Link to="/compare">
                        <i className="ion-ios-shuffle-strong" />
                        Compare (0)
                      </Link>
                    </li>
                    <li className="border-color-white">
                      <Link to="/wishlist">
                        <i className="ion-android-favorite-outline" />
                        Wishlist (0)
                      </Link>
                    </li>
                  </ul>
                  {/* Header Top Language Currency */}
                  <div className="header-top-set-lan-curr d-flex justify-content-end">
                    <div className="header-bottom-set dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-white"
                        data-bs-toggle="dropdown"
                      >
                        {" "}
                        Settings <i className="ion-ios-arrow-down" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/my-account">
                            My account
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/order-list">
                            My orders
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Sign in
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Single Wedge Start */}
                    <div className="header-top-curr dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-white"
                        data-bs-toggle="dropdown"
                      >
                        {" "}
                        <img
                          className="me-2"
                          src="assets/images/icons/1.jpg"
                          alt=""
                        />
                        English
                        <i className="ion-ios-arrow-down" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src="assets/images/icons/1.jpg" alt="" />
                            English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src="assets/images/icons/2.jpg" alt="" />
                            Français
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Single Wedge End */}
                    {/* Single Wedge Start */}
                    <div className="header-top-curr dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-white pr-0"
                        data-bs-toggle="dropdown"
                      >
                        USD $
                        <i className="ion-ios-arrow-down" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a className="dropdown-item" href="#">
                            USD $
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            EUR €
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Single Wedge End */}
                  </div>
                  {/* Header Top Language Currency */}
                </div>
              </div>
              {/*Right End*/}
            </div>
          </div>
        </div>
        {/* Header Top End */}
        {/* Header Buttom Start */}
        <div className="header-navigation sticky-nav d-none d-lg-block">
          <div className="container-fluid">
            <div className="row">
              {/* Logo Start */}
              <div className="col-md-2 col-sm-2">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              {/* Logo End */}
              {/* Navigation Start */}
              <div className="col-md-10 col-sm-10">
                {/*Main Navigation Start */}
                <div className="main-navigation">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#">
                        Categories <i className="ion-ios-arrow-down" />
                      </a>
                      <ul className="sub-menu">
                        {categories?.map((info, id) => {
                          return (
                            <li
                              className="menu-dropdown position-static"
                              key={info.id}
                            >
                              <Link to="/shop" state={{ id: id, _id: info.id }}>
                                {info.name} <i className="ion-ios-arrow-down" />
                              </Link>
                              {info.categories.length > 0 ? (
                                <ul className="sub-menu sub-menu-2">
                                  {info.categories?.map((subcat, id) => {
                                    return (
                                      <li key={subcat.id}>
                                        <a href="index.html">{subcat.name}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : (
                                ""
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="shop">
                      <Link to="/shop">
                        Shop
                        {/* <i className="" /> */}
                      </Link>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">
                        Pages <i className="ion-ios-arrow-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/about">About Page</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart Page</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout Page</Link>
                        </li>
                        <li>
                          <Link to="/compare">Compare Page</Link>
                        </li>
                        <li>
                          <Link to="/login">Login &amp; Regiter Page</Link>
                        </li>
                        <li>
                          <Link to="/my-account">Account Page</Link>
                        </li>
                        <li>
                          <Link to="/wishlist">Wishlist Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                {/*Main Navigation End */}
                {/*Header Bottom Account Start */}
                <div className="header_account_area">
                  {/*Seach Area Start */}

                  {/*Contact info Start */}
                  <div className="contact-link">
                    <div className="">
                      <span>
                        <b>Welcome : {name}</b>
                      </span>
                      {user !== "" ? (
                        <button
                          style={{ border: "none", background: "none" }}
                          onClick={logout}
                        >
                          <b>Logout </b>{" "}
                        </button>
                      ) : (
                        <Link to={"/login"}> Login </Link>
                      )}
                    </div>
                  </div>
                  {/*Contact info End */}
                  {/*Cart info Start */}
                  <div className="cart-info d-flex">
                    <div className="mini-cart-warp">
                      <Link
                        to="/cart"
                        className="count-cart color-black offcanvas-toggle"
                      >
                        <span className="amount-tag"> ₹ {amount}</span>
                        <span className="item-quantity-tag">
                          {no_of_items_in_cart}
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/*Cart info End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Header Bottom Account End */}
        {/* Header mobile area start */}
        <div className="header-bottom d-lg-none sticky-nav py-3 mobile-navigation">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-3 col-sm-3">
                <Link
                  to="/offcanvas-mobile-menu"
                  // onClick={console.log("i am onClick")}
                  className="offcanvas-toggle mobile-menu"
                >
                  <i className="ion-navicon" />
                </Link>
              </div>
              <div className="col-md-6 col-sm-4 d-flex justify-content-center">
                <div className="logo m-0">
                  <Link to="/">
                    <img src="assets/images/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-sm-5">
                {/*Cart info Start */}
                <div className="cart-info d-flex m-0 justify-content-end">
                  <div className="header-bottom-set dropdown">
                    <button
                      className="dropdown-toggle border-0 header-action-btn hover-style-default"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      <i className="ion-person" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/my-account">
                          My account
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/checkout">
                          Checkout
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/order-list">
                          My Order
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mini-cart-warp">
                    <Link
                      to="/cart"
                      className="count-cart color-black offcanvas-toggle"
                    >
                      <span className="amount-tag">₹{amount}</span>
                      <span className="item-quantity-tag">
                        {no_of_items_in_cart}
                      </span>
                    </Link>
                  </div>
                </div>
                {/*Cart info End */}
              </div>
            </div>
          </div>
        </div>
        {/* Header mobile area end */}
      </header>
      {/* Header End */}
    </React.Fragment>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import api from "../apiServices/api";
export default function Checkout() {
  const { cart } = useCart();
  const { user, apiToken, setUser } = useUser();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  const [full_name, setFull_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address_line_1, setAddress_line_1] = useState("");
  const [address_line_2, setAddress_line_2] = useState("");
  const [state, setState] = useState("Delhi-NCR");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [zip_code, setZip_code] = useState("");

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      setContact(user.contact);
    }
  }, []);

  const request = {
    products: [],
    quantity: [],
    customer_id: user?.id,
    shipping_name: full_name,
    shipping_email: contact?.email,
    shipping_mobile: mobile,
    shipping_address_line_1: address_line_1,
    shipping_address_line_2: address_line_2,
    shipping_state: state,
    shipping_city: city,
    shipping_country: country,
    shipping_zip_code: zip_code,
    payment_status: true,
    cart_id: cart?.cart[0]?.id,
  };
  console.log(request)
  let item = null;
  if (cart?.cart.length > 0) item = cart.cart[0].details;
  request.products = item?.map((prod, idx) => prod.variation.id);
  request.quantity = item?.map((prod, idx) => prod.quantity);
  useEffect(() => {
    if (contact) {
      setFull_name(contact.name || "");
      setMobile(contact.mobile || "");
      setAddress_line_1(contact.address_line_1 || "");
      setAddress_line_2(contact.address_line_2 || "");
      setCity(contact.city || "");
      setEmail(contact.email || "");
      setZip_code(contact.zip_code || "");
    }
  }, [contact]);

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

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    var options = {
      key: "rzp_test_qMjKmEYqwFZuvC", // Enter the Key ID generated from the Dashboard
      name: "Pyzen Technologies",
      currency: "INR",
      amount: cart?.cart[0].amount * 100,
      // order_id: cart?.cart[0].id.toString(),
      description: "Thankyou for shopping",
      image:
        "https://scontent.fdel1-5.fna.fbcdn.net/v/t1.6435-9/124065068_159700595868491_8907735804857102568_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RsY3lvIoI4EAX8kw773&_nc_ht=scontent.fdel1-5.fna&oh=00_AT-_9jF-ayDrostqXo6zOhDKP9OOnHDvKZfseUJQozLZFQ&oe=6246FB3B",
      handler: async function (response) {
        // try using webhooks here
        alert(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {
          const res = await api.post("/complete-order", request, {
            headers: { Authorization: `Bearer ${apiToken}` },
          });
          if (res) {
            alert(res.data.message);
            navigate("/order-list");
          }
        }
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: contact?.name,
        email: contact?.email,
        contact: contact?.mobile,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div>
        {/* checkout area start */}
        <div className="checkout-area mt-60px mb-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                {/* <EditAccount /> */}
                <div className="billing-info-wrap">
                  <h3>Shipping Details</h3>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="billing-info mb-20px">
                        <label>Full Name</label>
                        <input required={true}
                          type="text"
                          name="full_name"
                          value={full_name}
                          onChange={(e) => {
                            setFull_name(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-select mb-20px">
                        <label>Country</label>
                        <select className="nice-select">
                          <option>India</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20px">
                        <label>Street Address</label>
                        <input
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                          name="address_line_1"
                          value={address_line_1}
                          onChange={(e) => {
                            setAddress_line_1(e.target.value);
                          }}
                        />
                        <input
                          placeholder="Apartment, suite, unit etc."
                          type="text"
                          name="address_line_2"
                          value={address_line_2}
                          onChange={(e) => {
                            setAddress_line_2(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20px">
                        <label>Town / City</label>
                        <input
                          type="text"
                          name="city"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20px">
                        <label>State </label>
                        <select
                          className="nice-select"
                          value={state}
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                        >
                          <option>Uttar Pradesh</option>
                          <option>Ghaziabad</option>
                          <option>Delhi-NCR </option>
                          <option>Haryana</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20px">
                        <label>Postcode / ZIP</label>
                        <input
                          type="text"
                          name="zip_code"
                          value={zip_code}
                          onChange={(e) => {
                            setZip_code(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20px">
                        <label>Mobile</label>
                        <input required
                          type="text"
                          name="mobile"
                          value={mobile}
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20px">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          {item?.map((prod, idx) => {
                            return (
                              <li>
                                <span className="order-middle-left">
                                  {prod.product.name} X {prod.quantity}
                                </span>{" "}
                                <span className="order-price">
                                  ₹{prod.amount}{" "}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>₹{cart?.cart[0].amount}</li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="payment-method">
                      <div className="payment-accordion element-mrg">
                        <div className="panel-group" id="accordion">
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-one">
                              <h4 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#method1"
                                >
                                  Direct bank transfer
                                </a>
                              </h4>
                            </div>
                            <div
                              id="method1"
                              className="panel-collapse collapse show"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-two">
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  data-bs-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#method2"
                                >
                                  Check payments
                                </a>
                              </h4>
                            </div>
                            <div
                              id="method2"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-three">
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  data-bs-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#method3"
                                >
                                  Cash on delivery
                                </a>
                              </h4>
                            </div>
                            <div
                              id="method3"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="Place-order mt-25">
                    <Link
                      to={""}
                      className="btn-hover"
                      onClick={() => makePayment()}
                    >
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkout area end */}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../apiServices/api";
import { useUser } from "../context/UserContext";

export const MyOrder = () => {
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const { apiToken } = useUser();
  useEffect(() => {
    const getAllOrder = async () => {
      const res = await api.get("/order-list", {
        headers: { Authorization: `Bearer ${apiToken}` },
      });
      setOrders(res.data.output.order);
    };
    getAllOrder();
  }, []);
  const [checked, setChecked] = useState(new Array(10).fill(false));

  console.log(checked?.length);
  useEffect(() => {
    setChecked(checked);
    console.log(checked);
  }, [checked]);
  const setTrue = async (i, ord_id) => {
    const res = await api.get(`/order-detail`, {
      params: { order_id: ord_id },
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    setOrderDetails(res.data.output.order[0]);
    let checkArray = checked.map((j, idx) => {
      if (i == idx) return !j;
      return false;
    });
    console.log(checkArray);
    setChecked(checkArray);
  };
  if (orders?.length === 0) {
    return (
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-content">
                <h1 className="breadcrumb-hrading">You have no orders</h1>
                <ul className="breadcrumb-links">
                  <li>
                    <Link to="/shop">shop</Link>
                  </li>
                  {/* <li>Cart</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      {orders
        ?.slice()
        .reverse()
        .map((order, idx) => {
          return (
            <div key={idx}>
              <div className="checkout-area mtb-60px">
                <div className="container">
                  <div className="row">
                    <div className="mx-auto col-lg-9">
                      <div className="checkout-wrapper">
                        <div id="faq" className="panel-group">
                          <div className="panel panel-default single-my-account">
                            <div className="panel-heading my-account-title">
                              <h3 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  data-parent="#faq"
                                  href={order.id}
                                  onClick={() => setTrue(idx, order.id)}
                                >
                                  Order Id : {order.id} <br></br>
                                  Order date : {order.created_at.slice(
                                    0,
                                    10
                                  )}{" "}
                                  <br></br>
                                  Total amount : {order.total_before_tax}
                                </a>
                              </h3>
                            </div>
                            {/* {console.log((checked[idx]))} */}
                            {checked[idx] && (
                              <div
                              // id={order.id}
                              // className="panel-collapse collapse"
                              >
                                <div className="panel-body">
                                  <div className="myaccount-info-wrapper row">
                                    
                                    <div className="your-order-area col-6">
                                      <div className="your-order-wrap gray-bg-4">
                                        <div className="your-order-product-info">
                                          <div className="your-order-top">
                                            <ul>
                                              <li>Products</li>
                                              <li>Total</li>
                                            </ul>
                                          </div>
                                          <div className="your-order-middle">
                                            <ul>
                                              {order.sell_lines?.map(
                                                (prod, idx) => {
                                                  return (
                                                    <li>
                                                      <span className="order-middle-left">
                                                        {prod.unit_price} X{" "}
                                                        {prod.quantity}
                                                      </span>{" "}
                                                      <span className="order-price">
                                                        ₹
                                                        {prod.quantity *
                                                          prod.unit_price}{" "}
                                                      </span>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          </div>
                                          <div className="your-order-bottom">
                                            <ul>
                                              <li className="your-order-shipping">
                                                Shipping
                                              </li>
                                              <li>Free shipping</li>
                                            </ul>
                                          </div>
                                          <div className="your-order-total">
                                            <ul>
                                              <li className="order-total">
                                                Total
                                              </li>
                                              <li>₹{order.final_total}</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="account-info-wrapper gray-bg-4 col-6"
                                      style={{ border: "none", "float":"right"}}
                                    >
                                      <div className="your-order-wrap gray-bg-4 " style={{ "float":"right"}}>
                                      <h4>Shipping Address</h4>
                                      <h5>{order.shipping_add.name}</h5>
                                      <h5>
                                        {order.shipping_add.address_line_1}
                                        {"  "}
                                        {order.shipping_add.address_line_2}
                                      </h5>
                                      <h5>
                                        {order.shipping_add.city} {"  "}
                                        {order.shipping_add.state}
                                      </h5>
                                      <h5>{order.shipping_add.zipcode}</h5>
                                      <h5>{order.shipping_add.country}</h5>
                                      <h5>{order.shipping_add.mobile}</h5><br/>
                                      <h4>Payment Status : {order.payment_status} </h4>
                                      </div>
                                      <h5></h5>

                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

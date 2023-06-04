import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function MyAccount() {
  const {user}=useUser();
  const [contact, setContact]=useState(null)
  useEffect(()=>{
    if(user!=='')
  setContact(user.contact)
  console.log(user.contact)
  },[contact])
  
  return (
    <>
      <div>
        {/* Breadcrumb Area start */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Account Page</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>My Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Area End */}
        {/* account area start */}
        <div className="checkout-area mtb-60px">
          <div className="container">
            <div className="row">
              <div className="mx-auto col-lg-9">
                <div className="checkout-wrapper">
                  <div id="faq" className="panel-group">
                    <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>1 .</span>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-1"
                          >
                            Edit your account information{" "}
                          </a>
                        </h3>
                      </div>
                      <div
                        id="my-account-1"
                        className="panel-collapse collapse show"
                      >
                        <div className="panel-body">
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                              <h5>Your Personal Details</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input type="text" 
                                  defaultValue={contact?.first_name}/>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" 
                                  defaultValue={contact?.last_name} />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email"
                                  defaultValue={contact?.email} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Mobile</label>
                                  <input type="text" 
                                  defaultValue={contact?.mobile}/>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Landline</label>
                                  <input type="text"
                                  defaultValue={contact?.landline} />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="fa fa-arrow-up" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>2 .</span>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-2"
                          >
                            Change your password{" "}
                          </a>
                        </h3>
                      </div>
                      <div
                        id="my-account-2"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password Confirm</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="fa fa-arrow-up" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>3 .</span>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-3"
                          >
                            Modify your address book entries{" "}
                          </a>
                        </h3>
                      </div>
                      <div
                        id="my-account-3"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Address Book Entries</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <p>{contact?.name}</p>
                                    <p>{contact?.address_line_1},</p>
                                    <p>{contact?.address_line_2},</p>
                                    <p>{contact?.city}.</p>
                                    <p>{contact?.state},</p>
                                    <p>{contact?.zip_code},</p>
                                    <p>{contact?.country}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    <Link className="edit" to="/edit-account">
                                      Edit
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="fa fa-arrow-up" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>4 .</span>{" "}
                          <a href="wishlist.html">Modify your wish list </a>
                        </h3>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* account area end */}
      </div>
    </>
  );
}

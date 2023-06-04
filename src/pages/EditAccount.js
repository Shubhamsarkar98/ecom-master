import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apiServices/api";
import { useUser } from "../context/UserContext";

export const EditAccount = () => {
  const { user,apiToken,setUser } = useUser();
  const navigate =useNavigate()
  const [contact, setContact] = useState(null);

  const [first_name, setF_name] = useState('');
  const [last_name, setL_name] = useState('');
  const [mobile, setMobile] = useState('');
  const [address_line_1, setAddress_line_1] = useState('');
  const [address_line_2, setAddress_line_2] = useState('');
  const [state, setState] = useState("Delhi-NCR");
  const [city, setCity] = useState('');
  const [country, setCountry] = useState("India");
  const [zip_code, setZip_code] = useState('');
  const [gender, setGender] = useState("Male");
  const [landline, setLandline] = useState('');

  useEffect(() => {
    console.log(user)
    if (!user) 
    navigate('/login')
    else{
      setContact(user.contact)
    }
  }, [])




  const request ={
    "first_name": first_name,
    "last_name": last_name,
    "email": contact?.email,
    "mobile": mobile,
    "address_line_1": address_line_1,
    "address_line_2": address_line_2,
    "state": state,
    "city": city, 
    "country": country,
    "gender": gender,
    "zip_code":zip_code,
    "landline":landline
  }
  console.log(city)
  
  const updateDetails =async(e)=>{
    e.preventDefault();
    console.log(request);
    const res = await api.post('/update-profile',request,{headers: { Authorization: `Bearer ${apiToken}`}})
    console.log(res.data)
    if(res){
      setUser(res.data.output)
      alert("Your data has been successfully updated...")
    }

  }
  useEffect (()=>{
    if(contact){
      setF_name(contact.first_name||'')
      setL_name(contact.last_name||'')
      setMobile(contact.mobile||'')
      setAddress_line_1(contact.address_line_1||'')
      setAddress_line_2(contact.address_line_2||'')
      setCity(contact.city||'')
      setZip_code(contact.zip_code||'')
      setLandline(contact.landline||'')
    }
  },[contact])

  return (
    <>
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
                                <input
                                  type="text"
                                  name="first_name"
                                  value={first_name}
                                  onChange={(e) => {
                                    setF_name(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="last_name"
                                  value={last_name}
                                  onChange={(e) => {
                                    setL_name(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Address Line 1</label>
                                <input
                                  type="text"
                                  name="address_line_1"
                                  value={address_line_1}
                                  onChange={(e) => {
                                    setAddress_line_1(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Address Line 2</label>
                                <input
                                  type="text"
                                  name="address_line_2"
                                  value={address_line_2}
                                  onChange={(e) => {
                                    setAddress_line_2(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Mobile</label>
                                <input
                                  type="text"
                                  name="mobile"
                                  value={mobile}
                                  onChange={(e) => {
                                    setMobile(e.target.value)}}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Landline</label>
                                <input
                                  type="text"
                                  name="landline"
                                  value={landline}
                                  onChange={(e) => {
                                    setLandline(e.target.value)}}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>City</label>
                                <input
                                  type="text"
                                  name="city"
                                  value={city}
                                  onChange={(e) => {
                                    setCity(e.target.value);}}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>State</label>
                                <div>
                                  <select className="nice-select email s-email s-wid open billing-info"
                                  value={state}
                              
                                  onChange = {(e)=>{setState(e.target.value)}}>
                                    <option>Uttar Pradesh</option>
                                    <option>Ghaziabad</option>
                                    <option>Delhi-NCR </option>
                                    <option>Haryana</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Zip Code</label>
                                <input
                                  type="text"
                                  name="zip_code"
                                  value={zip_code}
                                  onChange = {(e)=>{setZip_code(e.target.value)}}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Country</label>
                                <div>
                                  <select className="nice-select email s-email s-wid open billing-info"
                                  value={country}
                                  onChange = {(e)=>setCountry(e.target.value)}>
                                    <option>India</option>
                                    <option>Others</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Gender</label>
                                <div>
                                  <select className="nice-select email s-email s-wid open billing-info"
                                  value={gender}
                                  onChange = {(e)=>setGender(e.target.value)}
                                  >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                  </select>
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
                              <button onClick={(e)=>updateDetails(e)}>Continue</button>
                            </div>
                          </div>
                        </div>
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

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../apiServices/api";
import { useUser } from "../context/UserContext";

export default function LoginSignUp() {
  const {user,setUser,apiToken,setApiToken}  = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setF_name] = useState("");
  const [last_name, setL_name] = useState("");
  const [phone, setPhone] = useState("");
  const items ={email,password ,"device_token":'jj' };
  const registration_data ={first_name, last_name, phone,email,password ,"type":'customer' };
  const navigate = useNavigate();
  
  const login =async (e)=>{
    e.preventDefault();
    if(email==''||password=='')
    alert("All fields are mandatory!")
    else{
      try {
        const user_data = await api.post('/login',items)
        alert(user_data.data.message);
        if(user_data.data.message=='Login Sucessfully'){
          setUser(user_data.data.output.user)
          localStorage.setItem("user", JSON.stringify(user_data.data.output.user))
          navigate('/cart');
        }
        
      } catch (error) {
        alert('invalid email/password');
      }
      setEmail('');
      setPassword('');
    }
    
  }
  const register =async (e)=>{
    e.preventDefault();
    if(email==''||password=='' || first_name==''|| phone=='' )
    alert("All fields are mandatory!")
    try {
      const user_data = await api.post('/register',registration_data)
      alert(user_data.data.message);
      console.log(user_data.data);
      if(user_data.data.message=='Register Sucessfully'){
        navigate('/');


      }
      
    } catch (error) {
      alert('invalid email/password');
    }
  }
  console.log(password)
  return (
    <>
      <div>
        {/* Breadcrumb Area start */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Login / Register Page</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Login / Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Area End */}
        {/* login area start */}
        <div className="login-register-area mb-60px mt-53px">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 mx-auto">
                <div className="login-register-wrapper">
                  <div className="login-register-tab-list nav">
                    <a className="active" data-bs-toggle="tab" href="#lg1">
                      <h4>login</h4>
                    </a>
                    <a data-bs-toggle="tab" href="#lg2">
                      <h4>register</h4>
                    </a>
                  </div>
                  <div className="tab-content">
                    <div id="lg1" className="tab-pane active">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form action="">
                            <input
                              type="email" id="email"
                              name="email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              placeholder="Email"
                            />
                            <input
                              type="password" id="password"
                              name="password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                              placeholder="Password"
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn">
                                <input type="checkbox" />
                                <a
                                  className="flote-none"
                                  // href="javascript:void(0)"
                                >
                                  Remember me
                                </a>
                                <a href="#">Forgot Password?</a>
                              </div>
                              <button type="submit" onClick={login}>
                                <span>Login</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div id="lg2" className="tab-pane">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form action="">
                            <input
                              type="text"
                              name="first_name"
                              placeholder="First name"
                              value={first_name}
                              onChange={(e)=>setF_name(e.target.value)}
                            />
                            <input
                              type="text"
                              name="last_name"
                              placeholder="Last name"
                              value={last_name}
                              onChange={(e)=>setL_name(e.target.value)}
                            />
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Mobile Number"
                              value={phone}
                              onChange={(e)=>setPhone(e.target.value)}
                            />
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                            />
                            <div className="button-box">
                              <button type="submit" onClick={register}>
                                <span>Register</span>
                              </button>
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
        {/* login area end */}
      </div>
    </>
  );
}

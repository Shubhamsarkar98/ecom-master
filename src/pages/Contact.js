import React from "react";

export default function Contact() {
  return (
    <>
      {/* Breadcrumb Area End */}
      {/* contact area start */}
      <div className="contact-area mtb-60px">
        <div className="container">
          <div className="contact-map mb-10">
            <div id="map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <a href="https://sites.google.com/view/maps-api-v2/mapv2" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-row-2">
            <div className="col-lg-4 col-md-5">
              <div className="contact-info-wrap">
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-info-dec">
                    <p>+012 345 678 102</p>
                    <p>+012 345 678 102</p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="contact-info-dec">
                    <p>
                      <a href="#">urname@email.com</a>
                    </p>
                    <p>
                      <a href="#">urwebsitenaem.com</a>
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="contact-info-dec">
                    <p>Address goes here,</p>
                    <p>street, Crossroad 123.</p>
                  </div>
                </div>
                <div className="contact-social">
                  <h3>Follow Us</h3>
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
                          <i className="ion-social-youtube" />
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
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="contact-form">
                <div className="contact-title mb-30">
                  <h2>Get In Touch</h2>
                </div>
                <form
                  className="contact-form-style"
                  id="contact-form"
                  action="https://whizthemes.com/nazmul/php/mail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <input name="name" placeholder="Name*" type="text" />
                    </div>
                    <div className="col-lg-6">
                      <input name="email" placeholder="Email*" type="email" />
                    </div>
                    <div className="col-lg-12">
                      <input
                        name="subject"
                        placeholder="Subject*"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        name="message"
                        placeholder="Your Message*"
                        defaultValue={""}
                      />
                      <button className="submit" type="submit">
                        SEND
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
    </>
  );
}

import React from 'react'

export default function BannerArea() {
  return (
    <div>
      {/* Banner Area Start */}
      <div className="banner-area">
        <div className="container">
          <div className="row mb-n-30px">
            <div className="col-lg-3 col-sm-6 mb-30px xs-6 order-1 order-lg-1">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/1.jpg" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-30px order-3 order-lg-2">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/2.jpg" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30px xs-6 order-2 order-lg-3">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/3.jpg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area End */}

    </div>
  )
}
